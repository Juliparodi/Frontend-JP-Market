import './navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import {Nav, Navbar} from "react-bootstrap";
import logo from './JP-Market.png'
import {Link} from "react-router-dom";

const NavBar = ({ cartItems }) => {

  const isActive = (match, location) => {
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
    <CartWidget quantity={cartItems.length }/>
  </Navbar>
}

export default NavBar
