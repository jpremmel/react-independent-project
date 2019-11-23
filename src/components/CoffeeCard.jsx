import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function CoffeeCard(props) {

  let cardStyle = {
    backgroundColor: '#caad8c'
  };
  if (props.roastType == 'Light') {
    cardStyle = {
      backgroundColor: '#f5e9d6'
    };
  } else if (props.roastType == 'Dark') {
    cardStyle = {
      backgroundColor: '#9f602d'
    };
  }

  let roast = '';
  if (props.roastValue) {
    roast = <p style={darkText}><strong>Roast:</strong> {props.roastType} ({props.roastValue}/10)</p>;
  } else if (props.roastType) {
    roast = <p style={darkText}><strong>Roast:</strong> {props.roastType}</p>;
  }

  let price = '';
  if (props.price) {
    price = <p style={darkText}><strong>Price: </strong>${props.price} per pound</p>;
  }
  
  let titleStyle = {
    textAlign: 'center',
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
  };
  let darkText = {
    color: '#2c2321'
  };
  return (
    <div className="col s12 m6 l4">
      <div className="card darken-1" style={cardStyle}>
        <div className="card-content">
          <span className="card-title" style={titleStyle}>{props.title}</span>
          <p style={darkText}>{props.description}</p>
          {roast}
          {price}
        </div>
      </div>
    </div>
  );
}

CoffeeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  roastType: PropTypes.string,
  roastValue: PropTypes.string,
  price: PropTypes.string,
  coffeeId: PropTypes.string
};

export default CoffeeCard;