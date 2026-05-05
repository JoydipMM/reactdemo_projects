import React from 'react';

const ErrorState = ({ message = "Something went wrong. Please try again." }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center", color: "#e50914" }}>
      <h3>{message}</h3>
    </div>
  );
};

export default ErrorState;

