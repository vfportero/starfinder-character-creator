import { Character } from "../models/Character";
import * as firebase from 'firebase';

class DatabaseService {
    
    firebaseRepository!: firebase.database.Reference;

    init() {
        this.firebaseRepository = firebase.database().ref('characters');
    }
    
    commit(character: Character) {
        if (!this.firebaseRepository) {
            this.init();    
        }
        this.firebaseRepository.push(character);
    }
}

export default new DatabaseService();