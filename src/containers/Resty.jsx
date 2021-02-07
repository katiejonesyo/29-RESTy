import React, { Component } from 'react'

export default class Resty extends Component {

    state = {
        url: '',
        method: '',
        json: '',
        click: false
    }

    handleChange = (e) => {
 e.preventDefault();
 this.setState({ [e.target.name]: e.target.value })
    }

    handleClick = (e) => {
        e.prevetnDefault();
        this.setState({ click:true })
    }

    render() {
        return (
            <>
            <h1> Resty </h1>
            <div> Resty 
                <Controls onChange={this.handleChange} onClick={this.onClick} />
            </div>
            </>
        )
    }
}

