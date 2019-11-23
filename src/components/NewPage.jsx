import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class NewPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this._title = null;
    this._description = null;
    this._roastValue = null;
    this._price = null;
    this.handleAddNewCoffee = this.handleAddNewCoffee.bind(this);
  }

  handleAddNewCoffee(event) {
    event.preventDefault();
    let { roast } = this.form;

    console.log('Title: ', this._title.value)
    console.log('Roast: ', this._roastValue.value);
    console.log('Price: ', this._price.value);
    if (this._title.value) {
      this.props.onNewCoffeeCreation({ 
        title: this._title.value, 
        description: this._description.value, 
        roastType: roast.value,
        roastValue: this._roastValue.value,
        price: this._price.value
      });
      this._title.value = '';
      this._description.value = '';
      this.setState({ redirect: true });
    }
  }

  render() {
    let newParentStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '80px',
      width: '40%'
    };
    let newHeaderText = {
      textAlign: 'center',
      color: '#2c2321',
      fontFamily: 'Libre Franklin, sans-serif',
    };
    let roastText = {
      color: '#2c2321',
      fontFamily: 'Libre Franklin, sans-serif',
    };
    let placeholderText = {
      fontFamily: 'Libre Franklin, sans-serif',
    };
    let newBtnParent = {
      textAlign: 'center',
      marginTop: '20px'
    };
    let newBtnStyle = {
      backgroundColor: '#2c2321',
    };

    return(
      <div style={newParentStyle}>
        {this.state.redirect ? <Redirect to='/' /> : ''}
        <h3 style={newHeaderText}>Add New Java</h3>
        <form 
          onSubmit={this.handleAddNewCoffee}
          ref={form => this.form = form}>

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
              required='required'
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
                <input className='with-gap' name='roast' type='radio' id='light' value='Light' />
                <span style={roastText}>Light</span>
              </label>
            </p>
            <p>
              <label htmlFor='medium'>
                <input className='with-gap' name='roast' type='radio' id='medium' value='Medium' />
                <span style={roastText}>Medium</span>
              </label>
            </p>
            <p>
              <label htmlFor='dark'>
                <input className='with-gap' name='roast' type='radio' id='dark' value='Dark' />
                <span style={roastText}>Dark</span>
              </label>
            </p>
          </div>

          <div className='input-field'>
            {/* <p className='range-field'>
              <input type='range' id='test5' min='1' max='10' />
            </p> */}
            <input
              type='text'
              placeholder='Roast ranking: 1 (lightest) - 10 (darkest)'
              style={placeholderText}
              id='roastValue'
              ref={(input) => { this._roastValue = input; }}
            />
          </div>

          <div className='input-field'>
            <input
              type='text'
              placeholder='Price per pound'
              style={placeholderText}
              id='price'
              ref={(input) => { this._price = input; }}
            />
          </div>

          <div style={newBtnParent}>
            <button type='submit' style={newBtnStyle} className='waves-effect waves-light btn-large'><i className='material-icons right'>local_cafe</i>Add</button>
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