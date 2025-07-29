import React from 'react';

const TutorialContext = React.createContext();

export const TutorialContextProvider = ({children}) => {
    const [menuInfoData, setMenuInfoData] = React.useState("");
    const [tutorialLink, setTutorialLink] = React.useState("");
    return(
        <TutorialContext.Provider value={{menuInfoData, setMenuInfoData, tutorialLink, setTutorialLink}}>
            {children}
        </TutorialContext.Provider>
    )
}

export const useMenuContext = () => React.useContext(TutorialContext);