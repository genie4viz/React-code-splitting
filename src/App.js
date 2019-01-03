import React, { Component } from 'react';
import notify from './notify';
import './App.css';

class App extends Component {
  handleClick = () => {
    notify();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
