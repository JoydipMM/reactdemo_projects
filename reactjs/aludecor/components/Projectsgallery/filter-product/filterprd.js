"use client";
import { useState, useRef, useEffect } from "react";
import filterprdstyles from "../filter-product/filterprd.module.css";

import ProjectFilterTabs from "./project-filter-tabs";
import { toast, ToastContainer } from "react-toastify";
import ProjectFilterData from "./project-filter-data";

export default function FilterPrd({ allFilterTabData }) {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log("filteredProduct...", filteredProduct);
  }, [filteredProduct]);

  const filterTabs = allFilterTabData?.data?.content;

  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={filterprdstyles.galmwreper}>
            <ProjectFilterTabs
              styles={filterprdstyles}
              filterTabs={filterTabs}
              allFilterTabData={allFilterTabData}
              setFilteredProduct={setFilteredProduct}
              page={page}
            />
          </div>
          <ProjectFilterData
            allFilterTabData={filteredProduct}
            styles={filterprdstyles}
            setPage={setPage}
          />
        </div>
      </section>
      <ToastContainer autoClose={false} />
    </>
  );
}
