import { cn } from "@shadcn-ui/lib/utils";
import * as React from "react";
import { useTheme } from "../../Contexts/ThemeProvider";
import { Badge } from "@shadcn-ui/components/ui/badge";

export type BadgeProps = {
    className?: string;
};

export const BadgeWrapper: React.FC<React.PropsWithChildren<BadgeProps>> = ({ className, children }) => {
    const { theme } = useTheme();
    return (
        <Badge className={cn(`${theme == "dark" ? "text-white" : "text-black"} bg-accent shadow-md rounded-xl desktop:text-[12px] text-[10px]`, className)}>
            {children}
        </Badge>
    );
};
