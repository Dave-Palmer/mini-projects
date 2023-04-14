import React from "react";


//named export for this context (to be used via useContext elsewhere)
export const RegionContext = React.createContext('');

//the provider wrapper for this context. uses its own state to keep track of which theme is in use
export const RegionProvider = ({ children }) => {
    const [region, setRegion] = React.useState('');

    return (
        <RegionContext.Provider value={{ region, setRegion }}>
            {children}
        </RegionContext.Provider>
    );
}