import React from 'react';
import {Outlet} from 'react-router-dom';
import TutorialHeader from '../Components/TutorialHeader/TutorialHeader';

const TutorialLayout = () => {
  return (
    <>
      <TutorialHeader/> {/* Renders Tuttorial Header */}
      <Outlet /> {/* Renders child route */}
    </>
  )
}

export default TutorialLayout
