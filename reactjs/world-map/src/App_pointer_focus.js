import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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
    let scene, camera, renderer, controls;
    let markerObjects = [];
    let earth;

    const initialize = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 3;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (mountRef.current) {
        mountRef.current.innerHTML = '';
        mountRef.current.appendChild(renderer.domElement);
      }

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enableZoom = false;

      const radius = 1;
      const earthGeometry = new THREE.SphereGeometry(radius, 64, 64);
      const earthMaterial = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load(
          'https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg'
        )
      });
      earth = new THREE.Mesh(earthGeometry, earthMaterial);

      const earthGroup = new THREE.Group();
      earthGroup.add(earth);
      earthGroup.rotation.x = THREE.MathUtils.degToRad(23.5);
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
        if (!renderer || !renderer.domElement) return;
        const bounds = renderer.domElement.getBoundingClientRect();
        const mouse = new THREE.Vector2();
        mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(markerObjects);

        if (intersects.length > 0) {
          const { name } = intersects[0].object.userData;
          if (tooltipRef.current) {
            tooltipRef.current.style.display = 'block';
            tooltipRef.current.style.left = `${event.clientX + 10}px`;
            tooltipRef.current.style.top = `${event.clientY + 10}px`;
            tooltipRef.current.textContent = name;
          }
        } else {
          if (tooltipRef.current) {
            tooltipRef.current.style.display = 'none';
          }
        }
      };

      if (renderer && renderer.domElement) {
        renderer.domElement.addEventListener('mousemove', onMouseMove);
      }

      const handleResize = () => {
        if (camera) {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        }
        if (renderer) {
          renderer.setSize(window.innerWidth, window.innerHeight);
        }
      };
      window.addEventListener('resize', handleResize);

      const animate = () => {
        requestAnimationFrame(animate);
        if (earth) earth.rotation.y += 0.0005;
        controls?.update();
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener('resize', handleResize);
        if (renderer?.domElement) {
          renderer.domElement.removeEventListener('mousemove', onMouseMove);
        }
        if (mountRef.current && renderer?.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        controls?.dispose();
        renderer?.dispose();
        markerObjects = [];
        scene?.clear();
        markerMapRef.current.clear();
        earthGroupRef.current = null;
      };
    };

    const cleanup = initialize();
    return cleanup;
  }, []);

  useEffect(() => {
    if (!selectedContinent || !earthGroupRef.current) return;

    const earthGroup = earthGroupRef.current;
    const { lat, lon } = selectedContinent;
    const radius = 1;

    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const targetPos = new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );

    const dummy = new THREE.Object3D();
    dummy.position.set(0, 0, 0);
    dummy.lookAt(targetPos);

    const startQuat = earthGroup.quaternion.clone();
    const targetQuat = dummy.quaternion.clone();

    let frame = 0;
    const duration = 60;

    const animateRotation = () => {
      frame++;
      const t = frame / duration;
      const easedT = t * (2 - t);
      earthGroup.quaternion.copy(startQuat).slerp(targetQuat, easedT);
      if (frame < duration) requestAnimationFrame(animateRotation);
    };

    animateRotation();
  }, [selectedContinent]);

  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '300px', padding: '10px', position: 'fixed', top: '0px', left: '0px', zIndex: 2, pointerEvents: 'auto' }}>
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
                  const prev = selectedMarkerRef.current;
                  if (prev) {
                    prev.material.color.set(0x00ff00);
                    prev.scale.set(1, 1, 1);
                    prev.renderOrder = 0;
                    prev.material.depthTest = true;
                    prev.material.depthWrite = true;
                  }

                  const marker = markerMapRef.current.get(continent.name);
                  if (marker) {
                    marker.material.color.set(0xffff00);
                    marker.scale.set(1.5, 1.5, 1.5);
                    marker.renderOrder = 999;
                    marker.material.depthTest = false;
                    marker.material.depthWrite = false;
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
