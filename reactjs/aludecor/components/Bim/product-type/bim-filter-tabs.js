import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { isDataEmpty } from "@/helper/downloadHelper";
import { toast } from "react-toastify";
import producttpestyles from "@/components/Bim/product-type/producttpe.module.css";
export default function BimFilterTabs({ bimFilterData, sendSelectedData }) {
  const bimFilterTabs = bimFilterData?.data?.content;
  const projectTypeData = bimFilterTabs?.project_type || [];
  const projectCategoryData = bimFilterTabs?.project_category || [];
  const fileFormatData = bimFilterTabs?.file_format || [];
  const [tabs, setTabs] = useState([
    "Project Type",
    "Project Category",
    "File Format"
  ]);

  const [productTypeSelections, setProductTypeSelections] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [fileFormat, setFileFormat] = useState([]);
  const [formData, setFormData] = useState({
    product_type: [productTypeSelections],
    project_category: [productCategory],
    file_format: [fileFormat]
  });

  useEffect(() => {
    setFormData({
      product_type: [productTypeSelections],
      project_category: [productCategory],
      file_format: [fileFormat]
    });
  }, [productTypeSelections, productCategory, fileFormat]);

  // const dropdownOptions = ["List 1", "List 2", "List 3", "List 4"];
  const Dropdown = ({ dropDownID, selected, setSelected }) => {
    const getDropdownOption = (dropDownID) => {
      switch (dropDownID) {
        case "dropdownID-1":
          return projectTypeData.map((item) => item.name);
        case "dropdownID-2":
          return projectCategoryData.map((item) => item.name);
        case "dropdownID-3":
          return fileFormatData.map((item) => item.name);
        default:
          return [];
      }
    };
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);
    const options = getDropdownOption(dropDownID);
    // Toggle dropdown
    const handleDropdownToggle = () => {
      setIsActive(!isActive);
    };
    // Select an option
    const handleOptionClick = (option) => {
      setSelected(option);
      setIsActive(false);
    };
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
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
          <span className="sBtn-text">{selected}</span>
          <Image
            width={34}
            height={16}
            src="/images/arrow-down.svg"
            alt="arrow-down"
          />
        </div>

        {isActive && (
          <ul className="options">
            {options.map((option, index) => {
              //console.log("option", option);
              return (
                <li
                  className="option"
                  key={index}
                  onClick={() => handleOptionClick(option)}
                >
                  <span className="option-text">{option}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  function getValueByLabel(options, label) {
    const foundItem = options.find((item) => item.label === label);
    return foundItem ? foundItem.value : null;
  }

  // Function to update the selected option for a specific dropdown
  const updateSelectedOption = (index, value, selected) => {
    if (selected == "dropdownID-1") {
      const dropdownOptionsArray = projectTypeData.map((item) => ({
        value: item.slug, // or item.id
        label: item.name
      }));
      //console.log("dropdownOptionsArray", dropdownOptionsArray);
      const selectedValue = getValueByLabel(dropdownOptionsArray, value);
      setProductTypeSelections(selectedValue);
      //   console.log("TypeArray", dropdownOptionsArray);
    }
    if (selected == "dropdownID-2") {
      const dropdownOptionsArray = projectCategoryData.map((item) => ({
        value: item.slug, // or item.id
        label: item.name
      }));
      const selectedValue = getValueByLabel(dropdownOptionsArray, value);
      setProductCategory(selectedValue);
      //   console.log("ProjectArray", dropdownOptionsArray);
    }
    if (selected == "dropdownID-3") {
      const dropdownOptionsArray = fileFormatData.map((item) => ({
        value: item.slug, // or item.id
        label: item.name
      }));
      const selectedValue = getValueByLabel(dropdownOptionsArray, value);
      setFileFormat(selectedValue);
      // console.log("FileArray", dropdownOptionsArray);
    }
    const newSelections = [...tabs];
    newSelections[index] = value;
    setTabs(newSelections);
  };

  //on Button Click
  const handleBimButtonClick = () => {
    // console.log("formData", formData);
    if (!formData || isDataEmpty(formData)) {
      toast.warning("please select the values from the dropdown", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else {
      sendSelectedData(formData);
    }
  };
  return (
    <>
    <div className={producttpestyles.menucontfilter}>
      {/* Multiple Dropdowns */}
      {tabs.map((tab, index) => {
        // console.log("dropdownOptions", dropdownOptions);
        return (
          <Dropdown
            key={index}
            selected={tab}
            dropDownID={`dropdownID-${index + 1}`}
            setSelected={(value) =>
              updateSelectedOption(index, value, `dropdownID-${index + 1}`)
            }
          />
        );
      })}
      </div>
<div className={producttpestyles.buttoncontfilter}>
      <button className="common-btn" onClick={handleBimButtonClick}>
        <label>
          Submit
          <Image
            width={34}
            height={16}
            src="/images/arrow-right.svg"
            alt="arrow-right"
          />
        </label>
      </button>
      </div>
    </>
  );
}
