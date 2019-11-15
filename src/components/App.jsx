import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
    </div>
  );
}
  
export default App;