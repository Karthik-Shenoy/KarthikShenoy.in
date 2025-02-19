import * as React from "react";

export const BasePage: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <main className="flex-1">
            <div className="border-b desktop:p-10 py-10 px-3 max-w-[100vw]">{children}</div>
        </main>
    );
};
