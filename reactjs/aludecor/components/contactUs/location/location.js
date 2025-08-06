"use client";
import "react-tabs/style/react-tabs.css";
import locatestyles from "@/components/contactUs/location/location.module.css";
import AnimatedText from "@/components/Framemotion/framemotion";
import { useRouter } from "next/router";

export default function Location({ locationData }) {
  const router = useRouter();
  const { query } = router;
  // console.log("locationData", locationData);
  const allLocationData = locationData.data?.content;
  const allOfficeData = allLocationData?.offices;
  return query.requestform === "1" ? (
    ""
  ) : (
    <section>
      <div className="container">
        <div className="topadding_top">
          <div className={locatestyles.localtionsecwrp}>
            <h2 className="centertie">
              <AnimatedText text={allLocationData.heading} />
            </h2>
            {/* <Tabs selectedTabClassName={reasonstyles.activeTab}>
              <div
                className={`${reasonstyles.tabsContainer} ${locatestyles.tabsContainer}`}
              >
                
                <TabList
                  className={`${reasonstyles.tabList} ${locatestyles.tabList}`}
                >
                  {allOfficeData.map((officeData, index) => {
                    return (
                      <Tab
                        className={reasonstyles.tab}
                        key={`officeTab-${index}`}
                      >
                        {officeData.office_name}
                        <p>{officeData.information}</p>
                      </Tab>
                    );
                  })}
                </TabList>

              
                <div className={reasonstyles.tabContent}>
                  {allOfficeData.map((officeData, index) => (
                    <TabPanel key={`officeTabPanel-${index}`}>
                      <div>
                        <div className={reasonstyles.topcontreas}>
                          <div
                            className="maparea"
                            dangerouslySetInnerHTML={{
                              __html: officeData?.google_map
                            }}
                          >
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d117902.43278578478!2d88.30271848068081!3d22.56222850501829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d22.577151999999998!2d88.4310016!4m5!1s0x3a27af07389cb377%3A0x86be4a98eebb2d9!2saludecor%20head%20office!3m2!1d22.572219399999998!2d88.3515911!5e0!3m2!1sen!2sin!4v1740390374141!5m2!1sen!2sin"
                              width="100%"
                              height="900"
                              style={{ border: 0 }} // ✅ Use an object for inline styles
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </TabPanel>
                  ))}
                </div>
              </div>
            </Tabs> */}

            {/* ............contact box............... */}
            {/* ..............map starts.............. */}
            <div className="mapconactbox">
              <div>
                {/* {allOfficeData.map((officeData, index) => ( */}
                <div>
                  <div>
                    <div>
                      <div className="maparea">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117893.88895492368!2d88.21975516249996!3d22.57221939999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27af07389cb377%3A0x86be4a98eebb2d9!2sAludecor%20-%20ACP%20Sheets%20%26%20Aluminium%20Composite%20Panel%20Manufacturer%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1749713548018!5m2!1sen!2sin"
                          width="100%"
                          height="900"
                          style={{ border: 0 }} // ✅ Use an object for inline styles
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>
            {/* ..............map ends.............. */}

            <div>
              {/* .........contact box starts.......... */}

              <div className={locatestyles.contactboxwrper}>
                {allOfficeData.map((officeData, index) => {
                  return (
                    <div
                      className={locatestyles.contctcontbox}
                      key={`officeTab-${index}`}
                    >
                      <h3> {officeData.office_name}</h3>
                      <p>{officeData.information}</p>
                    </div>
                  );
                })}
              </div>

              {/* .........contact box ends ends.......... */}
            </div>
            {/* ............contact box............... */}
          </div>
        </div>
      </div>
    </section>
  );
}
