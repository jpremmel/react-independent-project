import React from 'react';
import CoffeeImg from './CoffeeImg';
import LoginButton from './LoginButton';
import CoffeeCards from './CoffeeCards';

function HomePage() {
  return (
    <div>
      <CoffeeImg/>
      <CoffeeCards/>
      <LoginButton/>
    </div>
  );
}

export default HomePage;