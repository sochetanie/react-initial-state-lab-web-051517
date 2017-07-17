// Bomb Component Code Goes Here
import React from 'react'

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {
        if (this.state.secondsLeft === 0) {
            return (
                <div>
                    <h1>Boom!</h1>
                </div>
                )
        } else {
        return (
            <div>
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
            </div>
            )
        }
    }
}