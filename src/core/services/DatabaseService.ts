import { Character } from "../models/Character";
import * as firebase from 'firebase';

class DatabaseService {
    
    firebaseRepository!: firebase.firestore.DocumentData;

    init() {
        this.firebaseRepository = firebase.firestore().collection('characters');
    }
    
    async commitCharacter(character: Character) : Promise<string> {
        if (!this.firebaseRepository) {
            this.init();    
        }
        if (!character.Id) {
            return (await this.firebaseRepository.add(character)).id;
        } 
        
        await this.firebaseRepository.doc(character.Id).update(character);
        return character.Id;
    }

    async getCharacter(id: string) : Promise<Character> {
        if (!this.firebaseRepository) {
            this.init();    
        }
        const characterResponse = await this.firebaseRepository.doc(id).get();
        if (characterResponse.exists) {
            return characterResponse.data();
        }
        throw new Error(`Character with ${id} not found.`);
    }
}

export default new DatabaseService();