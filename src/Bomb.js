import React, {Component} from 'react'


export default class Bomb extends Component {
	constructor(props){
		super(props)
		this.state={secondsLeft: props.initialCount}
	}

	handleSeconds = () => {
		let remainingSeconds = Math.floor((Date.now() - this.state.secondsLeft)/1000)
		this.setState({secondsLeft: remainingSeconds})
	}

	render(){
		if (this.state.secondsLeft === 0){
			return(<div className='bomb'>Boom!</div>)
		} else {
			return(<div className='bomb'>{this.state.secondsLeft} seconds left before I go boom!</div>)
		}

	}
}