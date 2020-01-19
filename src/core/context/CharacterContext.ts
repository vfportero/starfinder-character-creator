import React from "react";

const CharacterContext = React.createContext({});
export const CharacterProvider = CharacterContext.Provider;
export const CharacterConsumer = CharacterContext.Consumer;
export default CharacterContext;

