import React, { useState, ChangeEvent, useContext, useReducer } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import BlockTitle from '../block-title/BlockTitle';
import { CharacterSize, CharacterAlignment, Character } from '../../core/models/Character';
import Header from '../header/Header';
import SaveIcon from '@material-ui/icons/Save';
import CharacterStats from '../character-stats/CharacterStats';
import CharacterGeneralData from '../character-general-data/CharacterGeneralData';
import { initialCharacter, characterReducer } from '../../core/reducers/characterReducer';
import { CharacterProvider } from '../../core/context/CharacterContext';


const useStyles = makeStyles(theme => ({
    characterSheet: {
        marginTop: 10,
        [theme.breakpoints.up('md')]: {
            marginTop: 40,
        },
    },
    textField: {
        marginRight: theme.spacing(1),
    },
    ctaButton: {
        marginTop: 20
    }
  }));


const CharacterSheet: React.FC = () => {

    const classes = useStyles();
    const [state, dispatch] = useReducer(characterReducer, initialCharacter);
    

    let save = () => {
        console.log(state);
    }

    return (
        <CharacterProvider value={{state, dispatch}}>
            <Container fixed className={classes.characterSheet}>
                <Header />
                <form noValidate >
                    
                    <CharacterGeneralData/>
                    <CharacterStats />

                    <Button 
                        className={classes.ctaButton} 
                        variant="contained"
                        color="primary" 
                        startIcon={<SaveIcon />}
                        size="large"
                        onClick={save}
                    >
                    Guardar</Button>
                </form>
            
            </Container>  
        </CharacterProvider>

            
        
    );
}

export default CharacterSheet;
