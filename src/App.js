import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.jsx';
import StorePage from './pages/store/store.jsx';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch> 
        <Route exact path='/' component= { HomePage } />
        <Route path='/store' component= { StorePage } />
      </Switch>
    </div>
  );
}

export default App;
