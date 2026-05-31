import { useContext } from "react";
import { ThemeContext } from "@/shared/contexts/theme/ThemeContext";

const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
}

export default useTheme;