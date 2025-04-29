import './global.css';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function App() {
  const mountRef = useRef(null); // Ref to mount the scene on a DOM element
  const tooltipRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const markerObjects = [];

    // WebGL renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Earth geometry and material
    const radius = 1;
    const earthGeometry = new THREE.SphereGeometry(radius, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg')
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Lighting
    scene.add(new THREE.AmbientLight(0xcccccc));
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(5, 3, 5);
    scene.add(light);

    // Convert lat/lon to 3D point
    function latLongToVector3(lat, lon, radius) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    // Country markers
    // const countries = [
    //   { name: 'USA', lat: 38, lon: -97 },
    //   { name: 'India', lat: 20.5937, lon: 78.9629 },
    //   { name: 'Brazil', lat: -14.2350, lon: -51.9253 },
    //   { name: 'Australia', lat: -25.2744, lon: 133.7751 },
    //   { name: 'UK', lat: 55.3781, lon: -3.4360 }
    // ];
    const continents = [
      { name: 'Africa', lat: 1.65, lon: 17.34 },
      { name: 'Asia', lat: 34.05, lon: 100.62 },
      { name: 'Europe', lat: 54.52, lon: 15.25 },
      { name: 'North America', lat: 54.52, lon: -105.25 },
      { name: 'South America', lat: -15.60, lon: -56.10 },
      { name: 'Australia', lat: -25.27, lon: 133.77 },
      { name: 'Antarctica', lat: -82.86, lon: 135.00 }
    ];

    // countries.forEach(({ lat, lon }) => {
    //   const pos = latLongToVector3(lat, lon, radius + 0.02);
    //   const marker = new THREE.Mesh(
    //     new THREE.SphereGeometry(0.01, 8, 8),
    //     new THREE.MeshBasicMaterial({ color: 0xff00ff })
    //   );
    //   marker.position.copy(pos);
    //   scene.add(marker);
    // });
    continents.forEach(({ lat, lon }) => {
      const pos = latLongToVector3(lat, lon, radius + 0.02);
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.015, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      );
      marker.position.copy(pos);
      scene.add(marker);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls
      renderer.render(scene, camera);
    };
    animate();


    continents.forEach(({ name, lat, lon }) => {
      const pos = latLongToVector3(lat, lon, radius + 0.02);
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.015, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      );
      marker.position.copy(pos);
      marker.userData.name = name;
      scene.add(marker);
      markerObjects.push(marker);
    });

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);


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

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []); // Empty array ensures this runs only once on mount

  return <>
  <div ref={mountRef} />
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
  </>;
}
