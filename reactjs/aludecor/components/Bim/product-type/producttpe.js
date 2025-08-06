"use client";
import React, { useState, useEffect, useRef } from "react";

import producttpestyles from "@/components/Bim/product-type/producttpe.module.css"; // Import CSS file
import BimFilterTabs from "./bim-filter-tabs";
import { toast, ToastContainer } from "react-toastify";
import useSWRMutation from "swr/mutation";
import { postFetcher } from "@/components/shadeListing/filter-product/helper-function";
import BimDisplayResult from "./bim-display-result";

// Reusable Dropdown Component

export default function ProductType({ bimFilterData, session = null }) {
  const [bimSelectedData, setBimSelectedData] = useState({});
  const [toastId, setToastId] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [page, setPage] = useState(1);
  const receiveSelectedData = (data) => {
    setBimSelectedData(data);
  };

  useEffect(() => {
    bimAllFilterData();
    // console.log("bimSelectedData", bimSelectedData);
    // console.log("filteredProduct", filteredProduct);
  }, [bimSelectedData, page]);

  const { trigger: filterProducts, isMutating } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_IMAGE_URL}solutions/bim/filter?page=${page}`,
    postFetcher
  );

  const bimAllFilterData = async () => {
    const id = toast.loading("Filtering products...");

    try {
      const result = await filterProducts(bimSelectedData);
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

  return (
    <section className="commonpadding">
      <div className="container">
        <div className={producttpestyles.tabwrer}>
          {/* Tabs Navigation */}
          <div className={producttpestyles.tabList}>
            <BimFilterTabs
              bimFilterData={bimFilterData}
              sendSelectedData={receiveSelectedData}
            />
          </div>

          {/* Dynamic Tab Content */}
          {/* <div className={producttpestyles.tabContent}>{getContent()}</div> */}
          <BimDisplayResult
            producttpestyles={producttpestyles}
            filteredProduct={filteredProduct}
            setPage={setPage}
            session={session}
            bimSelectedData={bimSelectedData}
          />
        </div>
      </div>
      <ToastContainer autoClose={false} />
    </section>
  );
}
