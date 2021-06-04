import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import Routes from './routes';
import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route path={Routes.LOCATIONS} component={Locations} />
          <Route path={Routes.CHARACTERS} component={Characters} />
          <Route path={Routes.EPISODES} component={Episodes} />
          <Route path={Routes.HOME}>
            <h2>HOME</h2>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
