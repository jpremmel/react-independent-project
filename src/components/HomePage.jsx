import React from 'react';
import CoffeeImg from './CoffeeImg';
import LoginButton from './LoginButton';
import CoffeeCards from './CoffeeCards';
import TeaCards from './TeaCards';

function HomePage() {
  return (
    <div>
      <CoffeeImg/>
      <CoffeeCards/>
      <TeaCards/>
      <LoginButton/>
    </div>
  );
}

export default HomePage;