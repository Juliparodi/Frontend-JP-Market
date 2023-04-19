import './cartWidget.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {Modal} from "react-bootstrap";
import {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";

const CartWidget = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { items } = useContext(CartContext); // Accessing cart items from context

  // Function to handle opening and closing of the modal
  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const renderCartItems = () => {
    if (!items) {
      return null; // If no items in cart, return null
    } else {
      return (
          <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
          </ul>
      );
    }
  };

  return (
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-quantity">{!items ? 0 : items.length}</span>;
        <Modal isOpen={modalIsOpen} onRequestClose={handleModal}>
          <h2>Cart Items</h2>
          {renderCartItems()} {/* Call the renderCartItems function */}
          <button onClick={handleModal}>Close</button>
        </Modal>
      </div>
  )
}

export default CartWidget;
