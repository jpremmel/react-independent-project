import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'jquery';
import { Link } from 'react-router-dom';

function NewPage() {
  var newParentStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '100px',
    width: '40%'
  };
  var newHeaderText = {
    textAlign: 'center',
    color: '#2c2321',
    fontFamily: 'Libre Franklin, sans-serif',
  };
  var newBtnParent = {
    textAlign: 'center',
    marginTop: '20px'
  };
  var newBtnStyle = {
    backgroundColor: '#2c2321',
  };
  var centerText = {
    textAlign: 'center'
  };
  return(
    <div style={newParentStyle}>
      <h3 style={newHeaderText}>Add New Java</h3>
      <form>

        <div className='input-field'>
          <input
            type='text'
            placeholder='Title'
          />
        </div>
        
        <div className='input-field'>
          <input
            type='text'
            placeholder='Description'
          />
        </div>

        <div className="input-field">
            <select>
              <option value="0" disabled defaultValue>Roast</option>
              <option value="1">Light</option>
              <option value="2">Medium</option>
              <option value="3">Dark</option>
            </select>
            <label>Materialize Select</label>
        </div>


        <div style={newBtnParent}>
          <Link to='/' style={newBtnStyle} className="waves-effect waves-light btn-large"><i className="material-icons right">local_cafe</i>Add</Link>
        </div>
      </form>
    </div>
  );
}

export default NewPage;