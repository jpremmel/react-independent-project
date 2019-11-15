import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function LoginButton() {
  var loginBtnParent = {
    textAlign: 'center',
    marginTop: '25px',
    marginBottom: '25px',
  };
  var loginBtnChild = {
    backgroundColor: '#2c2321'
  };
  return (
    <div style={loginBtnParent}>
      <Link to='/login' style={loginBtnChild} className="waves-effect waves-light btn-large"><i className="material-icons right">account_circle</i>Employee Login</Link>
    </div>
  );
}

export default LoginButton;