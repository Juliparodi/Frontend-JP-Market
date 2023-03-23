import Button from 'react-bootstrap/Button';
import './navbar.css';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return <nav>
    <h3 className={'navbar navbar-brand'}> Juli - Marketplace </h3>
    <div>
      <Button className={'nav-button'}> Phones </Button>
      <Button className={'nav-button'}> Tablets </Button>
      <Button className={'nav-button'}> Notebooks </Button>
    </div>
    <CartWidget/>
  </nav>
}

export default NavBar
