import Image from "next/image";
import styles from "./page.module.css";

import HomeBanner from "./Components/home/HomeBanner";
import HomeWelcome from "./Components/home/HomeWelcome";
import HomeMemory from "./Components/home/HomeMemory";
import HomeShowcase from "./Components/home/HomeShowcase";
import HomeFeedback from "./Components/home/HomeFeedback";
import HomeFacilities from "./Components/home/HomeFacilities";
import HomeTopDestination from "./Components/home/HomeTopDestination";
import HomeShortDuration from "./Components/home/HomeShortDuration";
import HomeYearPlanner from "./Components/home/HomeYearPlanner";
import HomeAd from "./Components/home/HomeAd";

export default function Home() {
  return (
    <div className={styles.page}>

        <HomeBanner/>

        <HomeWelcome/>

        <div className="index_colmn_ara">
          <div className="wrapper">
            <div className="index_content_row">
              <div className="index_content_col index_lft_colmn">
                <HomeMemory/>
                <HomeShowcase/>
                <HomeFeedback/>
                <HomeFacilities/>
              </div>
              <div className="index_content_col index_mid_colmn">
                <HomeTopDestination/>
                <HomeShortDuration/>
              </div>
              <div className="index_content_col index_rgt_colmn">
                <HomeYearPlanner/>
                <HomeAd/>
              </div>
            </div>
          </div>
        </div>



    </div>
  );
}
