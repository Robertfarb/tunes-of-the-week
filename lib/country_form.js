import React from 'react';

export const CountryForm = props => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <input onChange={props.update("country")} className="country-input" placeholder="Input a country..." type="text" />
      <input type="submit" value="Find Top Tunes" />
    </form>
  </div>
)