import React from 'react'
import useTheme from '../Context/Theme'

const ThemeSwitch = () => {

    const { themeMode, darkTheme, lightTheme } = useTheme();
    const themeSwithchBtn = (e) => {
        const checkboxStatus = e.currentTarget.checked;
        if(checkboxStatus){
            darkTheme();
        }else{
            lightTheme();
        }
    }
  return (
    <>
      <h3>Theme Switch</h3>
      <label>
        <input 
        type='checkbox' 
        onChange={themeSwithchBtn} 
        checked={themeMode === "dark"}
        />
        <span>{themeMode}</span></label>
    </>
  )
}

export default ThemeSwitch
