import React, { Component } from 'react';
import Header from './components/Header'
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router/>
      </div>
    );
  }
}

export default App;
