export interface Character {
    Name?: string;
    ClassAndLevel?: string,
    Race?: string;
    Thematic?: string;
    Size?: CharacterSize;
    Speed?: number;
    Sex?: string;
    HomeWorld?: string;
    Alignment?: CharacterAlignment;
    God?: string;
    Player?: string;
}

export enum CharacterSize {
    Fine = 'fine', 
    Diminutive = 'diminutive', 
    Tiny = 'tiny',
    Small = 'small', 
    Medium = 'medium', 
    Large = 'large',
    Huge = 'huge', 
    Gargantuan = 'gargantuan', 
    Colossal = 'colossal'
}

export enum CharacterAlignment {
    LawfulGood = 'lawful_good',
    LawfulNeutral = 'lawful_neutral',
    LawfulEvil = 'lawful_evil',

    NeutralGood = 'neutral_good',
    NeutralAboslute = 'neutral_absolute',
    NeutralEvil = 'neutral_evil',

    ChaoticGood = 'chaotic_good',
    ChaoticNeutral = 'chaotic_neutral',
    ChaoticEvil = 'chaotic_evil',
}