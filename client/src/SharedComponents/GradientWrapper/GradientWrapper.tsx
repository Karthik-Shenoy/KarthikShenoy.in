import { cn } from "@shadcn-ui/lib/utils";
import * as React from "react";

export type GradientBorderWrapperProps = {
    className?: string;
};

export const GradientBorderWrapper: React.FC<
    React.PropsWithChildren<GradientBorderWrapperProps>
> = ({ className, children }) => {
    return (
        <div
            className={cn(
                "rounded-md bg-gradient-to-r from-purple-500 via-red-600 to-purple-900 hover:p-[3px] focus-within:p-[3px] transition-all duration-500 p-[2px]",
                className
            )}
        >
            {children}
        </div>
    );
};
