import AnimatedText from "@/components/Framemotion/framemotion";
import tempdetstyles from "@/components/preCoatedAluminium/temperDetails/temperDetails.module.css";
// import tempdetstyles from "@/components/preCoatedAluminium/technicalData/technicalData.module.css";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TemperDetails({ allAlloyData }) {
  const allSpecDatas = allAlloyData?.data?.content;
  const bimAllSpecDatas = allSpecDatas?.alloy_details;
  return (
    <>
      <section className="topadding_top">
        <div className="container">
          <h2 className="centertie">
            <AnimatedText text={allSpecDatas?.heading} />
          </h2>
          <div className={tempdetstyles.tempertabcontwrp}>
            <div className={tempdetstyles.alloytxttab}>Alloy</div>
            <Tabs selectedTabClassName={tempdetstyles.activeTab}>
              <div className={tempdetstyles.tabsContainer}>
                {/* Sidebar - Tab List */}
                <TabList className={tempdetstyles.tabList}>
                  {bimAllSpecDatas &&
                    bimAllSpecDatas.map((bimAllSpecData, index) => {
                      return (
                        <Tab
                          className={tempdetstyles.tab}
                          key={`bimIndustryData-${index}`}
                        >
                          {bimAllSpecData?.alloy}
                        </Tab>
                      );
                    })}
                </TabList>

                {/* Right Side - Content Panels */}
                <div className={tempdetstyles.tabContent}>
                  {bimAllSpecDatas.map((bimAllSpecData, index) => {
                    return (
                      <TabPanel key={`bimAllSpecTabDatas-${index}`}>
                        <div className={tempdetstyles.remarkcont}>
                          <div className={tempdetstyles.remarkbox}>
                            <h4>Temper</h4>
                            <p>{bimAllSpecData?.temper}</p>
                          </div>

                          <div className={tempdetstyles.remarkbox}>
                            <h4>Remarks</h4>
                            <p>{bimAllSpecData?.remarks}</p>
                          </div>
                        </div>
                      </TabPanel>
                    );
                  })}
                </div>
              </div>
            </Tabs>
          </div>
          {/* <div className={tempdetstyles.temptable}>
            <table>
              <tbody>
                <tr>
                  <th>Alloy</th>
                  <th>Temper</th>
                  <th>Remarks</th>
                </tr>
                <tr>
                  <td>1100</td>
                  <td className={tempdetstyles.noborder}>
                    H42, H44, H46, H48 (after Coil Coating)
                  </td>
                  <td className={tempdetstyles.noborder}>
                    ★Temper H14, H16, H18, H22, H24, H26 for base material are
                    provided as per the client’s request and mutually agreed.
                  </td>
                </tr>

                <tr>
                  <td>3105</td>
                  <td className={tempdetstyles.noborder}></td>
                  <td className={tempdetstyles.noborder}></td>
                </tr>

                <tr>
                  <td>5005</td>
                  <td className={tempdetstyles.noborder}></td>
                  <td className={tempdetstyles.noborder}></td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </section>
    </>
  );
}
