import React from 'react';
import CharacterSheet from './components/character-sheet/CharacterSheet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import * as firebase from 'firebase';


const App: React.FC = () => {

  var firebaseConfig = {
    apiKey: "AIzaSyDID8wQBuZCVAXZXWN3PoMidd_mKJkAH8M",
    authDomain: "starfinder-character-cre-2b9fc.firebaseapp.com",
    databaseURL: "https://starfinder-character-cre-2b9fc.firebaseio.com",
    projectId: "starfinder-character-cre-2b9fc",
    storageBucket: "starfinder-character-cre-2b9fc.appspot.com",
    messagingSenderId: "257636364437",
    appId: "1:257636364437:web:9fd01be19801a036dfeb9c"
  };
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
