//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tutorialMenusList from './TutorialMenuData';
import {useMenuContext} from '../../Context/TutorialContext';

const TutorialMenu = () => {

    const { setTutorialLink, setMenuInfoData } = useMenuContext();

  return (
    <>
    <ul>
        {tutorialMenusList.map((menu, index)=>
        <li key={index} onClick={()=>{
          setTutorialLink(menu.menulink)
          setMenuInfoData(menu.menuinfodata)
        }}>
            <Link to={`${menu.menulink}`}>{menu.menutitle}</Link><br/> 
            <small><i>{menu.menusubtitle}</i></small>
        </li>
        )}
    </ul>
    </>
  )
}

export default TutorialMenu
