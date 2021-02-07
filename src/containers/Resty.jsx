import React, { Component } from 'react';
import List from '../components/displays/List';
import Controls from '../components/controls/Controls';


export default class Resty extends Component {

    state = {
        url: '',
        method: '',
        json: 'sample jason response',
        response: '',
        history: [],
        click: false
    }

    handleChange = (e) => {
 e.preventDefault();
 this.setState({ [e.target.name]: e.target.value })
    }

    handleClick = (e) => {
       if (!this.state.url || !this.state.method)
        return alert('Fill out required fields.')

        this.setState(state =>({ 
            history: [...state.history, {url: state.url, method:state.method }],
            click:true }))
    }

    render() {
        const { click, history } = this.state;
        return (
            <>
            <h1> Resty </h1>
            <div> Resty 
                <Controls onChange={this.handleChange} onClick={this.onClick} />
                {click && <List history={history} />}
            </div>
            </>
        )
    }
}


