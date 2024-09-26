import React from "react";
import { AppContext, AppContextProviderState } from "./AppContextProvider";


export type AppContextConsumerProps = {
    children: (appState: AppContextProviderState) => React.ReactNode;
};

export const AppContextConsumer: React.FC<AppContextConsumerProps> = ({ children }) => {
    const appState = React.useContext(AppContext);
    return children(appState);
};
