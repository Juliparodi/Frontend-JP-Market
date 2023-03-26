import Button from 'react-bootstrap/Button';
import './navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import {Nav, Navbar} from "react-bootstrap";

const NavBar = ({quantity}) => {
  return <Navbar className={'navbar'} bg="light" expand="lg">
    <Navbar.Brand className="navbar-brand">JP Market</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-right" className="mr-auto"></Nav>
        <Button className={'nav-button nav-button-left'}> Phones </Button>
        <Button className={'nav-button'}> Tablets </Button>
        <Button className={'nav-button'}> Notebooks </Button>
    </Navbar.Collapse>
    <CartWidget quantity={quantity}/>
  </Navbar>
}

export default NavBar
