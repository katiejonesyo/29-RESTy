import React, { Component } from 'react';
import Form from '../components/presentation/form/Form';
import Header from '../components/presentation/Header';
import Fetch from '../services/Fetch';
import Results from '../components/presentation/results/Results';

export default class Resty extends Component {
  state={
    url: '',
    method: '',
    json: '',
    results: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetch();
  }

  fetch = () => {
    const { url, method, json } = this.state;
    Fetch(url, method, json)
      .then(res => this.setState({ results: JSON.stringify(res) }));
  }

  render() {
    const { url, method, json, results } = this.state;

    return (
      <>
        <Header />
        <Form 
          url={url}
          method={method}
          json={json}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <Results results={results} />
      </>
    );
  }
}


