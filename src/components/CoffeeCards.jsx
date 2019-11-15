import React from 'react';
import CoffeeCard from './CoffeeCard';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

var coffeeCardList = [
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.',
    roastType: 'Light',
    roastValue: 2,
    price: 8
  }
];

function CoffeeCards() {
  var headerText = {
    textAlign: 'center',
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
  };
  return (
    <div className='container'>
      <h3 style={headerText}>Our Coffees</h3>
      <div className='row'>
        {coffeeCardList.map((coffeeCard, index) =>
          <CoffeeCard
            title={coffeeCard.title}
            description={coffeeCard.description} 
            roastType={coffeeCard.roastType}
            roastValue={coffeeCard.roastValue}
            price={coffeeCard.price}
            key={index}
          />
        )}
      </div>
    </div>
  );
}

export default CoffeeCards;