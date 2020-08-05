import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './Mentor/Navigation';
import Footer from './Mentor/Footer';
import Home from './Mentor/Home';
import Surprises from './Mentor/Surprises';
import Calender from './Mentor/Calender';
import Gifts from './Mentor/Gifts';
import About from './Mentor/About';
import Contact from './Mentor/Contact';
import Wishlist from './Mentor/Wishlist';
import Explore from './Mentor/Explore';
import LoginPage from './Mentor/LoginPage';


function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/Surprises" component={Surprises}></Route>
      <Route exact path="/Calender" component={Calender}></Route>
      <Route exact path="/Submit" component={Home}></Route>
      <Route exact path="/Gifts" component={Gifts}></Route>
      <Route exact path="/About" component={About}></Route>
      <Route exact path="/Contact" component={Contact}></Route>
      <Route exact path="/Wishlist" component={Wishlist}></Route>
      <Route exact path="/Explore" component={Explore}></Route>
      <Route exact path="/signin" component={LoginPage}></Route>
      <Footer></Footer>

    </div>
  );
}

export default App;
