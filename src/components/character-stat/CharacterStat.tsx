import React, { ChangeEvent, useState } from 'react';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import { Character } from '../../core/models/Character';

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
    const [state, setState] = useState<string>('');


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

    let handleStatChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState(calculateStatModifier(e.target.value));
    }

      
  return (

    <div className={classes.root}>
        <div className={classes.name}>{model.StatName}</div>
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
            />
            <TextField 
                variant="outlined"
                size="small"
                color="secondary"
                disabled
                className={classes.statValue}
                value={state}
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

    // <Grid container spacing={2} className={classes.root}>
    //     <Grid item xs={2}>
    //         <div className={classes.name}>{model.StatName}</div>
    //     </Grid>
    //     <Grid item xs={2}>
    //         <TextField 
    //             variant="outlined"
    //             type="number"
    //             size="small"
    //             color="secondary"
    //             InputProps={{
    //                 classes: {
    //                     root: classes.mainStat
    //                 } 
    //             }}
    //         />
    //     </Grid>
    //     <Grid item xs={2}>
    //         <TextField 
    //             variant="outlined"
    //             size="small"
    //             color="secondary"
    //             disabled
    //             className={classes.mainStat}
    //         />
    //     </Grid>
    //     <Grid item xs={2}>
    //         <TextField 
    //             variant="outlined"
    //             size="small"
    //             disabled
    //         />
    //     </Grid>
    //     <Grid item xs={2}>
    //         <TextField 
    //             variant="outlined"
    //             size="small"
    //             disabled
    //         />
    //     </Grid>
    // </Grid>
  );
}

export default CharacterStat;
