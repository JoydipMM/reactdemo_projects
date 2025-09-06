import React from 'react'
import { siteInfo } from "../data/StaticData";
import GridRow from '../components/GridRow/GridRow';
import SiteInfo from '../components/SiteInfo/SiteInfo';

const Home = () => {

  return (
    <>
    <h1 className='text-3xl font-bold text-purple-700 mb-6'>Welcome to React Mini App</h1>

      <GridRow>
        <SiteInfo name={siteInfo.name} tagline={siteInfo.tagline} stats={siteInfo.stats} links={siteInfo.links} />
      </GridRow>
    </>
  )
}

export default Home
