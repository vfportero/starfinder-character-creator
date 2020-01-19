import React from 'react';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import BlockTitle from '../block-title/BlockTitle';
import CharacterStat from '../character-stat/CharacterStat';

const CharacterStats: React.FC = (model) => {

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
                <CharacterStat StatName="FUE"/>
                <CharacterStat StatName="DES"/>
                <CharacterStat StatName="CON"/>
                <CharacterStat StatName="INT"/>
                <CharacterStat StatName="SAB"/>
                <CharacterStat StatName="CAR"/>
            </div>
        </Grid>
    </Grid>
  );
}

export default CharacterStats;
