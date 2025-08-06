import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import ourprojectsstyles from "../../Home/ourProjects/ourProjects.module.css";
import techniqstyles from "../techniques/techniques.module.css";

import AnimatedText from '@/components/Framemotion/framemotion';
import Image from 'next/image';
export default function Techniques() {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="titlecenter" ><span>LOREM IPSUM DOLOR SIT AMET</span><AnimatedText text="Fabrication Techniques" /></h2>
          <div className="tabcont_explore">
            <Tabs selectedTabClassName="activeTab">
              <TabList className="tabList">
                <Tab className="tab">SAW Cutting</Tab> <Tab>Grooving Machines</Tab>
               
                <Tab>Folding</Tab>
                <Tab>Rout n Return System</Tab>
                <Tab>Bending with Press Brake</Tab>
                <Tab>CNC Cutting</Tab>

              </TabList>
              <TabPanel>
                <div className="panel_conttab">
                  <div className={techniqstyles.sowwrp}>
                    <div className={techniqstyles.sowleft}><Image fill={true} src="/images/saw_fabric.png" alt="Saw Cutting" /></div>
                    <div className={techniqstyles.sowrit}>
                      <h3>Saw Cutting</h3>
                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>

                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results. Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="panel_conttab">
                  <div className={techniqstyles.sowwrp}>
                    <div className={techniqstyles.sowleft}><Image fill={true} src="/images/saw_fabric.png" alt="Saw Cutting" /></div>
                    <div className={techniqstyles.sowrit}>
                      <h3>Saw Cutting</h3>
                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>

                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results. Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="panel_conttab">
                  <div className={techniqstyles.sowwrp}>
                    <div className={techniqstyles.sowleft}><Image fill={true} src="/images/saw_fabric.png" alt="Saw Cutting" /></div>
                    <div className={techniqstyles.sowrit}>
                      <h3>Saw Cutting</h3>
                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>

                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results. Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="panel_conttab">
                  <div className={techniqstyles.sowwrp}>
                    <div className={techniqstyles.sowleft}><Image fill={true} src="/images/saw_fabric.png" alt="Saw Cutting" /></div>
                    <div className={techniqstyles.sowrit}>
                      <h3>Saw Cutting</h3>
                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>

                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results. Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="panel_conttab">
                  <div className={techniqstyles.sowwrp}>
                    <div className={techniqstyles.sowleft}><Image fill={true} src="/images/saw_fabric.png" alt="Saw Cutting" /></div>
                    <div className={techniqstyles.sowrit}>
                      <h3>Saw Cutting</h3>
                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>

                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results. Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="panel_conttab">
                  <div className={techniqstyles.sowwrp}>
                    <div className={techniqstyles.sowleft}><Image fill={true} src="/images/saw_fabric.png" alt="Bending with Press Brake" /></div>
                    <div className={techniqstyles.sowrit}>
                      <h3>Bending with Press Brake</h3>
                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>

                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results. Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>
                    </div>
                  </div>
                </div>
              </TabPanel> <TabPanel>
                <div className="panel_conttab">
                  <div className={techniqstyles.sowwrp}>
                    <div className={techniqstyles.sowleft}><Image fill={true} src="/images/saw_fabric.png" alt="Saw Cutting" /></div>
                    <div className={techniqstyles.sowrit}>
                      <h3>Saw Cutting</h3>
                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>

                      <p>Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results. Aludecor ACP boards can be cut easily by panel saws or running saws. One must make sure that only the carbide tip blade that has been designed especially for Aluminium is used for optimum results.</p>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="panel_conttab">
                  <div className={techniqstyles.sowwrp}>
                    <div className={techniqstyles.sowleft}><Image fill={true} src="/images/saw_fabric.png" alt="Saw Cutting" /></div>
                    <div className={techniqstyles.sowrit}>
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