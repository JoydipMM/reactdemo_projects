import  useTheme  from "@/shared/hooks/useTheme";

const ThemeSwitch = () => {
    // extract the variables and methods from useTheme hook
    const { toggleTheme, isDark }  = useTheme();
    return (
        <button onClick={toggleTheme} className="btn btn-primary">
            {isDark ? "Dark" : "Light"}
        </button>
    );
}
export default ThemeSwitch;
