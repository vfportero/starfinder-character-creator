import { Character, CharacterAlignment } from "./Character";

export interface State {
    character: Character,
    loading: boolean,
    error?: string
}