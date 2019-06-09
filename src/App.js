import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Tjenester from './pages/Tjenester/Tjenester';
import Tjeneste from './pages/Tjenester/Tjeneste';
import './scss/style.scss';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/tjenester" component={Tjenester} />
        <Route path="/tjenester/tjeneste/:id" component={Tjeneste} />
      </BrowserRouter>
    )
  }
}

export default App;
