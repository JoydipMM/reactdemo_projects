import React, {useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import TutorialHeader from '../Components/TutorialHeader/TutorialHeader';
import {TutorialContextProvider} from '../Context/TutorialContext';
import TutorialCodePreview from '../Components/TutorialCodePreview';

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
    <TutorialContextProvider>
      <TutorialHeader currentpath={firstSegment}/>
      {/* {firstSegment} */}
      <div className='tutorial-detail-section'>
        {isTutorialPage &&
          <div className="tutorial-detail-left">
            <TutorialCodePreview/>
          </div>
        }
        <div className="tutorial-detail-right">
          <Outlet /> {/* Renders child route */}
        </div>
      </div>
      </TutorialContextProvider>
    </>
  )
}

export default TutorialLayout
