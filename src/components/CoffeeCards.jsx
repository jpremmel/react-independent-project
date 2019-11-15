import React from 'react';
import CoffeeCard from './CoffeeCard';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

var coffeeCardList = [
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.'
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.'
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.'
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.'
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.'
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.'
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.'
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.'
  },
  {
    title: 'Delicious Coffee',
    description: 'This is where a short description of a delicious coffee will go.'
  }
];

function CoffeeCards() {
  return (
    <div className='container'>
      <div className='row'>
        {coffeeCardList.map((coffeeCard, index) =>
          <CoffeeCard
            title={coffeeCard.title}
            description={coffeeCard.description} 
            key={index}
          />
        )}
      </div>
    </div>
  );
}

export default CoffeeCards;