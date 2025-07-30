import React, { useCallback, useEffect, useState } from 'react'
import ThemeSwitch from './Components/ThemeSwitch'
import ThemeCard from './Components/ThemeCard'
import { ThemeContextProvider } from './Context/Theme'
import './theme.css';

const ThemeSwitcher = () => {

    const [themeMode, setThemeMode] = useState("light");

    const darkTheme = useCallback(() => {
        setThemeMode("dark")
    },[]);

    const lightTheme = useCallback(() => {
        setThemeMode("light")
    },[]);

    useEffect(()=>{
        document.querySelector("html").classList.remove("light","dark");
        document.querySelector("html").classList.add(themeMode);
    },[themeMode]);

  return (
    <>
      <h2>Theme Switcher</h2>
      <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
        <ThemeSwitch/>
        <ThemeCard/>
      </ThemeContextProvider>
    </>
  )
}

export default ThemeSwitcher
