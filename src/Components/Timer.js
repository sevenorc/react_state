import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        intervall : null,
        timer : 0
    }

    componentDidMount(){
        this.setState({
            intervall : setInterval(() => {
            this.setState({timer : this.state.timer + 1})
            }
        ,1000)
        })
    }

    render() {
        return (
            <div>
                <span>{this.state.timer}</span>
            </div>
        )
    }
}
