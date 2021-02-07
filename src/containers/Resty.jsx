import React, { Component } from 'react';
import { getRequest } from '../services/api';
import List from '../components/displays/List';
import Controls from '../components/controls/Controls';
import Response from '../components/displays/Response';



export default class Resty extends Component {

    state = {
        url: '',
        method: '',
        response: '',
        history: [],
        click: false
    }

    handleChange = (e) => {
 e.preventDefault();
 this.setState({ [e.target.name]: e.target.value })
    }

    handleClick = async() => {
       if (!this.state.url || !this.state.method)
        return alert('Fill out required fields.')

        this.setState(state =>({ 
            history: [...state.history, {url: state.url, method:state.method }],
            click:true }))

        if (this.state.method === 'GET'){
            const response = await getRequest(this.state.url)
            this.setState({ response: respose })
        }
    }

    render() {
        const { click, history, response } = this.state;
        return (
            <>
            <h1> Resty </h1>
            <div> Resty 
                <Controls onChange={this.handleChange} onClick={this.onClick} />
                { click && 
                  <>
                  <List history={history} />
                  <Response apiResponse={response}/>
                  </>
                }
            </div>
            </>
        )
    }
}


