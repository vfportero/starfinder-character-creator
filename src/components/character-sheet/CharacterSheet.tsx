import React, { useReducer } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header/Header';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import GetAppIcon from '@material-ui/icons/GetApp';
import CharacterStats from '../character-stats/CharacterStats';
import CharacterGeneralData from '../character-general-data/CharacterGeneralData';
import { initialState, characterReducer } from '../../core/context/characterReducer';
import { CharacterProvider } from '../../core/context/CharacterContext';
import { Button, Snackbar, IconButton, ButtonGroup } from '@material-ui/core';
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

    const closeToast = () => {
        actions.closeToast();
      };

    return (
        <CharacterProvider value={{state, dispatch}}>
            <Container fixed className={classes.characterSheet}>
                <Header />
                <form noValidate >
                    
                    <CharacterGeneralData/>
                    <CharacterStats />

                    <ButtonGroup color="primary" variant="contained" aria-label="primary button group" className={classes.ctaButton} >
                        <Button 
                            startIcon={<SaveIcon />}
                            onClick={save}
                            disabled={state.loading}
                        >
                        Guardar</Button>
                        <Button 
                            startIcon={<GetAppIcon />}
                            disabled
                        > Cargar (TODO)</Button>
                    </ButtonGroup>
                </form>
            
            </Container>  

            <Snackbar
                open={state.toastMessage.isOpen}
                autoHideDuration={6000}
                onClose={closeToast}
                message={state.toastMessage.message}
                action={
                    <React.Fragment>
                      <IconButton size="small" aria-label="close" color="inherit" onClick={closeToast}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
                
            />
        </CharacterProvider>

            
        
    );
}

export default CharacterSheet;
