import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './routes';
import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route path={Routes.LOCATIONS}>
            <h2>LOCATIONS</h2>
          </Route>
          <Route path={Routes.CHARACTERS}>
            <h2>CHARACTERS</h2>
          </Route>
          <Route path={Routes.EPISODES}>
            <h2>EPISODES</h2>
          </Route>
          <Route path={Routes.HOME}>
            <h2>HOME</h2>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
