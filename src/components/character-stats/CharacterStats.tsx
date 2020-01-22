import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import BlockTitle from '../block-title/BlockTitle';
import CharacterStat from '../character-stat/CharacterStat';
import { CharacterStatName } from '../../core/models/Character';

const CharacterStats: React.FC = () => {

    const useStyles = makeStyles(theme => ({
        statsBlock: {
            marginTop: 20,
        },
        inner: {
            border: '1px solid',
            marginTop: -14,
            marginLeft: 16,
            paddingTop: 19
        }
      }));

    const classes = useStyles();

      
  return (
    <Grid container spacing={2} className={classes.statsBlock}>
        <Grid item xs={12} md={6}>
            <BlockTitle Title="Puntuaciones de característica" />
            <div className={classes.inner}>
                <CharacterStat StatName={CharacterStatName.Strength}/>
                <CharacterStat StatName={CharacterStatName.Dexterity}/>
                <CharacterStat StatName={CharacterStatName.Constitution}/>
                <CharacterStat StatName={CharacterStatName.Intelligence}/>
                <CharacterStat StatName={CharacterStatName.Wisdom}/>
                <CharacterStat StatName={CharacterStatName.Charisma}/>
            </div>
        </Grid>
    </Grid>
  );
}

export default CharacterStats;
