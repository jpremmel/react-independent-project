import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  var loginParentStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '80px',
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
  var placeholderText = {
    fontFamily: 'Libre Franklin, sans-serif',
  };
  return (
    <div style={loginParentStyle}>
      <style jsx>{`
        .input-field input[type=text]:focus {
          border-bottom: 1px solid #2c2321;
          box-shadow: 0 1px 0 0 #2c2321;
        }
        .input-field input[type=password]:focus {
          border-bottom: 1px solid #2c2321;
          box-shadow: 0 1px 0 0 #2c2321;
        }
      `}</style>
      <h3 style={loginText}>Employee log in</h3>
      <form>
        <div className='input-field'>
          <input
            type='text'
            placeholder='Username or Employee ID'
            style={placeholderText}
          />
        </div>
        <div className='input-field'>
          <input
            type='password'
            placeholder='Password'
            style={placeholderText}
          />
        </div>
        <div style={loginBtnParent}>
          <Link to='/new' style={loginBtnStyle} className="waves-effect waves-light btn-large"><i className="material-icons right">chevron_right</i>Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;