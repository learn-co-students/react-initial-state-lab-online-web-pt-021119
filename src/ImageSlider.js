// your ImageSlider code here!
import React from 'react';
import Bomb from './Bomb'

export default class ImageSlider extends React.Component{
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
increment = () => {
  //console.log(`before setState: ${this.state.currentSlideIndex}`)


this.setState({
  currentSlideIndex: this.state.currentSlideIndex + 1
})

//console.log(`after setState: ${this.state.currentSlideIndex}`)
}
  render() {
    return(
    <h3>
      I am on slide {this.state.currentSlideIndex}
  </h3>
    )
  }

}
