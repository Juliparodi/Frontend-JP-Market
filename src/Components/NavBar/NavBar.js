import './navbar.css';
import { Badge, Button, Dropdown, Nav, Navbar } from "react-bootstrap";
import logo from './JP-Market.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { images } from './../Item/image'


const NavBar = () => {


  const { items } = useContext(CartContext); // Accessing cart items from context


  const isActive = (match) => {
    return match && !match.isExact;
  };

  return (
      <Navbar className={'navbar'} bg="light" expand="lg">
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
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success" className="dropdown-toggle">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge>{!items ? 0 : items.length}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu className="position-static" style={{ minWidth: 370, right: 0 }}>
            {items.length > 0 ? (
                <>
                  {items.map((item) => (
                      <span className="cart-item" key={item.id}>
                  <img
                      src={images[item.img]}
                      className="cart-item-img"
                      alt={item.name}
                  />
                  <div className="cart-item-detail">
                    <span>{item.name}</span>
                    <span>₹ {item.price}</span>
                  </div>
                </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
            ) : (
                <span style={{ padding: 10, minWidth: 370, right: 0 }}>
              Cart is Empty!
            </span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
  );
}

export default NavBar;
