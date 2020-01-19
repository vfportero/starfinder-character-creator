import React, { useState, ChangeEvent } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import BlockTitle from '../block-title/BlockTitle';
import { CharacterSize, CharacterAlignment, Character } from '../../core/models/Character';
import Header from '../header/Header';
import SaveIcon from '@material-ui/icons/Save';
import CharacterStats from '../character-stats/CharacterStats';


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

    const [state, setState] = useState<Character>({});

    let save = () => {
        console.log(state);
    }

    let handleStateChange = (name: string, value: any) => {
        setState({
            ...state,
            [name]: value
        })
    }

    let handleTextboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleStateChange(e.target.name, e.target.value);
    }

    let handleSelectChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>, child: React.ReactNode,) => {
        if (e.target.name) {
            handleStateChange(e.target.name, e.target.value);    
        }
    }

    return (
        <Container fixed className={classes.characterSheet}>
            <Header />
            <form noValidate >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <BlockTitle Title="Información general" />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <TextField name="Name" defaultValue={state.Name} onChange={handleTextboxChange} label="Nombre del PJ" className={classes.textField} fullWidth/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <TextField name="ClassAndLevel" onChange={handleTextboxChange} defaultValue={state.ClassAndLevel} label="Clase/Nivel" className={classes.textField} fullWidth/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <TextField name="Race" onChange={handleTextboxChange} defaultValue={state.Race} label="Raza" className={classes.textField} fullWidth/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <TextField name="Thematic" onChange={handleTextboxChange} defaultValue={state.Thematic} label="Temática" className={classes.textField} fullWidth/>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <InputLabel id="character-size">Tamaño</InputLabel>
                        <Select name="Size" onChange={handleSelectChange} defaultValue={state.Size} labelId="character-size" fullWidth>
                            <MenuItem value={CharacterSize.Fine}>Minúsculo</MenuItem>
                            <MenuItem value={CharacterSize.Diminutive}>Diminuto</MenuItem>
                            <MenuItem value={CharacterSize.Tiny}>Menudo</MenuItem>
                            <MenuItem value={CharacterSize.Small}>Pequeño</MenuItem>
                            <MenuItem value={CharacterSize.Medium}>Mediano</MenuItem>
                            <MenuItem value={CharacterSize.Large}>Grande</MenuItem>
                            <MenuItem value={CharacterSize.Huge}>Enorme</MenuItem>
                            <MenuItem value={CharacterSize.Gargantuan}>Gargantuesco</MenuItem>
                            <MenuItem value={CharacterSize.Colossal}>Colosal</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <TextField name="Speed" onChange={handleTextboxChange} defaultValue={state.Speed} label="Velocidad" className={classes.textField} fullWidth/>
                    </Grid>
                    <Grid item xs={3} md={1}>
                        <TextField name="Sex" onChange={handleTextboxChange} defaultValue={state.Sex} label="Sexo" className={classes.textField} fullWidth/>
                    </Grid>
                    <Grid item xs={9} md={6}>
                        <TextField name="HomeWorld" onChange={handleTextboxChange} defaultValue={state.HomeWorld} label="Mundo natal" className={classes.textField} fullWidth/>
                    </Grid>

                    <Grid item xs={9} md={2}>
                        <InputLabel id="character-alignment">Alineamiento</InputLabel>
                        <Select name="Alignment" onChange={handleSelectChange} defaultValue={state.Alignment} labelId="character-alignment" fullWidth>
                            <MenuItem value={CharacterAlignment.LawfulGood}>Legal Bueno</MenuItem>
                            <MenuItem value={CharacterAlignment.LawfulNeutral}>Legal Neutral</MenuItem>
                            <MenuItem value={CharacterAlignment.LawfulEvil}>Legal Maligno</MenuItem>
                            <MenuItem value={CharacterAlignment.NeutralGood}>Neutral Bueno</MenuItem>
                            <MenuItem value={CharacterAlignment.NeutralAboslute}>Neutral Absoluto</MenuItem>
                            <MenuItem value={CharacterAlignment.NeutralEvil}>Neutral Maligno</MenuItem>
                            <MenuItem value={CharacterAlignment.ChaoticGood}>Caótico Bueno</MenuItem>
                            <MenuItem value={CharacterAlignment.ChaoticNeutral}>Caótico Neutral</MenuItem>
                            <MenuItem value={CharacterAlignment.ChaoticEvil}>Caótico Maligno</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <TextField name="God" onChange={handleTextboxChange} defaultValue={state.God} label="Dios" className={classes.textField} fullWidth/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField name="Player" onChange={handleTextboxChange} defaultValue={state.Player} label="Jugador" className={classes.textField} fullWidth/>
                    </Grid>

                </Grid>

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
    );
}

export default CharacterSheet;
