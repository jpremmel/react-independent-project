import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NewPage from './NewPage';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCoffeeList: {}
    };
  };

  handleAddingNewCoffee(newCoffee){
    let newCoffeeId = v4();
    let copyCoffeeList = Object.assign({}, this.state.masterCoffeeList, {
      [newCoffeeId]: newCoffee
    });
    this.setState({ masterCoffeeList: copyCoffeeList });
  }

  render () {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <HomePage
            coffeeList={this.state.masterCoffeeList} />}/>
          <Route path='/login' component={LoginPage} />
          <Route path='/new' redner={() => <NewPage
            onNewCoffeeCreation={this.handleAddingNewCoffee} />}/>
        </Switch>
      </div>
    );

  }
}
  
export default App;