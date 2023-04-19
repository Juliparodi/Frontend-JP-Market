import './navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import {Nav, Navbar} from "react-bootstrap";
import logo from './JP-Market.png'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../context/CartContext";

const NavBar = () => {

  const { handleAddToCart } = useContext(CartContext);

  const isActive = (match) => {
    return match && !match.isExact;
  };

  return <Navbar className={'navbar'} bg="light" expand="lg">
    <Navbar.Brand className="navbar-brand">
      <img src={logo} alt="JP Market" />
    </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-right"></Nav>
      <Nav className="mr-auto">
        <Link to="/" className={isActive ? 'active nav-link' : 'nav-link'}>Home</Link>
        <Link to="/us" className={isActive ? 'active nav-link' : 'nav-link'}> About Us</Link>
        <Link to="/contact" className={isActive ? 'active nav-link' : 'nav-link'}>Contact</Link>
      </Nav>
    </Navbar.Collapse>
    <CartWidget />
  </Navbar>
}

export default NavBar
