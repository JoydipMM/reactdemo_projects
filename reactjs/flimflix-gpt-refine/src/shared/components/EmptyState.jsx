import React from 'react';

const EmptyState = ({ message = "No data available." }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>
      <h3>{message}</h3>
    </div>
  );
};

export default EmptyState;

