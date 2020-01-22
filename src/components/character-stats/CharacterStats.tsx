import React from 'react';
import CharacterStat from '../character-stat/CharacterStat';
import { CharStatName } from '../../core/models/Character';
import SheetBlock from '../sheet-block/SheetBlock';

const CharacterStats: React.FC = () => {

      
  return (
    <SheetBlock title="Puntuaciones de característica">
      <CharacterStat StatName={CharStatName.Strength}/>
      <CharacterStat StatName={CharStatName.Dexterity}/>
      <CharacterStat StatName={CharStatName.Constitution}/>
      <CharacterStat StatName={CharStatName.Intelligence}/>
      <CharacterStat StatName={CharStatName.Wisdom}/>
      <CharacterStat StatName={CharStatName.Charisma}/>
    </SheetBlock>
  );
}

export default CharacterStats;
