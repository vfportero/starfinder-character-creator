import { Character, CharStatName } from "../models/Character";
import DatabaseService from "../services/DatabaseService";

export interface Action {
    type: string;
    payload: any;
}

export const SET_CHARACTER_PROPERTY = 'set_character_property';
export const SET_CHARACTER_STAT = 'set_character_stat';
export const SET_CHARACTER_INICIATIVE = 'set_character_iniciative';
export const SAVE_CHARACTER_TO_DB = 'save_character_to_db';
export const SAVE_CHARACTER_TO_DB_SUCCESS = 'save_character_to_db_success';
export const CLOSE_TOAST = 'close_toast';

function createActions(dispatch: React.Dispatch<any>) {
    return {
        closeToast: () => dispatch({type: CLOSE_TOAST}),
        setCharacterProperty: (propertyName:string, value: any) => dispatch({ type: SET_CHARACTER_PROPERTY, payload: { propertyName, value} }),
        setCharacterStat: (stat: CharStatName, value: number) => dispatch({type: SET_CHARACTER_STAT, payload: {stat, value}}),
        setCharacterIniciative: (value?: number) => dispatch({type: SET_CHARACTER_INICIATIVE, payload: {value}}),

        saveCharacterToDb: (character: Character) => {
            console.log(character);
            DatabaseService.commit(character).then(
                (characterId) => {
                    dispatch({ type: SAVE_CHARACTER_TO_DB_SUCCESS, payload: characterId })
                }
            );
            dispatch({ type: SAVE_CHARACTER_TO_DB })
      },
    };
  }
  
  export default createActions;