import React from "react";
import { Character } from '../models/Character';

const CharacterContext = React.createContext({});
export const CharacterProvider = CharacterContext.Provider;
export const CharacterConsumer = CharacterContext.Consumer;
export default CharacterContext;

