import React, { Component } from 'react';

export default class Question extends Component {
  state = { show: null };

  render() {
    const { show } = this.state;
    switch (show) {
      case 'a':
        return ( <div onClick={() => this.setState({ show: 'q'})}>{this.props.a}</div> );
      case 'q':
        return ( <div>{this.props.q}</div> );
      default:
        return ( <div onClick={() => this.setState({ show: 'a'})}>Pick Me!</div> );
    }
  }
};
