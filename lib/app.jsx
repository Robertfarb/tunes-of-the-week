import React from 'react';
import ReactDOM from 'react-dom';

import Bubbles from './artists';
import CountryFormContainer from './country_form_container';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Bubbles />, document.getElementById('main'));
});