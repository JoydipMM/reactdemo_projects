"use client";
import { useState, useRef, useEffect } from "react";
import filterprdstyles from "@/components/Projectsgallery/filter-product/filterprd.module.css";
import FilteredData from "./filteredData";
import { toast, ToastContainer } from "react-toastify";
import { CheckboxLayout, postFetcher, RadioLayout } from "./helper-function";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";
import FilterTabs from "./FilterTabs";
import SelectedItemsList from "./SelectedItemsList";
import FilterButtons from "./FilterButtons";

export default function FilterPrd({ productFilterData }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [applicationData, setApplicationData] = useState([]);
  const [shadesData, setShadesData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [productTypeSelections, setProductTypeSelections] = useState([]);
  const [applicationSelections, setApplicationSelections] = useState([]);
  const [shadesSelections, setShadesSelections] = useState([]);
  const [featuresSelections, setFeaturesSelections] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [toastId, setToastId] = useState(null);
  const [page, setPage] = useState(1);
  const [manualFilter, setManualFilter] = useState(false);
  const [formData, setFormData] = useState({
    product_type: productTypeSelections,
    application: applicationSelections,
    shades: shadesSelections,
    features: featuresSelections
  });
  const divRef = useRef(null);
  const allFilterData = productFilterData?.data?.content;
  const allProductData = allFilterData?.categories;
  const allShadesData = allFilterData?.attributes?.shades;
  const allFeatureData = allFilterData?.attributes?.features;
  const router = useRouter();
  const { query } = router; // This gets all query parameters from the URL

  //console.log("productFilterData", productFilterData);
  //onload
  useEffect(() => {
    const fetchAndStore = async () => {
      const hasUrlFilters = Object.keys(query).length > 0;
      if (hasUrlFilters) {
        // Convert query parameters to match the expected JSON body structure
        const urlFilterParams = {
          product_type: query.product_type ? [query.product_type] : undefined,
          application: query.application
            ? query.application.split(",")
            : undefined,
          shades: query.shades ? query.shades.split(",") : undefined,
          features: query.specialFeature
            ? query.specialFeature.split(",")
            : undefined,
          series: query.series ? [query.series] : undefined
        };
        const allValues = [
          ...(urlFilterParams.product_type || []),
          ...(urlFilterParams.application || []),
          ...(urlFilterParams.shades || []),
          ...(urlFilterParams.features || [])
        ];
        // Remove undefined properties
        Object.keys(urlFilterParams).forEach((key) => {
          if (urlFilterParams[key] === undefined) {
            delete urlFilterParams[key];
          }
        });

        // console.log("urlFilterParams", urlFilterParams);
        try {
          //setProductTypeSelections(urlFilterParams.product_type);
          const result = await filterProducts(urlFilterParams);
          // console.log("result", result);

          //setProductTypeSelections(urlFilterParams.product_type);
          setFilteredProduct(result);
          // setSelectedItems(allValues);

          // setApplicationSelections(urlFilterParams.application);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const result = await filterProducts(formData);
          // console.log(result);
          setFilteredProduct(result);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchAndStore();
  }, []);

  useEffect(() => {
    if (productTypeSelections) {
      const fetchedSubcategories = getSubcategoriesBySlug(
        allProductData,
        productTypeSelections
      );
      setApplicationData(fetchedSubcategories);
      if (productTypeSelections.length > 0) {
        setShadesData(allShadesData);
        setFeaturesData(allFeatureData);
      } else {
        setShadesData([]);
        setFeaturesData([]);
      }
    }
  }, [productTypeSelections]);

  useEffect(() => {
    const allSelections = [
      ...productTypeSelections,
      ...applicationSelections,
      ...shadesSelections,
      ...featuresSelections
    ];
    setSelectedItems(allSelections);
    setFormData({
      product_type: productTypeSelections,
      application: applicationSelections,
      shades: shadesSelections,
      features: featuresSelections
    });
  }, [
    productTypeSelections,
    applicationSelections,
    shadesSelections,
    featuresSelections
  ]);

  //For pagination
  useEffect(() => {
    if (manualFilter) {
      fetchFilteredProducts(formData);
    } else {
      const hasUrlFilters = Object.keys(query).length > 0;
      if (hasUrlFilters) {
        // Convert query parameters to match the expected JSON body structure
        const urlFilterParams = {
          product_type: query.product_type ? [query.product_type] : undefined,
          application: query.application
            ? query.application.split(",")
            : undefined,
          shades: query.shades ? query.shades.split(",") : undefined,
          features: query.specialFeature
            ? query.specialFeature.split(",")
            : undefined,
          series: query.series ? [query.series] : undefined
        };
        Object.keys(urlFilterParams).forEach((key) => {
          if (urlFilterParams[key] === undefined) {
            delete urlFilterParams[key];
          }
        });
        fetchFilteredProducts(urlFilterParams);
      } else {
        fetchFilteredProducts(formData);
      }
    }
  }, [page]);

  //use SWT call
  // SWR Mutation for POST request
  const { trigger: filterProducts, isMutating } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_IMAGE_URL}product/filter?page=${page}`,
    postFetcher
  );

  const formFilterData = async () => {
    const id = toast.loading("Filtering products...");
    setToastId(id);
    setManualFilter(true);
    // console.log("selectedItems from filter", selectedItems);
    // console.log("formData", formData);
    // Show loading toast
    try {
      const result = await filterProducts(formData);
      // console.log("result", result);
      toast.update(id, {
        render: "Filtered successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000
      });
      setFilteredProduct(result);
      // console.log("result", result);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Update toast to error
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
  };
  // Submit function (reusable for manual filtering & pagination)
  const fetchFilteredProducts = async (filters) => {
    const id = toast.loading("Loading....");
    try {
      const result = await filterProducts(filters);
      setFilteredProduct(result);
      toast.update(id, {
        render: "Loaded successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000
      });
      return result;
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.update(id, {
        render: `Error: ${error.message || "Failed to filter products"}`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeButton: true
      });
    }
  };
  //default filter
  // For automatic page load filtering (no toast)
  function getSubcategoriesBySlug(allProductData, categorySlug) {
    // Find the category that matches the slug
    const categoryData = allProductData.find((cat) => {
      return cat.slug == categorySlug;
    });
    // If category found, return its subcategories, otherwise return empty array
    return categoryData ? categoryData.subcategories : [];
  }

  // Function to get the current data based on active tab
  const getCurrentData = () => {
    switch (activeTab) {
      case "Product Type":
        return allProductData;
      case "Application":
        return applicationData;
      case "Shades/Assembly System":
        return shadesData;
      case "Features":
        return featuresData;
      default:
        return []; // Return empty array if no tab is active
    }
  };
  // Helper function to get setter for current tab
  const getSelectionSetter = (tabName) => {
    switch (tabName) {
      case "Product Type":
        return setProductTypeSelections;
      case "Application":
        return setApplicationSelections;
      case "Shades/Assembly System":
        return setShadesSelections;
      case "Features":
        return setFeaturesSelections;
      default:
        return () => {};
    }
  };

  // Function to handle tab clicks
  const handleTabClick = (tabName) => {
    if (activeTab === tabName) {
      // If clicking the currently active tab, toggle the filter box
      setIsOpen(!isOpen);
    } else {
      // If clicking a different tab, switch to that tab and open the filter box
      setActiveTab(tabName);
      setIsOpen(true);
    }
  };

  // Remove on button click
  const handleRemoveItem = (itemToRemove) => {
    // console.log("itemToRemove", itemToRemove);
    // Remove from selectedItems
    setSelectedItems((prev) => prev.filter((item) => item !== itemToRemove));
    //  console.log("selectedItems", selectedItems);
    // console.log("productTypeSelections", productTypeSelections);

    // Remove from the appropriate category state
    if (productTypeSelections.includes(itemToRemove)) {
      setProductTypeSelections((prev) =>
        prev.filter((item) => item !== itemToRemove)
      );
    } else if (applicationSelections.includes(itemToRemove)) {
      setApplicationSelections((prev) =>
        prev.filter((item) => item !== itemToRemove)
      );
    } else if (shadesSelections.includes(itemToRemove)) {
      setShadesSelections((prev) =>
        prev.filter((item) => item !== itemToRemove)
      );
    } else if (featuresSelections.includes(itemToRemove)) {
      setFeaturesSelections((prev) =>
        prev.filter((item) => item !== itemToRemove)
      );
    }
    // console.log("applicationSelections", applicationSelections);
    // console.log("shadesSelections", shadesSelections);
    // console.log("featuresSelections", featuresSelections);
  };

  //clear all filter
  const clearAllFilter = () => {
    setSelectedItems([]);
    setProductTypeSelections([]);
    setApplicationSelections([]);
    setShadesSelections([]);
    setFeaturesSelections([]);
  };

  //const toastId = toast.loading("Filtering...");
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={filterprdstyles.galmwreper}>
            <div className={filterprdstyles.gallistnamemwrp}>
              <div className={filterprdstyles.gallistname}>
                <FilterTabs
                  activeTab={activeTab}
                  handleTabClick={handleTabClick}
                  styles={filterprdstyles}
                />
              </div>

              {/* {isOpen && ( */}
              <div className={filterprdstyles.galfilterbox} ref={divRef}>
                {/* Checkbox Sections (All Categories) */}
                <div className={filterprdstyles.categorySection}>
                  {isOpen && activeTab && (
                    <div className={filterprdstyles.checkboxContainer}>
                      {getCurrentData().map((item, index) => {
                        return activeTab === "Product Type" ? (
                          <RadioLayout
                            name="productType"
                            key={`${activeTab}-data-${index}`}
                            items={item}
                            tabName={activeTab}
                            selectedItems={selectedItems}
                            getSelectionSetter={getSelectionSetter}
                            // setProductTypeSelections={setProductTypeSelections}
                            setSelectedItems={setSelectedItems}
                          />
                        ) : (
                          <CheckboxLayout
                            key={`${activeTab}-data-${index}`}
                            items={item}
                            tabName={activeTab}
                            selectedItems={selectedItems}
                            getSelectionSetter={getSelectionSetter}
                            // setProductTypeSelections={setProductTypeSelections}
                            setSelectedItems={setSelectedItems}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className={filterprdstyles.wrp_filtlist}>
                  {/* Display Selected Items */}
                  <SelectedItemsList
                    selectedItems={selectedItems}
                    handleRemoveItem={handleRemoveItem}
                    styles={filterprdstyles}
                  />
                  {/* Display Selected Items */}
                  {/* ....btn cont...... */}
                  <FilterButtons
                    selectedItems={selectedItems}
                    clearAllFilter={clearAllFilter}
                    formFilterData={formFilterData}
                    isMutating={isMutating}
                    styles={filterprdstyles}
                  />

                  {/* ....btn cont...... */}
                </div>
              </div>
              {/* )} */}
            </div>
          </div>
          <ToastContainer autoClose={false} />
          <FilteredData filteredProduct={filteredProduct} setPage={setPage} />
        </div>
      </section>
    </>
  );
}
