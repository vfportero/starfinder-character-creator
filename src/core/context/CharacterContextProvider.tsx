import React from "react";
import CharacterContext from "./CharacterContext";

const CharacterContextProvider: React.FC<any> = (children) => { 
    const state = {};
    return (
        <CharacterContext.Provider value={state}>
            {children}
        </CharacterContext.Provider>
    );
}

export default CharacterContextProvider;