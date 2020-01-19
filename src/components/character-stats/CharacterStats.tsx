import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import BlockTitle from '../block-title/BlockTitle';
import CharacterStat from '../character-stat/CharacterStat';

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
                <CharacterStat StatName="Strength"/>
                <CharacterStat StatName="Dexterity"/>
                <CharacterStat StatName="Constitution"/>
                <CharacterStat StatName="Intelligence"/>
                <CharacterStat StatName="Wisdom"/>
                <CharacterStat StatName="Charisma"/>
            </div>
        </Grid>
    </Grid>
  );
}

export default CharacterStats;
