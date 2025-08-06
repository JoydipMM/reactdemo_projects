import ourprojectsstyles from "@/components/Home/ourProjects/ourProjects.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import guidestyles from "../guide/guide.module.css";

export default function Guide({ productHandlingData }) {
  const allProductData = productHandlingData?.data?.content;
  const productItems = allProductData?.items;
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <section
        className={`${ourprojectsstyles.Expl_metalmpwr} topadding_bottom`}
      >
        <div className="container">
          <h2>
            <span>{allProductData?.pre_heading}</span>
            {allProductData?.heading}
          </h2>
          <div
            className={`${ourprojectsstyles.tabcont_explore} ${guidestyles.tabcont_explore}`}
          >
            <Tabs selectedTabClassName={ourprojectsstyles.activeTab}>
              <TabList className={ourprojectsstyles.tabList}>
                {productItems &&
                  productItems?.map((productItem, index) => (
                    <Tab
                      className="tab"
                      key={`productDataTabID-${index}`} //  Ensures unique key
                    >
                      {productItem.tab_heading}
                    </Tab>
                  ))}
              </TabList>
              {productItems &&
                productItems?.map((productItem, index) => (
                  <TabPanel key={`productItemTabPanelID-${index}`}>
                    <div className={guidestyles.tabcontent}>
                      <div className={guidestyles.pic}>
                        <Image
                          src={productItem?.image?.image_url}
                          alt="image"
                          fill={true}
                        />
                      </div>
                      <div className={guidestyles.txt}>
                        <h3>{productItem?.heading}</h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: productItem?.content
                          }}
                        ></div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
