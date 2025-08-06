import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Dropdown = ({ options, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`select-menu ${isActive ? "active" : ""}`}
      ref={dropdownRef}
    >
      <div className="select-btn" onClick={handleDropdownToggle}>
        <span className="sBtn-text">{selected?.name || "Select"}</span>
        <Image width={34} height={16} src="/images/arrow-down.svg" alt="" />
      </div>

      {isActive && (
        <ul className="options">
          {options.map((option) => (
            <li
              key={option.id}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              <span className="option-text">{option.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
