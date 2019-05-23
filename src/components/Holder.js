import React, { Component } from 'react'
import Display from './Display'

export default class Holder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 1
        }
    }

    updatePrevious = () => {
        let place = this.state.number
            if (place <= 1) {
                this.setState({ number: 1 })
            } else {
                this.setState({ number: place - 1 })
            }
        }
    
    updateNext = (number) => {
        let place = this.state.number
        if (place >= 25) {
            this.setState({ number: 25 })
        } else {
            this.setState({ number: place + 1})
        }
    }
    
    render() {
        return (
            <div>
                <Display data={this.props.data} number={this.state.number}/>
                <div className="buttons">
        <button onClick={this.updatePrevious}> {'< Previous'} </button>
                        <div className="middle-buttons">
                        <button className="blue-buttons">Edit</button>
                        <button className="blue-buttons">Delete</button>
                        <button className="blue-buttons">New</button>
                        </div>
                    <button onClick={this.updateNext}> {'Next >'} </button>
                </div>
            </div>
        )
    }
}
