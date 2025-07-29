import React from 'react';

const DataContext = React.createContext();

export const DataContextProvider = ({children})=> {
    const [data, setData] = React.useState("");
    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => React.useContext(DataContext);