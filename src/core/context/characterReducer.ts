import { Action, SET_CHARACTER_PROPERTY, SAVE_CHARACTER_TO_DB, SAVE_CHARACTER_TO_DB_SUCCESS } from "./characterActions";
import { State } from "../models/State";

export const initialState: State = {
    character: {},
    loading: false
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
                }
            };
        default:
            return state;
    }
};

