import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SwaggerUI url="http://petstore.swagger.io/v2/swagger.yaml"/>
      </div>
    );
  }
}

export default App;
