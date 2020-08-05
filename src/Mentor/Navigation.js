import React, { useContext } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { CartContext } from './ContextApi';

const Navigation = () => {
  const { state: { cart } } = useContext(CartContext);
  return (
    <div>
      <Navbar variant="primary" expand="lg" className="header">
        <Navbar>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn1.iconfinder.com/data/icons/celebration-color-1/64/open-box-surprise-boxing-day-gift-512.png"
              width="50"
              height="32"
              className="d-inline-block align-top"
            />{' '}{' '}
         Surpr!Ze Guru
      </Navbar.Brand>
        </Navbar>
        <Navbar.Toggle className="bg-secondary" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/Home"><Nav.Link className="btn btn-quaternary" href="#home">Home</Nav.Link></Link>
            <Link to="/Surprises"><Nav.Link className="btn btn-quaternary" href="#Surprise Types">Surprise Types</Nav.Link></Link>
            <Link to="/Gifts"><Nav.Link className="btn btn-quaternary" href="#Gifts">Gifts</Nav.Link></Link>
            <Link to="/About"><Nav.Link className="btn btn-quaternary" href="#About Us">About Us</Nav.Link></Link>
            <Link to="/Contact"><Nav.Link className="btn btn-quaternary" href="#Contact Us">Contact Us</Nav.Link></Link>
            <Link to="/Wishlist"><Nav.Link className="btn btn-quaternary" href="#Cart">Cart({cart.length})</Nav.Link></Link>
            <Link to="/signin"><Nav.Link className="btn btn-quaternary" href="#Sign In">Sign In</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;
