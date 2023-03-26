import './cartWidget.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({quantity}) => {

  return (
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} />
        {quantity}
      </div>
  )
}

export default CartWidget;
