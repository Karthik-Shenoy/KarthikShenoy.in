import { cn } from "@shadcn-ui/lib/utils";
import React from "react";

export const GridDiv: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
    children,
    className,
}) => {
    return (
        <div className={cn("grid desktop:grid-cols-2 gap-4 grid-cols-1", className)}>
            {children}
        </div>
    );
};
