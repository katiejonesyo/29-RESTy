import React from 'react';
import propTypes from 'prop-types';
import History from './History';

const List = ({ history }) => {
  return history.map(search => (
    <p>
      <History key={search.url + search.method }{...search} />
    </p>
  ))
}

List.propTypes = {
  history: propTypes.arrayOf(propTypes.shape({
    url: propTypes.string.isRequired,
    method: propTypes.string.isRequired
  }))
};

export default List;


