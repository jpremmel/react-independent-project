import React from 'react';
import Coffee from '../assets/images/coffee.jpg';

function CoffeeImg() {
  let imgStyle ={
    backgroundImage: `url(${Coffee})`,
    backgroundAttachment: 'fixed',
    height: '800px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  return (
    <div style={imgStyle}></div>
  );
}

export default CoffeeImg;