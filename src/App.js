import React, { Component } from 'react';
import "./css/reset.css";
import "./css/App.css";
import "./font/iconfont.css"
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Cart from './components/Cart';
import User from './components/User';
import Details from './components/Details';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/cart" component={Cart} />
          <Route path="/user" component={User} />
          <Route path="/details/:fid" component={Details} />
        </div>
      </Router>
    )
  }
}

export default App;
