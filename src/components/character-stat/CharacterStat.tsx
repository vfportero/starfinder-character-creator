import React, { ChangeEvent, useState, useContext } from 'react';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import { Character } from '../../core/models/Character';
import CharacterContext from '../../core/context/CharacterContext';
import { UpdateCharacterAction } from '../../core/reducers/characterActions';

interface CharacterStatModel {
    StatName: string;
}
  

const CharacterStat: React.FC<CharacterStatModel> = (model) => {

    const useStyles = makeStyles(theme => ({
        root: {
            padding: '4px 24px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%'
        },
        name: {
            width: 48,
            height: 36,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
        },
        mainStatValue: {
            border: '2px solid black'
        },
        statValue: {
            width: 54,
            [theme.breakpoints.up('md')]: {
                width: 90,
            },
        }
      }));

    const classes = useStyles();
    
    const {state, dispatch} = useContext<any>(CharacterContext);
    
    let calculateStatModifier = (stat: string) : string => {
        if (stat) {
            try {
                const statNumericValue = parseInt(stat);
                let modifier = Math.floor((statNumericValue / 2) - 5);
                if (modifier > 0 ) {
                    return `+${modifier}`;
                }
                return modifier.toString();
            }
            catch {}            
        }
        return '';
        
    }

    let handleStatChange = (e: { target: { value: string; }; }) => {
        dispatch(new UpdateCharacterAction(model.StatName, {
            Value: e.target.value,
            Modifier: calculateStatModifier(e.target.value)
        }));
    }

    let getStatAbbreviation = () => {
        switch(model.StatName) {
            case 'Strength':
                return 'FUE';
            case 'Dexterity':
                return 'DES';
            case 'Constitution':
                return 'CON';
            case 'Intelligence':
                return 'INT';
            case 'Wisdom':
                return 'SAB';
            case 'Charisma':
                return 'CAR';
        }
        return '';
    }

      
  return (

    <div className={classes.root}>
        <div className={classes.name}>{getStatAbbreviation()}</div>
        <TextField 
                variant="outlined"
                type="number"
                size="small"
                color="secondary"
                className={classes.statValue}
                onBlur={handleStatChange}
                InputProps={{
                    classes: {
                        root: classes.mainStatValue
                    } 
                }}
            />
            <TextField 
                variant="outlined"
                size="small"
                color="secondary"
                disabled
                className={classes.statValue}
                value={state[model.StatName]?.Modifier}
                InputProps={{
                    classes: {
                        root: classes.mainStatValue
                    } 
                }}
            />
            <TextField 
                variant="outlined"
                size="small"
                disabled
                className={classes.statValue}
            />
            <TextField 
                variant="outlined"
                size="small"
                disabled
                className={classes.statValue}
            />
    </div>
  );
}

export default CharacterStat;
