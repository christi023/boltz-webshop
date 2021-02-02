import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './Components/Navbar/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Details from './Components/Details/Details';
import Cart from './Components/Cart/Cart';
import Register from './Components/Register_Login/Register';
import Login from './Components/Register_Login/Login';

// style
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/details/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
