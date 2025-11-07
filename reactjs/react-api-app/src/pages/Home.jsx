import React from 'react'
import { siteInfo } from "../data/StaticData";
import GridRow from '../components/GridRow/GridRow';
import SiteInfo from '../components/SiteInfo/SiteInfo';
import NormalForm from '../components/NormalForm';
import CounterAction from '../components/Counter/CounterAction';
import CounterView from '../components/Counter/CounterView';

const Home = () => {

  const getFormData =(data) =>{
    console.log(data);
  }

  return (
    <>
    <h1 className='text-3xl font-bold text-purple-700 mb-6'>Welcome to React Mini App</h1>

      <GridRow gridcol="grid-cols-2">
        {/* col 1 start */}
        <GridRow>
          <SiteInfo name={siteInfo.name} tagline={siteInfo.tagline} stats={siteInfo.stats} links={siteInfo.links} />
        </GridRow>
        {/* col 1 ended */}

        {/* col 2 start */}
        <NormalForm onSubmitData={getFormData}/>
        {/* col 2 ended */}

        {/* col 3 start */}
        <GridRow >
          <h3 className="text-3xl font-bold text-purple-700 mb-3">State Manage using Zustand</h3>
          <GridRow gridcol="grid-cols-2">
            <GridRow className="mb-6 card">
              <CounterAction/>
            </GridRow>
            <GridRow className="mb-6 card">
              <CounterView/>
            </GridRow>
          </GridRow>
        </GridRow>
        {/* col 3 ended */}

        
      </GridRow>
    </>
  )
}

export default Home
