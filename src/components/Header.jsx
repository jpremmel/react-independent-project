import React from 'react';

function Header() {
  let headerStyle = {
    textAlign: 'center',
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
    fontSize: '60px',
    textShadow: '2px 2px #d4d7dd'
  };
  return(
    <h1 style={headerStyle}>Java House</h1>
  );
}

export default Header;