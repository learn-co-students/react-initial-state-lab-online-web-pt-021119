import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  countdown = () => {
    const newCount = this.state.secondsLeft - 1
    this.setState({
      secondsLeft: newCount
    })
  }

  render(){
    const timeLeft = this.state.secondsLeft;
    if (timeLeft > 0) {
      this.countdown
      return (
        <div onLoad={this.countdown}>{this.state.secondsLeft} seconds left before I go boom!</div>);
    } else {
      return (
        <div>Boom!</div>);
    }
  }

}
