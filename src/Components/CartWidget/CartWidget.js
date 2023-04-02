import './cartWidget.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({quantity}) => {

  return (
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-quantity">{quantity}</span>
      </div>
  )
}

export default CartWidget;
