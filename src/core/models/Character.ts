export interface Character {
    Id?: string;
    Name?: string;
    ClassAndLevel?: string,
    Race?: string;
    Thematic?: string;
    Size?: CharSize;
    Speed?: number;
    Sex?: string;
    HomeWorld?: string;
    Alignment?: CharAlignment;
    God?: string;
    Player?: string;

    Strength?: CharStat;
    Dexterity?: CharStat;
    Constitution?: CharStat;
    Intelligence?: CharStat;
    Wisdom?: CharStat;
    Charisma?: CharStat;

    Initiative?: CharInitiative;
}

export interface CharInitiative {
    Total: number;
    MiscModifier: number;
}

export interface CharStat {
    Value: number;
    Modifier: number;
}

export enum CharSize {
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

export enum CharAlignment {
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

export enum CharStatName {
    Strength = 'Strength',
    Dexterity= 'Dexterity',
    Constitution= 'Constitution',
    Intelligence= 'Intelligence',
    Wisdom= 'Wisdom',
    Charisma= 'Charisma',
}