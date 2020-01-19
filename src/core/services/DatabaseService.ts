import { Character } from "../models/Character";
import * as firebase from 'firebase';

class DatabaseService {
    
    firebaseRepository!: firebase.firestore.DocumentData;

    init() {
        this.firebaseRepository = firebase.firestore().collection('characters');
    }
    
    async commit(character: Character) : Promise<string> {
        if (!this.firebaseRepository) {
            this.init();    
        }
        if (!character.Id) {
            return (await this.firebaseRepository.add(character)).id;
        } 
        
        this.firebaseRepository.doc(character.Id).update(character);
        return character.Id;
        
        
    }
}

export default new DatabaseService();