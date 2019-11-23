import React from 'react';
import CoffeeCard from './CoffeeCard';
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types';

function CoffeeCards(props) {

  let headerText = {
    textAlign: 'center',
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
  };

  let header = '';
  if (Object.entries(props.coffeeList).length != 0){
    header = <h3 style={headerText}>Our Coffees</h3>;
  }

  return (
    <div className='container'>
      {header}
      <div className='row'>
        {Object.keys(props.coffeeList).map((coffeeId) => {
          let coffee = props.coffeeList[coffeeId];
          return <CoffeeCard 
            title={coffee.title}
            description={coffee.description}
            roastType={coffee.roastType}
            roastValue={coffee.roastValue}
            price={coffee.price}
            coffeeId={coffeeId}
            key={coffeeId} 
            onDeletingCoffee={props.onDeletingCoffee}
          />;
        })}
      </div>
    </div>
  );
}

CoffeeCards.propTypes = {
  coffeeList: PropTypes.object,
  onDeletingCoffee: PropTypes.func
};

export default CoffeeCards;