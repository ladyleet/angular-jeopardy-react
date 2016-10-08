import React, { Component } from 'react';
import logo from './angular.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Angular Jeopardy</h2>
        </div>
      </div>
    );
  }
}

export default App;
