import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Corrected import

const continents = [
  { name: 'Africa', lat: 1.65, lon: 17.34 },
  { name: 'Asia', lat: 34.05, lon: 100.62 },
  { name: 'Europe', lat: 54.52, lon: 15.25 },
  { name: 'North America', lat: 54.52, lon: -105.25 },
  { name: 'South America', lat: -15.60, lon: -56.10 },
  { name: 'Australia', lat: -25.27, lon: 133.77 },
  { name: 'Antarctica', lat: -82.86, lon: 135.00 }
];

export default function App() {
  const mountRef = useRef(null);
  const tooltipRef = useRef(null);
  const earthGroupRef = useRef(null);
  const selectedMarkerRef = useRef(null);
  const markerMapRef = useRef(new Map());

  const [selectedContinent, setSelectedContinent] = useState(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const markerObjects = [];

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const radius = 1;
    const earthGeometry = new THREE.SphereGeometry(radius, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(
        'https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg'
      )
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);

    const earthGroup = new THREE.Group();
    earthGroup.add(earth);
    earthGroup.rotation.x = THREE.MathUtils.degToRad(23.5); // tilt
    scene.add(earthGroup);
    earthGroupRef.current = earthGroup;

    scene.add(new THREE.AmbientLight(0xcccccc));
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(5, 3, 5);
    scene.add(light);

    function latLongToVector3(lat, lon, radius) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    continents.forEach(({ name, lat, lon }) => {
      const pos = latLongToVector3(lat, lon, radius + 0.02);
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.015, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      );
      marker.position.copy(pos);
      marker.userData.name = name;
      earth.add(marker);
      markerObjects.push(marker);
      markerMapRef.current.set(name, marker);
    });

    const onMouseMove = (event) => {
      const bounds = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markerObjects);

      if (intersects.length > 0) {
        const { name } = intersects[0].object.userData;
        tooltipRef.current.style.display = 'block';
        tooltipRef.current.style.left = `${event.clientX + 10}px`;
        tooltipRef.current.style.top = `${event.clientY + 10}px`;
        tooltipRef.current.textContent = name;
      } else {
        tooltipRef.current.style.display = 'none';
      }
    };

    renderer.domElement.addEventListener('mousemove', onMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.0005;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // 🌍 Rotate globe to selected continent
  useEffect(() => {
    if (!selectedContinent || !earthGroupRef.current) return;

    const earthGroup = earthGroupRef.current;
    const { lat, lon } = selectedContinent;
  
    const radius = 1;
  
    // Convert lat/lon to 3D position on sphere
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const targetPos = new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  
    // Create a dummy object at the target position
    const dummy = new THREE.Object3D();
    dummy.position.set(0, 0, 0); // globe center
    dummy.lookAt(targetPos);     // this aligns the object to point to that marker
  
    const startQuat = earthGroup.quaternion.clone();
    dummy.lookAt(targetPos);
    const targetQuat = dummy.quaternion.clone();

    let frame = 0;
    const duration = 60;

    const animateRotation = () => {
      frame++;
      const t = frame / duration;
      const easedT = t * (2 - t); // ease-out easing

      // Use slerp instance method
      earthGroup.quaternion.copy(startQuat).slerp(targetQuat, easedT);

      if (frame < duration) {
        requestAnimationFrame(animateRotation);
      }
    };
  
    animateRotation();
  }, [selectedContinent]);

  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '300px', padding: '10px', position: 'absolute', top: '0px', left: '0px', zIndex: 2, pointerEvents: 'auto' }}>
          <h4 style={{ color: 'white' }}>
          Continents {selectedContinent?.name ? `- ${selectedContinent.name}` : ''}
          </h4>
          <ul>
            {continents.map((continent) => (
              <li
                key={continent.name}
                style={{
                  cursor: 'pointer',
                  padding: '4px',
                  color: 'white',
                }}
                onClick={() => {
                  const marker = markerMapRef.current.get(continent.name);

                  if (selectedMarkerRef.current) {
                    selectedMarkerRef.current.material.color.set(0x00ff00);
                    selectedMarkerRef.current.scale.set(1, 1, 1);
                  }

                  if (marker) {
                    marker.material.color.set(0xffff00);
                    marker.scale.set(1.5, 1.5, 1.5);
                    selectedMarkerRef.current = marker;
                  }

                  setSelectedContinent(continent);
                }}
              >
                {continent.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          ref={mountRef}
          style={{ flex: 1, height: '100vh', position: 'relative' }}
        />
      </div>
      <div
        ref={tooltipRef}
        style={{
          position: 'absolute',
          background: 'rgba(0,0,0,0.7)',
          color: '#fff',
          padding: '4px 8px',
          borderRadius: '4px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          fontSize: '12px',
          display: 'none',
          zIndex: 10
        }}
      />
    </>
  );
}
