import { Character, CharAlignment } from "./Character";

export interface State {
    character: Character,
    loading: boolean,
    error?: string,
    toastMessage: {
        isOpen: boolean,
        message?: string
    }
}