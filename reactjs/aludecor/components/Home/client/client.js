import clientstyles from "../client/client.module.css";
import client2styles from "../client/client2.module.css";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function ClientSays({ clientDataVal }) {
  const clientData = clientDataVal.data?.content;
  const clientSaysData = clientDataVal.data?.content?.testimonial_cat;
  return (
    <>
      <section className={`${clientstyles.Expl_metalmpwr} commonpadding`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{clientData?.preheading}</span>
            <AnimatedText text={clientData?.heading} />
          </h2>
          <div className={`${clientstyles.tabcont_explore} ${client2styles.tabcont_explore}`}>
            <Tabs selectedTabClassName={clientstyles.activeTab}>
              <TabList className={clientstyles.tabList}>
                {clientSaysData?.map((clientSay) => (
                  <Tab className={clientstyles.tab} key={clientSay.category_id}>
                    {clientSay.category_name}
                  </Tab>
                ))}
              </TabList>
              {clientSaysData?.map((clientSay, index) => (
                <TabPanel key={`clientcat-${index}`}>
                  <div className={clientstyles.panel_conttab}>
                    <div className={clientstyles.client_wrp}>
                      {clientSay.testimonial.map((testimonial, index) => (
                        <div
                          className={clientstyles.client_box}
                          key={`clienttest-${index}`}
                        >
                          <div className={clientstyles.categry_box}>
                            {testimonial.category}
                          </div>
                          <div
                            className={clientstyles.contentbox}
                            dangerouslySetInnerHTML={{
                              __html: testimonial.review
                            }}
                          />

                          <div className={clientstyles.namebox}>
                            <Image
                              src="/images/clientprofile.svg"
                              alt="Clientprofile"
                              width={60}
                              height={60}
                            />
                            <div className={clientstyles.namebox_title}>
                              – {testimonial.name}
                              <span>{testimonial.company}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* <div className={clientstyles.viewboxwrp}>
                      <Link href="#" className="common-btn">
                        {" "}
                        <label>
                          {" "}
                          VIEW ALL{" "}
                          <Image
                            width={34}
                            height={16}
                            src="/images/arrow-right.svg"
                            alt="arrow-right"
                          />
                        </label>
                      </Link>
                    </div> */}
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
