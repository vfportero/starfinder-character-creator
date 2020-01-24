import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0c4f99',
      contrastText: 'white',
    },
    secondary: {
      main: '#000',
      contrastText: 'white'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Audiowide',
    fontSize: 12,
  },
});

export default theme;