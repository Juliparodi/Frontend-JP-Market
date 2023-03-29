import "./ItemCount.css";
import {useState} from "react";

const ItemCount = ({ item, stock, initial, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    handleAddToCart(item);
  };

  return (
      <div className="item-count-container">
       <div className="item-count">
        <div className="buttons-container" >
          <button className="decrement" onClick={handleDecrement}>-</button>
          <span className="count">{quantity}</span>
          <button className="increment" onClick={handleIncrement}>+</button>
        </div>
        <button className="add" onClick={addToCart} disabled={!stock}>Add to Cart</button>
       </div>
      </div>
      )
};

export default ItemCount;
