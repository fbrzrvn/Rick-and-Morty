import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Character from './components/Character';
import Episode from './components/Episode';
import Location from './components/Location';
import Navbar from './components/Navbar';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={Routes.LOCATION} component={Location} />
        <Route path={Routes.LOCATIONS} component={Locations} />
        <Route path={Routes.CHARACTER} component={Character} />
        <Route path={Routes.CHARACTERS} component={Characters} />
        <Route path={Routes.EPISODE} component={Episode} />
        <Route path={Routes.EPISODES} component={Episodes} />
        <Route path={Routes.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
