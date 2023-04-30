import './navbar.css';
import {Badge, Button, Card, Dropdown, Nav, Navbar} from "react-bootstrap";
import logo from './JP-Market.png'
import { Link } from "react-router-dom";
import {useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { images } from './../Item/image'


const NavBar = () => {


  const { items, discountedIds} = useContext(CartContext);

  const [showCartMenu, setShowCartMenu] = useState(false);

  const handleCartMenuToggle = (isOpen) => {
    setShowCartMenu(isOpen);
  };

  const handleGoToCartClick = () => {
    setShowCartMenu(false);
  };

  function getWording(item) {
    return item.quantity === 1 ? `${item.name}` : `${item.name} (${item.quantity})`;
  }

  const isActive = (match) => {
    return match && !match.isExact;
  };

  console.log(showCartMenu)

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
        <Dropdown className={'dropdown'} show={showCartMenu} onToggle={handleCartMenuToggle}>
          <Dropdown.Toggle variant="success" className="dropdown-toggle">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge>{!items ? 0 : items.length}</Badge>
          </Dropdown.Toggle>
          {showCartMenu ? (
              <Dropdown.Menu show={showCartMenu} className="position-static" style={{ minWidth: 370, right: 0 }}>
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
                    <span>{getWording(item)}</span>
                    {discountedIds.includes(parseInt(item.id)) ? (
                        <>
                          <span className="original-price">${(item.price * item.quantity).toFixed(2)}</span>
                          <span className="discounted-price">${((item.price - (item.price * 0.10)) * item.quantity).toFixed(2)}</span>
                        </>
                    ) : (
                        <span>₹ ${(item.price * item.quantity).toFixed(2)}</span>
                    )}
                  </div>
                </span>
                      ))}
                      <Link to="/cart" onClick={handleGoToCartClick}>
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
          ) : null}
        </Dropdown>
      </Navbar>
  );
}

export default NavBar;
