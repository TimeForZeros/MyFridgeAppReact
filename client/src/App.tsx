import React from 'react';
import './App.css';
import Fridge from './fridge/fridge';
import MainNav from './components/navbar';

const App = () => (
  <div className="App">
    <header>
    <MainNav/>
    </header>
    <body>
    <Fridge/>
    </body>
  </div>
);

export default App;
