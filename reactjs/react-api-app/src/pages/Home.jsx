import React, { useContext } from 'react'
import { siteInfo } from "../data/StaticData";
import GridRow from '../components/GridRow/GridRow';
import SiteInfo from '../components/SiteInfo/SiteInfo';
import NormalForm from '../components/NormalForm';
import CounterAction from '../components/Counter/CounterAction';
import CounterView from '../components/Counter/CounterView';
import defaultContext from '../contextAPI/defaultContext';
import Calculator from '../components/Calculator';

const Home = () => {

  const { name } = useContext(defaultContext);

  const getFormData = (data) => {
    console.log("Form Data- username: "+ data.username+ " useremail: " +data.useremail);
  }


  function increament() {
    console.log("increment")
    //return user.firstName + ' ' + user.lastName;
  }
  function decreament() {
    console.log("decrement")
    //return user.firstName + ' ' + user.lastName;
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


        {/* col 1 start */}
        <GridRow gridcol="grid-cols-3">
          Default Context Data: {name}

        {/* <Button label='Minus' oncClick={decreament}/>
        <Button label='Add' oncClick={increament}/> */}
         


        </GridRow>
        {/* col 1 ended */}

         <GridRow>
            <Calculator />
         </GridRow>

      </GridRow>
    </>
  )
}



function Button({label='', oncClick=()=>{}}){
  return <button className='text-xs font-medium px-3 py-3 rounded-2xl bg-blue-700 text-white hover:bg-gray-700 cursor-pointer' onClick={oncClick}>{label}</button>
}


export default Home
