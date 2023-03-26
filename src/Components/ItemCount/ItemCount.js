import "./ItemCount.css";
import {useState} from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
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

  const handleAdd = () => {
    onAdd(quantity);
  };

  return (
      <div className="item-count-container">
       <div className="item-count">
        <div className="buttons-container" >
          <button className="decrement" onClick={handleDecrement}>-</button>
          <span className="count">{quantity}</span>
          <button className="increment" onClick={handleIncrement}>+</button>
        </div>
        <button className="add" onClick={handleAdd} disabled={!stock}>Add to Cart</button>
       </div>
      </div>
      )
};

export default ItemCount;
