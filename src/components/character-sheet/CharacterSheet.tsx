import React, { useReducer } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header/Header';
import SaveIcon from '@material-ui/icons/Save';
import CharacterStats from '../character-stats/CharacterStats';
import CharacterGeneralData from '../character-general-data/CharacterGeneralData';
import { initialState, characterReducer } from '../../core/context/characterReducer';
import { CharacterProvider } from '../../core/context/CharacterContext';
import { Button } from '@material-ui/core';
import DatabaseService from '../../core/services/DatabaseService';
import createActions from '../../core/context/characterActions';

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
    const [state, dispatch] = useReducer(characterReducer, initialState);
    const actions = createActions(dispatch);


    let save = () => {
        actions.saveCharacterToDb(state.character);
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
                        disabled={state.loading}
                    >
                    Guardar</Button>
                </form>
            
            </Container>  
        </CharacterProvider>

            
        
    );
}

export default CharacterSheet;
