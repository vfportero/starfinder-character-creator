import React, { useContext } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import CharacterContext from '../../core/context/CharacterContext';
import createActions from '../../core/context/characterActions';
import { CharStatName } from '../../core/models/Character';
import CharacterService from '../../core/services/CharacterService';

interface CharacterStatModel {
    StatName: CharStatName;
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
    const actions = createActions(dispatch);
    const character = state.character;


    let handleStatChange = (e: any) => {
        if (e.target.value) {
            actions.setCharacterStat(model.StatName, e.target.value);
            
            switch(model.StatName) {
                case CharStatName.Dexterity:
                    actions.setCharacterIniciative();
                    break;
            }
        }
    }

    let getStatAbbreviation = () => {
        switch(model.StatName) {
            case CharStatName.Strength:
                return 'FUE';
            case CharStatName.Dexterity:
                return 'DES';
            case CharStatName.Constitution:
                return 'CON';
            case CharStatName.Intelligence:
                return 'INT';
            case CharStatName.Wisdom:
                return 'SAB';
            case CharStatName.Charisma:
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
                onChange={handleStatChange}
                InputProps={{
                    classes: {
                        root: classes.mainStatValue
                    } 
                }}
                value={character[model.StatName]?.Value}
                name={model.StatName}
            />
            <TextField 
                variant="outlined"
                size="small"
                color="secondary"
                disabled
                className={classes.statValue}
                value={CharacterService.formatStatModifier(character[model.StatName]?.Modifier)}
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
