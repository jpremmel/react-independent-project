import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function CoffeeCard(props) {
  return (
    <div className="col s12 m6 l4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.title}</span>
          <p>{props.description}</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
}

CoffeeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default CoffeeCard;