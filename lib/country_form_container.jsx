import React from 'react';
import * as APICall from './api_util';
import { CountryForm } from './country_form.js';

class CountryFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    APICall.lastFmArtistCall.then(response => console.log(response))
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
      console.log(this.state['country'])
    }
  }

  render () {
    return (
      <CountryForm handleSubmit={this.handleSubmit} update={this.update}/>
    )
  }
}

export default CountryFormContainer;
