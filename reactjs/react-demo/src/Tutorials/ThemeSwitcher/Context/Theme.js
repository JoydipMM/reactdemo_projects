import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeContextProvider = ThemeContext.Provider;

const useTheme = () => useContext(ThemeContext);

export default useTheme;