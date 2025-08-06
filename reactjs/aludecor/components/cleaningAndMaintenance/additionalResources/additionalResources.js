
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import addistyles from "@/components/cleaningAndMaintenance/additionalResources/additionalResources.module.css";

import AnimatedText from '@/components/Framemotion/framemotion';
import Image from 'next/image';
import Link from 'next/link';
export default function AdditionalResources() {
    return (
        <>
            <section className={addistyles.addi_mwrpercont}>
                <div className="container">
                    <h2 className="titlecenter" ><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac magna nunc.</span><AnimatedText text="Additional Resources" /></h2>
                    <div className="tabcont_explore">
                        <Tabs selectedTabClassName="activeTab">
                            <TabList className="tabList">
                                <Tab className="tab">Technical Manuals</Tab> 
                                <Tab>Video Tutorials</Tab>


                            </TabList>
                            <TabPanel>
                                <div className="panel_conttab">
                                    <div className={addistyles.addibox_wrp} >
                                        <div className={addistyles.addi_innerbox}>
                                            <div className={addistyles.addi_innerbox_overlay}>
                                                <div className={addistyles.addi_overltitle}>Mr. Vikas Parthipan</div>
                                                <div className={addistyles.addi_overltxt}>Head of Architecture</div><a href="/#"><Image alt="Link" width="50" height="50" src="/images/pause-circle.svg" /></a></div>
                                            <Image src="/images/additional_res.png" fill={true} />
                                        </div>

                                        <div className={addistyles.addi_innerbox}>
                                            <div className={addistyles.addi_innerbox_overlay}>
                                                <div className={addistyles.addi_overltitle}>Mr. Vikas Parthipan</div>
                                                <div className={addistyles.addi_overltxt}>Head of Architecture</div><a href="/#"><Image alt="Link" width="50" height="50" src="/images/pause-circle.svg" /></a></div>
                                            <Image src="/images/additional_res.png" fill={true} />
                                        </div>

                                        <div className={addistyles.addi_innerbox}>
                                            <div className={addistyles.addi_innerbox_overlay}>
                                                <div className={addistyles.addi_overltitle}>Mr. Vikas Parthipan</div>
                                                <div className={addistyles.addi_overltxt}>Head of Architecture</div><a href="/#"><Image alt="Link" width="50" height="50" src="/images/pause-circle.svg" /></a></div>
                                            <Image src="/images/additional_res.png" fill={true} />
                                        </div>

                                        <div className={addistyles.addi_innerbox}>
                                            <div className={addistyles.addi_innerbox_overlay}>
                                                <div className={addistyles.addi_overltitle}>Mr. Vikas Parthipan</div>
                                                <div className={addistyles.addi_overltxt}>Head of Architecture</div><a href="/#"><Image alt="Link" width="50" height="50" src="/images/pause-circle.svg" /></a></div>
                                            <Image src="/images/additional_res.png" fill={true} />
                                        </div>

                                        <div className={addistyles.addi_innerbox}>
                                            <div className={addistyles.addi_innerbox_overlay}>
                                                <div className={addistyles.addi_overltitle}>Mr. Vikas Parthipan</div>
                                                <div className={addistyles.addi_overltxt}>Head of Architecture</div><a href="/#"><Image alt="Link" width="50" height="50" src="/images/pause-circle.svg" /></a></div>
                                            <Image src="/images/additional_res.png" fill={true} />
                                        </div>

                                        <div className={addistyles.addi_innerbox}>
                                            <div className={addistyles.addi_innerbox_overlay}>
                                                <div className={addistyles.addi_overltitle}>Mr. Vikas Parthipan</div>
                                                <div className={addistyles.addi_overltxt}>Head of Architecture</div><a href="/#"><Image alt="Link" width="50" height="50" src="/images/pause-circle.svg" /></a></div>
                                            <Image src="/images/additional_res.png" fill={true} />
                                        </div>

                                        <div className={addistyles.addi_innerbox}>
                                            <div className={addistyles.addi_innerbox_overlay}>
                                                <div className={addistyles.addi_overltitle}>Mr. Vikas Parthipan</div>
                                                <div className={addistyles.addi_overltxt}>Head of Architecture</div><a href="/#"><Image alt="Link" width="50" height="50" src="/images/pause-circle.svg" /></a></div>
                                            <Image src="/images/additional_res.png" fill={true} />
                                        </div>

                                        <div className={addistyles.addi_innerbox}>
                                            <div className={addistyles.addi_innerbox_overlay}>
                                                <div className={addistyles.addi_overltitle}>Mr. Vikas Parthipan</div>
                                                <div className={addistyles.addi_overltxt}>Head of Architecture</div><a href="/#"><Image alt="Link" width="50" height="50" src="/images/pause-circle.svg" /></a></div>
                                            <Image src="/images/additional_res.png" fill={true} />
                                        </div>

                                    </div>
                                    <div className={addistyles.addi_viewbtn}>
                                        <Link href="#" className="common-btn">
                                            <label>
                                                View All{" "}
                                                <Image
                                                    width={34}
                                                    height={16}
                                                    src="/images/arrow-right.svg"
                                                    alt="arrow-right"
                                                />
                                            </label>
                                        </Link>
                                    </div>

                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="panel_conttab">
                                    <div className={addistyles.sowwrp}>
                                        <div className={addistyles.sowleft}><Image fill={true} src="/images/saw_fabric.png" alt="Saw Cutting" /></div>
                                        <div className={addistyles.sowrit}>
                                            <h3>Saw Cutting</h3>
                                            <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>

                                            <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results. Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>


                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    );
}