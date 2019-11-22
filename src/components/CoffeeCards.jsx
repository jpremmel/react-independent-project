import React from 'react';
import CoffeeCard from './CoffeeCard';
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// var coffeeCardList = [
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   },
//   {
//     title: 'Delicious Coffee',
//     description: 'This is where a short description of a delicious coffee will go.',
//     roastType: 'Light',
//     roastValue: 2,
//     price: 8
//   }
// ];

function CoffeeCards(props) {
  var headerText = {
    textAlign: 'center',
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
  };
  return (
    <div className='container'>
      <h3 style={headerText}>Our Coffees</h3>
      <div className='row'>
        {Object.keys(props.coffeeList).map((coffeeId) => {
          var coffee = props.coffeeList[coffeeId];
          return <CoffeeCard 
            title={coffee.title}
            description={coffee.description}
            roastType={coffee.roastType}
            roastValue={coffee.roastValue}
            price={coffee.price}
            coffeeId={coffeeId}
            key={coffeeId} 
          />;
        })}
      </div>
    </div>
  );
}

CoffeeCards.propTypes = {
  coffeeList: PropTypes.array
};

export default CoffeeCards;