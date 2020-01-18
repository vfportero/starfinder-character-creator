import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        marginBottom: 20,
        [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-end',
        }
    },
    logo: {
        marginLeft: 8,
        height: 24
    }
  }));
  


const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>Hoja de Personaje <img src="/StarfinderLogo.png" alt="Starfinder" className={classes.logo}></img></div> 
    );
}

export default Header;
