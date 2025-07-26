//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tutorialMenusList from './TutorialMenuData';

const TutorialMenu = () => {
    //const [tutorialMenus, setTutorialMenus] = useState(tutorialMenusList)
  return (
    <>
    <ul>
        {tutorialMenusList.map((menu, index)=>
        <li key={index}>
            <Link to={`${menu.menulink}`}>{menu.menutitle}</Link><br/> 
            <small><i>{menu.menusubtitle}</i></small>
        </li>
        )}
    </ul>
    </>
  )
}

export default TutorialMenu
