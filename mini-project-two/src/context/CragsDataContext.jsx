import React from "react";


//named export for this context (to be used via useContext elsewhere)
export const CragsDataContext = React.createContext('');

//the provider wrapper for this context. uses its own state to keep track of which theme is in use
export const CragsDataProvider = ({ children }) => {
    const [cragsData, setCragsData] = React.useState([]);

    return (
        <CragsDataContext.Provider value={{ cragsData, setCragsData }}>
            {children}
        </CragsDataContext.Provider>
    );
}