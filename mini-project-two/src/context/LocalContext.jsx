import React from "react";


//named export for this context (to be used via useContext elsewhere)
export const LocalContext = React.createContext('');

//the provider wrapper for this context. uses its own state to keep track of which theme is in use
export const LocalProvider = ({ children }) => {
    const [local, setLocal] = React.useState('');

    return (
        <LocalContext.Provider value={{ local, setLocal }}>
            {children}
        </LocalContext.Provider>
    );
}