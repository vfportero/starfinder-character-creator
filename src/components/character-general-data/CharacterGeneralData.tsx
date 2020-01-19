import React, { ChangeEvent, useContext } from 'react';
import { Grid, TextField, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import BlockTitle from '../block-title/BlockTitle';
import { CharacterSize, CharacterAlignment } from '../../core/models/Character';
import CharacterContext from '../../core/context/CharacterContext';
import createActions from '../../core/context/characterActions';


const useStyles = makeStyles(theme => ({
    textField: {
        marginRight: theme.spacing(1),
    }
  }));

const CharacterGeneralData: React.FC = () => {

    const classes = useStyles();

    const {state, dispatch} = useContext<any>(CharacterContext);
    const actions = createActions(dispatch);

    const character = state.character;    
    
    let handleStateChange = (name: string, value: any) => {
        actions.setCharacterProperty(name, value);
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

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <BlockTitle Title="Información general" />
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField name="Name" defaultValue={character.Name} onChange={handleTextboxChange} label="Nombre del PJ" className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField name="ClassAndLevel" onChange={handleTextboxChange} defaultValue={character.ClassAndLevel} label="Clase/Nivel" className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField name="Race" onChange={handleTextboxChange} defaultValue={character.Race} label="Raza" className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField name="Thematic" onChange={handleTextboxChange} defaultValue={character.Thematic} label="Temática" className={classes.textField} fullWidth/>
            </Grid>

            <Grid item xs={6} md={2}>
                <InputLabel id="character-size">Tamaño</InputLabel>
                <Select name="Size" onChange={handleSelectChange} defaultValue={character.Size} labelId="character-size" fullWidth>
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
                <TextField name="Speed" onChange={handleTextboxChange} defaultValue={character.Speed} label="Velocidad" className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={3} md={1}>
                <TextField name="Sex" onChange={handleTextboxChange} defaultValue={character.Sex} label="Sexo" className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={9} md={6}>
                <TextField name="HomeWorld" onChange={handleTextboxChange} defaultValue={character.HomeWorld} label="Mundo natal" className={classes.textField} fullWidth/>
            </Grid>

            <Grid item xs={9} md={2}>
                <InputLabel id="character-alignment">Alineamiento</InputLabel>
                <Select name="Alignment" onChange={handleSelectChange} defaultValue={character.Alignment} labelId="character-alignment" fullWidth>
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
                <TextField name="God" onChange={handleTextboxChange} defaultValue={character.God} label="Dios" className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField name="Player" onChange={handleTextboxChange} defaultValue={character.Player} label="Jugador" className={classes.textField} fullWidth/>
            </Grid>

        </Grid>

    );
  }
  
  export default CharacterGeneralData;