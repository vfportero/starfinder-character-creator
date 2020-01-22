class CharacterService {
    
    calculateStatModifier(value: number) : number {
        return Math.floor((value / 2) - 5);
    }

    formatStatModifier(modifier?: number) : string {
        if (modifier !== undefined && modifier !== null) {
            try {
                if (modifier > 0) {
                    return `+${modifier}`;
                }
                return modifier.toString();
            }
            catch(ex) {}
        }
        
        return '';
    }
}

export default new CharacterService();