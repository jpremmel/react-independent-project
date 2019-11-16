import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  var loginParentStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '100px',
    width: '40%'
  };
  var loginText = {
    textAlign: 'center',
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
  };
  var loginBtnParent = {
    textAlign: 'center',
    marginTop: '20px'
  };
  var loginBtnStyle = {
    backgroundColor: '#2c2321',
  };
  return (
    <div style={loginParentStyle}>
      <h3 style={loginText}>Employee log in</h3>
      <form>
        <input
          type='text'
          placeholder='Username or Employee ID'/>
        <input
          type='password'
          placeholder='Password'/>
        <div style={loginBtnParent}>
          <Link to='/new' style={loginBtnStyle} className="waves-effect waves-light btn-large"><i className="material-icons right">chevron_right</i>Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;