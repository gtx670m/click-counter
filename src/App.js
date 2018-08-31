import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div>
        <div onClick={this.props.onClick}>
          This div has been clicked {this.props.clicks} times.
        </div>
        <Hello now={new Date().toISOString()}/>
      </div>
    );
  }
}

export default App;
