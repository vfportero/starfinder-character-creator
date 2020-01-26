import { Action, SET_CHARACTER_PROPERTY, POST_CHARACTER_SUCCESS, CLOSE_TOAST, SET_CHARACTER_STAT, SET_CHARACTER_INICIATIVE, POST_CHARACTER, GET_CHARACTER, GET_CHARACTER_SUCCESS } from "./characterActions";
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
                        Value: parseInt(action.payload.value),
                        Modifier: CharacterService.calculateStatModifier(action.payload.value)
                    }
                }
            };
        case SET_CHARACTER_INICIATIVE: {
            return {
                ...state,
                character: {
                    ...state.character,
                    Initiative: {
                        MiscModifier: parseInt(action.payload.value ?? 0),
                        Total: (parseInt(action.payload.value ?? 0)) + (state.character.Dexterity?.Modifier ?? 0)
                    }
                }
            }
        }
        case POST_CHARACTER:
        case GET_CHARACTER:
            return {
                ...state,
                loading: true
            };
        case POST_CHARACTER_SUCCESS:
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
        case GET_CHARACTER_SUCCESS:
            return {
                ...state,
                loading: false,
                character: {
                    ...action.payload.Character,
                    Id: action.payload.Id
                },
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

