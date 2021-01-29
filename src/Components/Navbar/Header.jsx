import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import logo from '../../images/logo.png';
// style
import './Navbar.css';

const Header = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: '50px' }} />
            <Navbar.Brand> BOLTZ</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/about">
                <i className="fas fa-store"></i>
                About
              </Link>
              <Link to="/products">
                <i className="fas fa-tshirt"></i>
                Products
              </Link>
              <Link to="/cart">
                <div className="shopping-icon">
                  <i className="fas fa-shopping-cart">
                    <span>{props.item.cart.length}</span>
                  </i>
                </div>
                Cart
              </Link>
              <Link to="/login">
                <i className="fas fa-user"></i> Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
const mapStateToProps = (state) => ({
  item: state.item,
});
export default connect(mapStateToProps)(Header);
