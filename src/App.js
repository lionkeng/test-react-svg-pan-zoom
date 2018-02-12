import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InteractiveSiteplan from './components/InteractiveSiteplan'

// this works
// <InteractiveSiteplan src="http://res.cloudinary.com/renderinghouse/image/upload/v1518030746/tmp/bedford-midlands.svg"/>

class App extends Component {
  render() {
    const img = 'http://res.cloudinary.com/renderinghouse/image/upload/v1518030746/tmp/bedford-midlands.svg'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <InteractiveSiteplan src={img}/>
        </header>
      </div>
    );
  }
}

export default App;
