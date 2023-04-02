import Button from 'react-bootstrap/Button';
import './navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import {Nav, Navbar, NavLink} from "react-bootstrap";

const NavBar = ({ cartItems }) => {
  return <Navbar className={'navbar'} bg="light" expand="lg">
    <Navbar.Brand className="navbar-brand">JP Market</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-right" className="mr-auto"></Nav>
      <NavLink to="/" className={'nav-link nav-button-left'} activeClassName="active">Home</NavLink>
      <NavLink to="/us" className={'nav-link'} activeClassName="active">Us</NavLink>
      <NavLink to="/contact" className={'nav-link'} activeClassName="active">Contact</NavLink>
    </Navbar.Collapse>
    <CartWidget quantity={cartItems.length }/>
  </Navbar>
}

export default NavBar
