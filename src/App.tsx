import React from 'react';
import CharacterSheet from './components/character-sheet/CharacterSheet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseconfig';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
}

const App: React.FC = () => {


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={CharacterSheet}/>
          <Route path='/pj/:id' render={( {match}: MatchProps) => (
            <CharacterSheet Id={match.params.id} /> )} /> 
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
