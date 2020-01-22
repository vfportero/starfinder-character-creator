export interface Character {
    Id?: string;
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

    Strength?: CharacterStat;
    Dexterity?: CharacterStat;
    Constitution?: CharacterStat;
    Intelligence?: CharacterStat;
    Wisdom?: CharacterStat;
    Charisma?: CharacterStat;
}

export interface CharacterStat {
    Value: number;
    Modifier: number;
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

export enum CharacterStatName {
    Strength = 'Strength',
    Dexterity= 'Dexterity',
    Constitution= 'Constitution',
    Intelligence= 'Intelligence',
    Wisdom= 'Wisdom',
    Charisma= 'Charisma',
}