import React from 'react';
import CharacterSheet from './components/character-sheet/CharacterSheet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import * as firebase from 'firebase';
import * as firebaseConfig from './firebaseconfig';


const App: React.FC = () => {


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CharacterSheet />
    </ThemeProvider>
  );
}

export default App;
