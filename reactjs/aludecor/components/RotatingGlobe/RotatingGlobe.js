"use client";
import { useState, useEffect, useRef } from "react";
import { Map, Marker, Popup } from "react-map-gl/dist/esm";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./RotatingGlobe.module.css";
const RotatingGlobe = () => {
  const [viewState, setViewState] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1.5,
    pitch: 30,
    bearing: 0
  });

  const [points, setPoints] = useState([
    {
      id: 1,
      name: "New York",
      latitude: 40.7128,
      longitude: -74.006,
      description: "The Big Apple"
    },
    {
      id: 2,
      name: "London",
      latitude: 51.5074,
      longitude: -0.1278,
      description: "Capital of England"
    },
    {
      id: 3,
      name: "Tokyo",
      latitude: 35.6762,
      longitude: 139.6503,
      description: "Capital of Japan"
    }
  ]);

  const [selectedPoint, setSelectedPoint] = useState(null);
  const animationRef = useRef(null);
  const rotationSpeed = 0.2;

  useEffect(() => {
    const animate = () => {
      setViewState((v) => ({
        ...v,
        bearing: (v.bearing + rotationSpeed) % 360
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleMouseEnter = () => {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = null;
  };

  const handleMouseLeave = () => {
    if (!animationRef.current) {
      const animate = () => {
        setViewState((v) => ({
          ...v,
          bearing: (v.bearing + rotationSpeed) % 360
        }));
        animationRef.current = requestAnimationFrame(animate);
      };
      animate();
    }
  };

  return (
    <div
      className={styles.globeContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Map
        {...viewState}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        onMove={(evt) => setViewState(evt.viewState)}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        projection="globe"
      >
        {points.map((point) => (
          <Marker
            key={point.id}
            longitude={point.longitude}
            latitude={point.latitude}
            anchor="center"
          >
            <div
              className={styles.marker}
              onClick={() => setSelectedPoint(point)}
            />
          </Marker>
        ))}

        {selectedPoint && (
          <Popup
            longitude={selectedPoint.longitude}
            latitude={selectedPoint.latitude}
            onClose={() => setSelectedPoint(null)}
            closeOnClick={false}
            anchor="bottom"
          >
            <div className={styles.popupContent}>
              <h3>{selectedPoint.name}</h3>
              <p>{selectedPoint.description}</p>
              <p className={styles.coordinates}>
                {selectedPoint.latitude.toFixed(4)},{" "}
                {selectedPoint.longitude.toFixed(4)}
              </p>
            </div>
          </Popup>
        )}

        <div className={styles.atmosphereEffect} />
      </Map>

      <div className={styles.controlsPanel}>
        <h2>Interactive Globe</h2>
        <p>Hover to pause rotation</p>
        <p>Click markers for details</p>

        <button
          className={styles.addPointBtn}
          onClick={() => {
            const newPoint = {
              id: Date.now(),
              name: `Point ${points.length + 1}`,
              latitude: Math.random() * 180 - 90,
              longitude: Math.random() * 360 - 180,
              description: "Custom added point"
            };
            setPoints([...points, newPoint]);
          }}
        >
          Add Random Point
        </button>
      </div>
    </div>
  );
};

export default RotatingGlobe;
