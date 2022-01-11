import './App.css';
import { Component } from 'react';
import ProductList from './components/ProductList';
import Home from './components/Home';
import Calulator from './components/Calculator';
import DetailedProduct from './components/DetailedProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/product' exact={true} component={ProductList}/>
          <Route path='/calculatemehrwertsteuer' exact={true} component={Calulator}/>
          <Route path='/product/:id' component={DetailedProduct}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
