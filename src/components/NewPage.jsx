import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class NewPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this._title = null;
    this._description = null;
    this.handleAddingNewCoffee = this.handleAddingNewCoffee.bind(this);
  }

  handleAddingNewCoffee(event) {
    event.preventDefault();
    this.props.onNewCoffeeCreation({ title: this._title.value, description: this._description.value }); //add rest of coffee props
    this._title.value = '';
    this._description.value = '';
    //rest of coffee props
    this.setState({ redirect: true });
  }

  render() {
    const newParentStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '80px',
      width: '40%'
    };
    const newHeaderText = {
      textAlign: 'center',
      color: '#2c2321',
      fontFamily: 'Libre Franklin, sans-serif',
    };
    const roastText = {
      color: '#2c2321',
      fontFamily: 'Libre Franklin, sans-serif',
    };
    const placeholderText = {
      fontFamily: 'Libre Franklin, sans-serif',
    };
    const newBtnParent = {
      textAlign: 'center',
      marginTop: '20px'
    };
    const newBtnStyle = {
      backgroundColor: '#2c2321',
    };

    return(
      <div style={newParentStyle}>
        {this.state.redirect ? <Redirect to='/' /> : ''}
        <h3 style={newHeaderText}>Add New Java</h3>
        <form onSubmit={this.handleAddingNewCoffee}>
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
              id='title'
              ref={(input) => { this._title = input; }}
            />
          </div>
          
          <div className='input-field'>
            <input
              type='text'
              placeholder='Description'
              style={placeholderText}
              id='description'
              ref={(input) => { this._description = input; }}
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
}

NewPage.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewPage;