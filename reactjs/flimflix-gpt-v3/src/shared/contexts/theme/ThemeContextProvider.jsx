import { useState } from "react";
import { ThemeContext } from "@/shared/contexts/theme/ThemeContext";

// this function is a provider, also known as container for context
export const ThemeContextProvider = ({children}) => {

    // here we store data, state in a variable
    const [theme, setTheme] = useState("light");

    // we also store methods in a variable
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // this is a object where we store variables, methods and data which we want to share/expose throughout the app
    const contextValue = {
        theme,
        toggleTheme,
        isDark: theme === "dark"
    }

    /* 
    --------------------------------------------------------------
    Important Notes:
    --------------------------------------------------------------
    To use the context, we need to wrap our app in a provider
    and pass the context data and methods as "value" prop
    So, we convert ThemeContext to a provider and wrap our app in ThemeContext.Provider 
    and pass the contextValue as a prop with the "value" prop
    -------------------------------------------------------------- 
    */
    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};