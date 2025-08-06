"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollZoomImage = ({ src, alt, maxZoom = 2, zoomFactor = 1000, className }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / zoomFactor;
      setScale(Math.min(maxZoom, newScale));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxZoom, zoomFactor]);

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`object-cover rounded-lg shadow-lg ${className}`}
      style={{ transformOrigin: "center" }}
      animate={{ scale }}
      transition={{ type: "spring", stiffness: 100 }}
    />
  );
};

export default ScrollZoomImage;
 