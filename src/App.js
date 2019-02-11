import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ReactPlayer 
            url='https://www.radiantmediaplayer.com/media/bbb-360p.mp4' 
            controls
            playing
            light="true" 
            width="530px"
            height="300px"
          />
        </header>
      </div>
    );
  }
}

export default App;
