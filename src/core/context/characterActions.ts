import { Character } from "../models/Character";
import DatabaseService from "../services/DatabaseService";

export interface Action {
    type: string;
    payload: any;
}

export const SET_CHARACTER_PROPERTY = 'set_character_property';
export const SAVE_CHARACTER_TO_DB = 'save_character_to_db';
export const SAVE_CHARACTER_TO_DB_SUCCESS = 'save_character_to_db_success';

function createActions(dispatch: React.Dispatch<any>) {
    return {
      setCharacterProperty: (propertyName:string, value: any) => dispatch({ type: SET_CHARACTER_PROPERTY, payload: { propertyName, value} }),
      saveCharacterToDb: (character: Character) => {
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