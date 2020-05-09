// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super()

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    //checks to see if seconds is equal to 0 if not output message
    let message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    )
  }

}

export default Bomb;
