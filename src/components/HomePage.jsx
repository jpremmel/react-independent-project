import React from 'react';
import CoffeeImg from './CoffeeImg';
import LoginButton from './LoginButton';
import CoffeeCards from './CoffeeCards';
import PropTypes from 'prop-types';

function HomePage(props) {
  return (
    <div>
      <CoffeeImg/>
      <CoffeeCards 
        coffeeList={props.coffeeList}
        onDeletingCoffee={props.onDeletingCoffee}/>
      <LoginButton/>
    </div>
  );
}

HomePage.propTypes = {
  coffeeList: PropTypes.object,
  onDeletingCoffee: PropTypes.func
};

export default HomePage;