import { Button } from "@shadcn-ui/components/ui/button";
import { Moon, Sun } from "lucide-react";
import * as React from "react";
import { useTheme } from "../../Contexts/ThemeProvider";


export const ThemeControllerButton: React.FC<{}> = () => {
    const { theme, setTheme } = useTheme();

    const clickHandler = React.useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme]);

    return (
        <Button onClick={clickHandler} variant={"transparent"} className="rounded-full">
            {theme === "dark" ? (
                <Moon className="w-6 h-6 hover:stroke-cyan-800"></Moon>
            ) : (
                <Sun className="w-6 h-6 hover:stroke-amber-600"></Sun>
            )}
        </Button>
    );
};
