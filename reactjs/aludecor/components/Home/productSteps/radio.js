import React, { useState } from "react";

const RadioButton = ({ id, name, value, checked, onChange }) => {
  return (
    <div className="checkboxWrapper">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked} // Controlled by parent
        onChange={onChange} // Trigger parent handler
        className="radioInput"
      />
      <label htmlFor={id} className="radioLabel"></label>
    </div>
  );
};

export default RadioButton;
