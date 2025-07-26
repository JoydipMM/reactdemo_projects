import React, {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import TutorialHeader from '../Components/TutorialHeader/TutorialHeader';

const TutorialLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  const isTutorialPage = location.pathname.startsWith('/tutorials/');
  const firstSegment = path.startsWith('/tutorials/')
    ? path.split('/')[2] || ''
    : '';

  useEffect(() => {
    //console.log("Current URL:", location.pathname);
  }, [location]);
  return (
    <>
      <TutorialHeader currentpath={firstSegment}/> {/* Renders Tuttorial Header */}
      {/* {firstSegment} */}
      <div className='tutorial-detail-section'>
        {isTutorialPage &&
          <div className="tutorial-detail-left">
            <h3>In File.jsx</h3>
            <pre>
              {
                `
import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import TutorialHeader from '../Components/TutorialHeader/TutorialHeader';

const TutorialLayout = () => {
  const location = useLocation();
  const isTutorialPage = location.pathname.startsWith('/tutorials/');
  return (
    <>
      <TutorialHeader/> {/* Renders Tuttorial Header */}
      <div className='tutorial-detail-section'>
        {isTutorialPage &&
          <div className="tutorial-detail-left">

          </div>
        }
        <div className="tutorial-detail-right">
          <Outlet /> {/* Renders child route */}
        </div>
      </div>
    </>
  )
}

export default TutorialLayout`
              }</pre>
            
          </div>
        }
        <div className="tutorial-detail-right">
          <Outlet /> {/* Renders child route */}
        </div>
      </div>
    </>
  )
}

export default TutorialLayout
