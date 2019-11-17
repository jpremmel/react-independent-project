import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function NewPage() {
  var newParentStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '80px',
    width: '40%'
  };
  var newHeaderText = {
    textAlign: 'center',
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
  };
  var roastText = {
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
  };
  var placeholderText = {
    fontFamily: 'Libre Franklin, sans-serif',
  };
  var newBtnParent = {
    textAlign: 'center',
    marginTop: '20px'
  };
  var newBtnStyle = {
    backgroundColor: '#2c2321',
  };
  return(
    <div style={newParentStyle}>
      <h3 style={newHeaderText}>Add New Java</h3>
      <form>
        <style jsx>{`
            .input-field input[type=text]:focus {
              border-bottom: 1px solid #2c2321;
              box-shadow: 0 1px 0 0 #2c2321;
            }
            [type='radio']:checked + span:after,
              [type='radio'].with-gap:checked + span:before,
              [type='radio'].with-gap:checked + span:after {
                border: 2px solid #2c2321;
              }
              [type='radio']:checked + span:after,
              [type='radio'].with-gap:checked + span:after {
                background-color: #2c2321;
              }
        `}</style>
        <div className='input-field'>
          <input
            type='text'
            placeholder='Title'
            style={placeholderText}
          />
        </div>
        
        <div className='input-field'>
          <input
            type='text'
            placeholder='Description'
            style={placeholderText}
          />
        </div>

        <div className='input-field'>
          <p style={roastText}>Roast:</p>
          <p>
            <label htmlFor='light'>
              <input className='with-gap' name='roast' type='radio' id='light' />
              <span style={roastText}>Light</span>
            </label>
          </p>
          <p>
            <label htmlFor='medium'>
              <input className='with-gap' name='roast' type='radio' id='medium' />
              <span style={roastText}>Medium</span>
            </label>
          </p>
          <p>
            <label htmlFor='dark'>
              <input className='with-gap' name='roast' type='radio' id='dark' />
              <span style={roastText}>Dark</span>
            </label>
          </p>
        </div>


        <div style={newBtnParent}>
          <Link to='/' style={newBtnStyle} className='waves-effect waves-light btn-large'><i className='material-icons right'>local_cafe</i>Add</Link>
        </div>
      </form>
    </div>
  );
}

export default NewPage;