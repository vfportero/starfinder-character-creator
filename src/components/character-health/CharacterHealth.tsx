import React, { useReducer, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import createActions from '../../core/context/characterActions';
import SheetBlock from '../sheet-block/SheetBlock';
import { TextField, Grid } from '@material-ui/core';
import CharacterContext from '../../core/context/CharacterContext';

const useStyles = makeStyles(theme => ({
    row: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '0 12px',
        fontSize: 10,
        [theme.breakpoints.up("md")]: {
            padding: '0 24px',
            fontSize: 12
        }
        
    },
    input: {
        maxWidth: 60,
        [theme.breakpoints.up('md')]: {
            maxWidth: 80,
        },
    },
}));


const CharacterInitiative: React.FC = () => {
    const classes = useStyles();

    const {state, dispatch} = useContext<any>(CharacterContext);
    const character = state.character;
    const actions = createActions(dispatch);

    let handleChange = (e: any) => {
        if (e.target.value) {
            actions.setCharacterProperty(e.target.name, e.target.value);
        }   
    }

    return (
        <SheetBlock title="Salud y Resolución">
            <Grid container spacing={1} className={classes.row}>
                <Grid item xs={3} ></Grid>
                <Grid item xs={3} >
                    <span>PUNTOS DE AGUANTE</span>    
                </Grid>
                <Grid item xs={3} >
                    <span>PUNTOS DE GOLPE</span>
                </Grid>
                <Grid item xs={3} >
                    <span>PUNTOS DE RESOLUCIÓN</span>
                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.row}>
                <Grid item xs={3} >
                  TOTAL
                </Grid>
                <Grid item xs={3} >
                    <TextField 
                        className={classes.input}
                        variant="outlined"
                        type="number"
                        size="small"
                        color="secondary"
                        onChange={handleChange}
                        name="StaminaPoints"
                        value={character.StaminaPoints}
                    />    
                </Grid>
                <Grid item xs={3} >
                    <TextField 
                        className={classes.input}
                        variant="outlined"
                        type="number"
                        size="small"
                        color="secondary"
                        onChange={handleChange}
                        name="HitPoints"
                        value={character.HitPoints}
                    />
                </Grid>
                <Grid item xs={3} >
                    <TextField 
                        className={classes.input}
                        variant="outlined"
                        type="number"
                        size="small"
                        color="secondary"
                        onChange={handleChange}
                        name="ResolvePoints"
                        value={character.ResolvePoints}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.row}>
                <Grid item xs={3} >
                  ACTUAL
                </Grid>
                <Grid item xs={3} >
                    <TextField 
                        className={classes.input}
                        variant="outlined"
                        type="number"
                        size="small"
                        color="secondary"
                        disabled
                    />    
                </Grid>
                <Grid item xs={3} >
                    <TextField 
                        className={classes.input}
                        variant="outlined"
                        type="number"
                        size="small"
                        color="secondary"
                        disabled
                    />
                </Grid>
                <Grid item xs={3} >
                    <TextField 
                        className={classes.input}
                        variant="outlined"
                        type="number"
                        size="small"
                        color="secondary"
                        disabled
                    />
                </Grid>
            </Grid>
        </SheetBlock>
    );
}

export default CharacterInitiative;
