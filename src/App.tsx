import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <Route path={Routes.LOCATIONS} component={Locations} />
        <Route path={Routes.CHARACTERS} component={Characters} />
        <Route path={Routes.EPISODES} component={Episodes} />
        <Route path={Routes.HOME} component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
