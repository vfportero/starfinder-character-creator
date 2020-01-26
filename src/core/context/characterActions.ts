import { Character, CharStatName } from "../models/Character";
import DatabaseService from "../services/DatabaseService";

export interface Action {
    type: string;
    payload: any;
}

export const SET_CHARACTER_PROPERTY = 'set_character_property';
export const SET_CHARACTER_STAT = 'set_character_stat';
export const SET_CHARACTER_INICIATIVE = 'set_character_iniciative';
export const POST_CHARACTER = 'post_character';
export const POST_CHARACTER_SUCCESS = 'post_character_success';
export const GET_CHARACTER = 'get_character';
export const GET_CHARACTER_SUCCESS = 'get_character_success';
export const CLOSE_TOAST = 'close_toast';

function createActions(dispatch: React.Dispatch<any>) {
    return {
        closeToast: () => dispatch({type: CLOSE_TOAST}),
        setCharacterProperty: (propertyName:string, value: any) => dispatch({ type: SET_CHARACTER_PROPERTY, payload: { propertyName, value} }),
        setCharacterStat: (stat: CharStatName, value: number) => dispatch({type: SET_CHARACTER_STAT, payload: {stat, value}}),
        setCharacterIniciative: (value?: number) => dispatch({type: SET_CHARACTER_INICIATIVE, payload: {value}}),

        postCharacter: (character: Character) => {
            console.log(character);
            DatabaseService.commitCharacter(character).then(
                (characterId) => {
                    dispatch({ type: POST_CHARACTER_SUCCESS, payload: characterId })
                }
            );
            dispatch({ type: POST_CHARACTER })
        },
        getCharacter: (id: string) => {
            DatabaseService.getCharacter(id).then(
                (character) => {
                    dispatch({ type: GET_CHARACTER_SUCCESS, payload: {Character: character, Id: id} })
                }
            );
            dispatch({ type: GET_CHARACTER })
        },
    };
  }
  
  export default createActions;