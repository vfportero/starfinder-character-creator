import React, { useReducer, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import createActions from '../../core/context/characterActions';
import SheetBlock from '../sheet-block/SheetBlock';
import { TextField, Grid } from '@material-ui/core';
import CharacterContext from '../../core/context/CharacterContext';

const useStyles = makeStyles(theme => ({
    row: {
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        
    },
    input: {
        maxWidth: 60,
        [theme.breakpoints.up('md')]: {
            maxWidth: 80,
        },
    },
    addSymbol: {
        position: 'relative',
        "&::after": {
            position: 'absolute',
            right: 0,
            top: 16,
            fontSize: 18,
            [theme.breakpoints.up('md')]: {
                right: 12,
                fontSize: 22,
            },
        }
    },
    addPlus: {
        "&::after": {
            content: "'+'",
        }
    },
    addEquals: {
        "&::after": {
            content: "'='",
        }
    }
}));


const CharacterInitiative: React.FC = () => {
    const classes = useStyles();

    const {state, dispatch} = useContext<any>(CharacterContext);
    const character = state.character;
    const actions = createActions(dispatch);

    let handleChange = (e: any) => {
        if (e.target.value) {
            actions.setCharacterIniciative(parseInt(e.target.value));
        }
        
    }

    return (
        <SheetBlock title="Iniciativa">
            <Grid container spacing={3} className={classes.row}>
                <Grid item xs={4} md={3}>
                    <span>TOTAL</span>    
                </Grid>
                <Grid item xs={4} md={3}>
                    <span>MOD. POR<br/>DESTREZA</span>
                </Grid>
                <Grid item xs={4} md={3}>
                    <span>MODIF.<br/>VARIOS</span>
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.row}>
                <Grid item xs={4} md={3} className={[classes.addSymbol, classes.addEquals].join(' ')}>
                    <TextField 
                        className={classes.input}
                        variant="outlined"
                        type="number"
                        size="small"
                        color="secondary"
                        value={character.Initiative?.Total}
                        disabled
                    />    
                </Grid>
                <Grid item xs={4} md={3} className={[classes.addSymbol, classes.addPlus].join(' ')}>
                    <TextField 
                        className={classes.input}
                        variant="outlined"
                        type="number"
                        size="small"
                        color="secondary"
                        value={character.Dexterity?.Modifier}
                        disabled
                    />
                </Grid>
                <Grid item xs={4} md={3}>
                    <TextField 
                        className={classes.input}
                        variant="outlined"
                        type="number"
                        size="small"
                        color="secondary"
                        onChange={handleChange}
                        value={character.Initiative?.MiscModifier}
                        name="MiscModifier"
                    />
                </Grid>
            </Grid>
        </SheetBlock>
    );
}

export default CharacterInitiative;
