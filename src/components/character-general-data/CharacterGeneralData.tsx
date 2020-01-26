import React, { ChangeEvent, useContext } from 'react';
import { Grid, TextField, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import BlockTitle from '../block-title/BlockTitle';
import { CharSize, CharAlignment } from '../../core/models/Character';
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
                <InputLabel htmlFor="Name">Nombre del PJ</InputLabel>
                <TextField id="Name" name="Name" value={character.Name} onChange={handleTextboxChange} className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={6} md={3}>
                <InputLabel htmlFor="ClassAndLevel">Clase/Nivel</InputLabel>
                <TextField id="ClassAndLevel" name="ClassAndLevel" onChange={handleTextboxChange} value={character.ClassAndLevel} className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={6} md={3}>
                <InputLabel htmlFor="Race">Raza</InputLabel>
                <TextField id="Race" name="Race" onChange={handleTextboxChange} value={character.Race} className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={6} md={3}>
                <InputLabel htmlFor="Thematic">Temática</InputLabel>
                <TextField id="Thematic" name="Thematic" onChange={handleTextboxChange} value={character.Thematic} className={classes.textField} fullWidth/>
            </Grid>

            <Grid item xs={6} md={2}>
                <InputLabel id="character-size">Tamaño</InputLabel>
                <Select name="Size" onChange={handleSelectChange} value={character.Size} labelId="character-size" fullWidth>
                    <MenuItem value={CharSize.Fine}>Minúsculo</MenuItem>
                    <MenuItem value={CharSize.Diminutive}>Diminuto</MenuItem>
                    <MenuItem value={CharSize.Tiny}>Menudo</MenuItem>
                    <MenuItem value={CharSize.Small}>Pequeño</MenuItem>
                    <MenuItem value={CharSize.Medium}>Mediano</MenuItem>
                    <MenuItem value={CharSize.Large}>Grande</MenuItem>
                    <MenuItem value={CharSize.Huge}>Enorme</MenuItem>
                    <MenuItem value={CharSize.Gargantuan}>Gargantuesco</MenuItem>
                    <MenuItem value={CharSize.Colossal}>Colosal</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={6} md={3}>
                <InputLabel htmlFor="Speed">Velocidad</InputLabel>
                <TextField id="Speed" name="Speed" onChange={handleTextboxChange} value={character.Speed} className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={3} md={1}>
                <InputLabel htmlFor="Sex">Sexo</InputLabel>
                <TextField id="Sex" name="Sex" onChange={handleTextboxChange} value={character.Sex} className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={9} md={6}>
                <InputLabel htmlFor="HomeWorld">Mundo natal</InputLabel>
                <TextField id="HomeWorld" name="HomeWorld" onChange={handleTextboxChange} value={character.HomeWorld} className={classes.textField} fullWidth/>
            </Grid>

            <Grid item xs={9} md={2}>
                <InputLabel id="character-alignment">Alineamiento</InputLabel>
                <Select name="Alignment" onChange={handleSelectChange} value={character.Alignment} labelId="character-alignment" fullWidth>
                    <MenuItem value={CharAlignment.LawfulGood}>Legal Bueno</MenuItem>
                    <MenuItem value={CharAlignment.LawfulNeutral}>Legal Neutral</MenuItem>
                    <MenuItem value={CharAlignment.LawfulEvil}>Legal Maligno</MenuItem>
                    <MenuItem value={CharAlignment.NeutralGood}>Neutral Bueno</MenuItem>
                    <MenuItem value={CharAlignment.NeutralAboslute}>Neutral Absoluto</MenuItem>
                    <MenuItem value={CharAlignment.NeutralEvil}>Neutral Maligno</MenuItem>
                    <MenuItem value={CharAlignment.ChaoticGood}>Caótico Bueno</MenuItem>
                    <MenuItem value={CharAlignment.ChaoticNeutral}>Caótico Neutral</MenuItem>
                    <MenuItem value={CharAlignment.ChaoticEvil}>Caótico Maligno</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={6} md={4}>
                <InputLabel htmlFor="God">Deidad</InputLabel>
                <TextField id="God" name="God" onChange={handleTextboxChange} value={character.God} className={classes.textField} fullWidth/>
            </Grid>
            <Grid item xs={6} md={6}>
                <InputLabel htmlFor="Player">Jugador</InputLabel>                    
                <TextField id="Player" name="Player" onChange={handleTextboxChange} value={character.Player} className={classes.textField} fullWidth/>
            </Grid>

        </Grid>

    );
  }
  
  export default CharacterGeneralData;