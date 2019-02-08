import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grommet } from 'grommet';
import HangMan from './components/HangMan';

class App extends Component {
  render() {
    return (
      <Grommet className="App">
        <HangMan/>
      </Grommet>
    );
  }
}

export default App;
