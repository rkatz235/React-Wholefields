import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Locations from './Locations/Locations';
import Shop from './Shop/Shop';
import Product from './Shop/Product';
import Faq from './Faq/Faq';
import Cart from './Shop/Cart';
import Footer from './Footer/Footer';
import Logo from './img/wf-logo.png';
import HamMenu from './img/icons/ham-menu.svg';
import $ from 'jquery';


export class App extends Component {

  constructor(){
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  componentDidUpdate(){
    console.log('ye');
  }
  toggleMenu(){
    $(".nav-menu").toggleClass("expand");
  }
  closeMenu(){
    $(".nav-menu").removeClass("expand");
  }
  render(){
    return (
      <div className="App">
        <Router>
          <nav>
              <div className="nav-home">         
                <Link to="/" onClick={this.closeMenu}><img width="120px" height="50px" src={Logo} /></Link>
              </div>
              <div className="nav-menu">
                <Link to="/shop" onClick={this.closeMenu}>Shop</Link>
                <Link to="/about" onClick={this.closeMenu}>About Us</Link>
                <Link to="/locations" onClick={this.closeMenu}>Store Locator</Link>
                <Link to="/faq" onClick={this.closeMenu}>FAQ</Link>

                <Link to="/cart" id="cart-icon"></Link>
              </div>
              <button className="ham-menu" id="ham-btn" onClick={this.toggleMenu}> <img src={HamMenu}/></button>
                
          </nav>
          <Route path="/shop"><Shop /></Route>
          <Route path="/product"><Product /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/locations"><Locations /></Route>
          <Route path="/faq"><Faq /></Route>
          <Route exact path="/"><Home /></Route>
        </Router>
        <Footer />   
      </div>
    );
  }
}

export default App;
