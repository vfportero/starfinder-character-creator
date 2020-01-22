import { Action, SET_CHARACTER_PROPERTY, SAVE_CHARACTER_TO_DB, SAVE_CHARACTER_TO_DB_SUCCESS, CLOSE_TOAST, SET_CHARACTER_STAT } from "./characterActions";
import { State } from "../models/State";
import CharacterService from "../services/CharacterService";

export const initialState: State = {
    character: {},
    loading: false,
    toastMessage: {
        isOpen: false
    }
};

export const characterReducer = (state: State, action: Action) => {
    console.log("ACTION DISPATCHED: " + action.type, action.payload);
    switch (action.type) {
        case SET_CHARACTER_PROPERTY:
            return {
                ...state,
                character: {
                    ...state.character,
                    [action.payload.propertyName]: action.payload.value
                }
            };
        case SET_CHARACTER_STAT:
            return {
                ...state,
                character: {
                    ...state.character,
                    [action.payload.stat]: {
                        Value: action.payload.value,
                        Modifier: CharacterService.calculateStatModifier(action.payload.value)
                    }
                }
            };
        case SAVE_CHARACTER_TO_DB:
            return {
                ...state,
                loading: true
            };
        case SAVE_CHARACTER_TO_DB_SUCCESS:
            return {
                ...state,
                loading: false,
                character: {
                    ...state.character,
                    Id: action.payload
                },
                toastMessage: {
                    isOpen: true,
                    message: `Ficha de personaje guardada con éxito`
                }
            };
        case CLOSE_TOAST: 
            return {
                ...state,
                toastMessage: {
                    ...state.toastMessage,
                    isOpen: false
                }
            }
        default:
            return state;
    }
};

