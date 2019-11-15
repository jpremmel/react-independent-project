import React from 'react';

function Header() {
  var headerStyle = {
    textAlign: 'center',
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
    fontSize: '60px'
  };
  return(
    <h1 style={headerStyle}>Java House</h1>
  );
}

export default Header;