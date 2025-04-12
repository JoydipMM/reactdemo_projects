import React from 'react';
import { HomeLayout, HomeBanner, HomeWelcome, HomeMemory, HomeShowcase, HomeFeedback, HomeFacilities, HomeTopDestination, HomeShortDuration, HomeYearPlanner, HomeAd } from "@/Components";


const page = () => {
  return (
    <>
      <HomeLayout>
        <HomeBanner />

        <HomeWelcome />

        <div className="index_colmn_ara">
          <div className="wrapper">
            <div className="index_content_row">
              <div className="index_content_col index_lft_colmn">
                <HomeMemory />
                <HomeShowcase />
                <HomeFeedback />
                <HomeFacilities />
              </div>
              <div className="index_content_col index_mid_colmn">
                <HomeTopDestination />
                <HomeShortDuration />
              </div>
              <div className="index_content_col index_rgt_colmn">
                <HomeYearPlanner />
                <HomeAd />
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  )
}

export default page
