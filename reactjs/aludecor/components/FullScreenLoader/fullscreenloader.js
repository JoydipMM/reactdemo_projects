import React from "react";
import loadingstyles from "../FullScreenLoader/fullscreenloader.module.css"; // Import the CSS file

const FullScreenLoader = ({ isLoading }) => {
  if (!isLoading) return null; // Hide when not loading

  return (
    <div className={loadingstyles.fullscreenloader}>
      <div className="loader"></div>
    </div>
  );
};

export default FullScreenLoader;
