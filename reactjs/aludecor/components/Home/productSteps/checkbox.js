import React, { useState } from "react";

const Checkbox = ({ id, value, isChecked, onChange }) => {
  return (
    <div className="checkboxWrapper">
      <input
        type="checkbox"
        id={id}
        value={value}
        onChange={onChange}
        className="checkboxInput"
        checked={isChecked}
      />
      <label htmlFor={id} className="checkboxLabel"></label>
    </div>
  );
};

export default Checkbox;
