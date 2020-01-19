export interface CharacterAction {
    type: string;
    payload: any;
}

export class UpdateCharacterAction implements CharacterAction {
    type = 'UPDATE';
    payload: any = {};
    
    constructor(propertyName:string, value: any) {
        this.payload.propertyName = propertyName;
        this.payload.value = value;
    }
}