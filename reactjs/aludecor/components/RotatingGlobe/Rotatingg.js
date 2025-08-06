"use client";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const RotatingMapWithData = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const userInteractingRef = useRef(false);
  const spinEnabledRef = useRef(true);

  useEffect(() => {
    // Initialize map only once
    if (mapRef.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      projection: "globe", // Display the map as a globe
      zoom: 1.5,
      center: [-90, 40]
    });

    const map = mapRef.current;

    // Dummy data - major cities around the world
    const dummyData = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            title: "New York",
            description: "The Big Apple",
            population: "8.8 million"
          },
          geometry: {
            type: "Point",
            coordinates: [-74.006, 40.7128]
          }
        },
        {
          type: "Feature",
          properties: {
            title: "London",
            description: "Capital of England",
            population: "8.9 million"
          },
          geometry: {
            type: "Point",
            coordinates: [-0.1278, 51.5074]
          }
        },
        {
          type: "Feature",
          properties: {
            title: "Tokyo",
            description: "Capital of Japan",
            population: "13.9 million"
          },
          geometry: {
            type: "Point",
            coordinates: [139.6503, 35.6762]
          }
        },
        {
          type: "Feature",
          properties: {
            title: "Sydney",
            description: "Australia's largest city",
            population: "5.3 million"
          },
          geometry: {
            type: "Point",
            coordinates: [151.2093, -33.8688]
          }
        },
        {
          type: "Feature",
          properties: {
            title: "Rio de Janeiro",
            description: "Cidade Maravilhosa",
            population: "6.7 million"
          },
          geometry: {
            type: "Point",
            coordinates: [-43.1729, -22.9068]
          }
        }
      ]
    };

    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style

      // Add dummy data source
      map.addSource("cities", {
        type: "geojson",
        data: dummyData
      });

      // Add a circle layer for the points
      map.addLayer({
        id: "city-points",
        type: "circle",
        source: "cities",
        paint: {
          "circle-radius": 8,
          "circle-color": "#F84C4C",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff"
        }
      });

      // Add a symbol layer for labels
      map.addLayer({
        id: "city-labels",
        type: "symbol",
        source: "cities",
        layout: {
          "text-field": ["get", "title"],
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 1.5],
          "text-anchor": "top",
          "text-size": 12
        },
        paint: {
          "text-color": "#ffffff",
          "text-halo-color": "#000000",
          "text-halo-width": 1
        }
      });

      // Add popups on click
      map.on("click", "city-points", (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const title = e.features[0].properties.title;
        const description = e.features[0].properties.description;
        const population = e.features[0].properties.population;

        // Create popup
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            `<h3>${title}</h3><p>${description}</p><p>Population: ${population}</p>`
          )
          .addTo(map);
      });

      // Change cursor on hover
      map.on("mouseenter", "city-points", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", "city-points", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    // The following values control rotation speed
    const secondsPerRevolution = 120; // Complete a revolution every two minutes
    const maxSpinZoom = 5; // Above zoom level 5, do not rotate
    const slowSpinZoom = 3; // Rotate at intermediate speeds between zoom levels 3 and 5

    function spinGlobe() {
      const zoom = map.getZoom();
      if (
        spinEnabledRef.current &&
        !userInteractingRef.current &&
        zoom < maxSpinZoom
      ) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          // Slow spinning at higher zooms
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        // Smoothly animate the map over one second
        map.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    // Pause spinning on interaction
    map.on("mousedown", () => {
      userInteractingRef.current = true;
    });

    // Restart spinning when interaction is complete
    map.on("mouseup", () => {
      userInteractingRef.current = false;
      spinGlobe();
    });

    // These events account for cases where the mouse has moved off the map
    map.on("dragend", () => {
      userInteractingRef.current = false;
      spinGlobe();
    });

    map.on("pitchend", () => {
      userInteractingRef.current = false;
      spinGlobe();
    });

    map.on("rotateend", () => {
      userInteractingRef.current = false;
      spinGlobe();
    });

    // When animation is complete, start spinning if there is no ongoing interaction
    map.on("moveend", () => {
      spinGlobe();
    });

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl());

    // Start the animation
    spinGlobe();

    // Clean up on unmount
    return () => map.remove();
  }, []);

  const toggleSpin = () => {
    spinEnabledRef.current = !spinEnabledRef.current;
    if (spinEnabledRef.current && mapRef.current) {
      mapRef.current.fire("moveend");
    }
  };

  return (
    <div className="map-container">
      <div ref={mapContainerRef} className="map" />
      <div className="controls">
        <h2>Interactive Globe</h2>
        <p>Click on cities to see details</p>
        <button onClick={toggleSpin} className="toggle-button">
          {spinEnabledRef.current ? "Pause Rotation" : "Start Rotation"}
        </button>
      </div>

      <style jsx>{`
        .map-container {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .map {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100%;
        }

        .controls {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 1;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 15px;
          border-radius: 5px;
          max-width: 200px;
        }

        .controls h2 {
          margin-top: 0;
          font-size: 18px;
        }

        .toggle-button {
          background-color: #3386c0;
          color: #fff;
          border: none;
          border-radius: 3px;
          padding: 8px 16px;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
        }

        .toggle-button:hover {
          background-color: #4ea0da;
        }
      `}</style>
    </div>
  );
};

export default RotatingMapWithData;
