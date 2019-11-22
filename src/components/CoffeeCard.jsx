import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function CoffeeCard(props) {
  var cardStyle = {
    backgroundColor: '#cfb496'
  };
  var titleStyle = {
    textAlign: 'center',
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
  };
  var darkText = {
    color: '#2c2321'
  };
  return (
    <div className="col s12 m6 l4">
      <div className="card darken-1" style={cardStyle}>
        <div className="card-content">
          <span className="card-title" style={titleStyle}>{props.title}</span>
          <p style={darkText}>{props.description}</p>
          <p style={darkText}><strong>Roast:</strong> {props.roastType} ({props.roastValue}/10)</p>
          <p style={darkText}><strong>Price: </strong>${props.price} per pound</p>
        </div>
      </div>
    </div>
  );
}

CoffeeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  roastType: PropTypes.string,
  roastValue: PropTypes.number,
  price: PropTypes.number,
  coffeeId: PropTypes.string
};

export default CoffeeCard;