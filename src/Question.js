import React, { Component } from 'react';

export default class Question extends Component {

  state = { show: null };

  render() {

    const { show } = this.state;
    switch (show) {
      case 'q':
        return ( <div onClick={() => this.setState({ show: 'a'})}>{this.props.q}</div> );
      case 'a':
        return ( this.props.img ? <img src={this.props.img}/> : <div>{this.props.a}</div> );
      default:
        return ( <div onClick={() => this.setState({ show: 'q'})}>Pick Me!</div> );
    }
  }
};
