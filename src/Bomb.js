import React, { Component } from 'react';
import ImageSlider from './ImageSlider.js';

export default class Bomb extends Component {

  constructor(props){
    super(props)
    this.state= {
      secondsLeft: this.props.initialCount
    }
  }

  text = () => {
    let text = `${this.state.secondsLeft} seconds left before I go boom!`
    this.state.secondsLeft > 0 ? text : text = "Boom!"
    return text
  }

  render(){

    return(
      <div>
        {this.text()}
      </div>
    )
  }

}
