import { useContext } from 'react'; // we import useContext to use our context
import {ThemeContext}  from '@/shared/contexts/theme/ThemeContext'; // import our context

const ThemeSwitch = () => {
    // extract the variables and methods from our context and assign them to variables
    const { theme, toggleTheme, isDark }  = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme} className="btn btn-primary">
            {isDark ? "Dark" : "Light"}
        </button>
    );
}
export default ThemeSwitch;