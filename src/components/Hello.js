import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <h1>Hello at {this.props.now}</h1>
    );
  }
}

export default Hello;
