import * as React from "react";
import * as SharedConstants from "../../Pages/SharedConstants";

/**
 * App state
 */
type AppState = {
    selectedPostsPage: SharedConstants.PostPageKey;
};

/**
 * State of the AppContextProvider
 * @property appState - The app state
 * @property setAppState - Function to update the app state
 */
export type AppContextProviderState = {
    appState: AppState;
    setAppState: React.Dispatch<React.SetStateAction<AppState>>;
    setSelectedPostsPage: (selectedPostsPage: SharedConstants.PostPageKey) => void;
};

export type AppContextProviderProps = {
    selectedPostsPage?: SharedConstants.PostPageKey;
    children: React.ReactNode;
};

/**
 * Initialization of the AppContext
 */
export const AppContext = React.createContext<AppContextProviderState>({
    appState: {
        selectedPostsPage: SharedConstants.PostPageKey.systemDesign,
    },
    setAppState: () => null,
    setSelectedPostsPage: () => null,
});

export const AppContextProvider = ({
    children,
    selectedPostsPage = SharedConstants.PostPageKey.systemDesign,
}: AppContextProviderProps) => {
    const [appState, setAppState] = React.useState<AppState>({ selectedPostsPage });

    const setSelectedPostsPage = (selectedPostsPage: SharedConstants.PostPageKey) => {
        setAppState((prevState) => ({ ...prevState, selectedPostsPage }));
    };

    return (
        <AppContext.Provider value={{ appState, setAppState, setSelectedPostsPage }}>
            {children}
        </AppContext.Provider>
    );
};

/**
 * hook to get the app context, this must be used within a sub-component of the AppContextProvider
 */
export const useAppContext = () => {
    const context = React.useContext(AppContext);

    if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
