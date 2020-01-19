import { Character } from "../models/Character";
import { CharacterAction } from "./characterActions";

export const initialCharacter: Character = {};

export const characterReducer = (state: Character, action: CharacterAction) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                [action.payload.propertyName]: action.payload.value
            };
        default:
            return state;
    }
};
