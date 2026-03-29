// pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">Page Not Found</p>
      <Link to="/login" className="btn btn-primary mt-6">
        back
      </Link>
    </div>
  );
};

export default NotFound;