import React, {useState} from 'react'
import { siteInfo } from "../data/StaticData";
import GridRow from '../components/GridRow/GridRow';
import SiteInfo from '../components/SiteInfo/SiteInfo';
import NormalForm from '../components/NormalForm';

const Home = () => {

  const [submittedData, setSubmittedData] = useState(null);

  const childSubmitedFormData = (data) => {
    setSubmittedData(data);
    console.log(data);
  }

  return (
    <>
    <h1 className='text-3xl font-bold text-purple-700 mb-6'>Welcome to React Mini App</h1>

      <GridRow gridcol="grid-cols-2">
        <GridRow>
          <SiteInfo name={siteInfo.name} tagline={siteInfo.tagline} stats={siteInfo.stats} links={siteInfo.links} />
        </GridRow>
        <NormalForm onSubmitData={childSubmitedFormData}/>
      </GridRow>
      {submittedData?.useremail}
    </>
  )
}

export default Home
