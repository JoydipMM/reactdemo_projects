import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  CheckboxLayout,
  postFetcher
} from "@/components/shadeListing/filter-product/helper-function";
import SelectedItemsList from "@/components/shadeListing/filter-product/SelectedItemsList";
import FilterButtons from "@/components/shadeListing/filter-product/FilterButtons";
import useSWRMutation from "swr/mutation";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
export default function ProjectFilterTabs({
  styles,
  filterTabs,
  setFilteredProduct,
  page
}) {
  const router = useRouter();
  const { query } = router;
  const allProductType = filterTabs?.project_type;
  const allProductCategory = filterTabs?.project_category;
  const allProductSeries = filterTabs?.product_series;
  const allProductState = filterTabs?.project_state;
  const allProductCity = filterTabs?.project_city;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [productTypeSelections, setProductTypeSelections] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [productSeries, setProductSeries] = useState([]);
  const [productState, setProductState] = useState([]);
  const [productCity, setProductCity] = useState([]);
  const [toastId, setToastId] = useState(null);
  const [manualFilter, setManualFilter] = useState(false);
  const [formData, setFormData] = useState({
    product_type: productTypeSelections,
    project_category: productCategory,
    product_series: productSeries,
    project_state: productState,
    project_city: productCity
  });

  // Use a ref to track the latest formData
  const formDataRef = useRef(formData);

  // Update both state and ref when dependencies change
  useEffect(() => {
    const updatedData = {
      product_type: productTypeSelections,
      project_category: productCategory,
      product_series: productSeries,
      project_state: productState,
      project_city: productCity,
      ...(query.elevate === "true" && { project_evalate: true }) // Fixed typo and comparison
    };

    setFormData(updatedData);
    formDataRef.current = updatedData;
  }, [
    query.elevate,
    productTypeSelections,
    productCategory,
    productSeries,
    productState,
    productCity
  ]);

  // Submit function (reusable for manual filtering & pagination)

  //use SWT call
  // SWR Mutation for POST request
  const { trigger: filterProducts, isMutating } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_IMAGE_URL}project/filter?page=${page}`,
    postFetcher
  );

  // Filter function using the ref to always get latest data
  const formFilterData = useCallback(async () => {
    const id = toast.loading("Filtering projects...");
    setToastId(id);
    setManualFilter(true);

    try {
      console.log("Current formData:", formDataRef.current);
      const result = await filterProducts(formDataRef.current);

      toast.update(id, {
        render: "Filtered successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000
      });
      setFilteredProduct(result);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.update(id, {
        render: `Error: ${error.message || "Failed to filter products"}`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeButton: true
      });
    } finally {
      setToastId(null);
    }
  }, [filterProducts, setFilteredProduct]);

  // Run filter when page or form data changes
  useEffect(() => {
    formFilterData();
  }, [page, formFilterData]);

  const divRef = useRef(null);
  const tabs = [
    "Project Type",
    "Project Category",
    "Product Series",
    "State",
    "City"
  ];
  // Function to handle tab clicks
  const handleTabClick = (tabName) => {
    if (activeTab === tabName) {
      setIsOpen(!isOpen);
    } else {
      setActiveTab(tabName);
      setIsOpen(true);
    }
  };

  // Function to get the current data based on active tab
  const getCurrentData = () => {
    switch (activeTab) {
      case "Project Type":
        return allProductType;
      case "Project Category":
        return allProductCategory;
      case "Product Series":
        return allProductSeries;
      case "State":
        return allProductState;
      case "City":
        return allProductCity;
      default:
        return []; // Return empty array if no tab is active
    }
  };

  // Helper function to get setter for current tab
  const getSelectionSetter = (tabName) => {
    switch (tabName) {
      case "Project Type":
        return setProductTypeSelections;
      case "Project Category":
        return setProductCategory;
      case "Product Series":
        return setProductSeries;
      case "State":
        return setProductState;
      case "City":
        return setProductCity;
      default:
        return () => {};
    }
  };

  // remove items on clicking cross button
  const handleRemoveItem = (itemToRemove) => {
    setSelectedItems((prev) => prev.filter((item) => item !== itemToRemove));
    // Remove from the appropriate category state
    if (productTypeSelections.includes(itemToRemove)) {
      setProductTypeSelections((prev) =>
        prev.filter((item) => item !== itemToRemove)
      );
    } else if (productCategory.includes(itemToRemove)) {
      setProductCategory((prev) =>
        prev.filter((item) => item !== itemToRemove)
      );
    } else if (productSeries.includes(itemToRemove)) {
      setProductSeries((prev) => prev.filter((item) => item !== itemToRemove));
    } else if (productState.includes(itemToRemove)) {
      setProductState((prev) => prev.filter((item) => item !== itemToRemove));
    } else if (productCity.includes(itemToRemove)) {
      setProductCity((prev) => prev.filter((item) => item !== itemToRemove));
    }
  };

  //clear all filter
  const clearAllFilter = () => {
    setSelectedItems([]);
    setProductTypeSelections([]);
    setProductCategory([]);
    setProductSeries([]);
    setProductState([]);
    setProductCity([]);
  };

  return (
    //tab section
    <div className={styles.gallistnamemwrp}>
      <div className={styles.gallistname}>
        <ul>
          {tabs.map((tabName) => (
            <li
              key={tabName}
              onClick={() => handleTabClick(tabName)}
              className={activeTab === tabName ? styles.activeTab : ""}
            >
              {tabName}
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className={styles.galfilterbox} ref={divRef}>
          {/* Checkbox Sections (All Categories) */}
          <div className={styles.categorySection}>
            {isOpen && activeTab && (
              <div className={styles.checkboxContainer}>
                {getCurrentData().map((item, index) => {
                  return (
                    <CheckboxLayout
                      key={`${activeTab}-data-${index}`}
                      items={item} // item passed
                      tabName={activeTab} // current tab
                      selectedItems={selectedItems} // current selected item
                      getSelectionSetter={getSelectionSetter} // Setting to respective State
                      setSelectedItems={setSelectedItems} // to update state set selectionStat
                    />
                  );
                })}
              </div>
            )}
          </div>

          <div className={styles.wrp_filtlist}>
            {/* Display Selected Items */}
            <SelectedItemsList
              selectedItems={selectedItems}
              handleRemoveItem={handleRemoveItem}
              styles={styles}
            />
            {/* Display Selected Items */}
            {/* ....btn cont...... */}
            <FilterButtons
              selectedItems={selectedItems}
              styles={styles}
              clearAllFilter={clearAllFilter}
              formFilterData={formFilterData}
              isMutating={isMutating}
            />
            {/* <div className={styles.btncont}>
              <button className="common-btn">
                {" "}
                <label>
                  {" "}
                  Clear filters{" "}
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt=""
                  />
                </label>
              </button>
            </div> */}
            {/* ....btn cont...... */}
          </div>
        </div>
      )}
    </div>
  );
}
