import React, {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext";

const Cart = () => {

  const { items } = useContext(CartContext);
  const { removeFromCart, clearCart } = useContext(CartContext);


  const getTotalItems = () => {
    return items.length;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const item of items) {
      totalPrice += item.price;
    }
    return totalPrice;
  };

  return (
      <div>
        <h2>Cart</h2>
        {items.length === 0 ? (
            <p>Cart is empty</p>
        ) : (
            <ul>
              {items.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price}
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                  </li>
              ))}
            </ul>
        )}
        <p>Total Items: {getTotalItems()}</p>
        <p>Total Price: ${getTotalPrice()}</p>
        <button onClick={() => clearCart()}>Clear Cart</button>
      </div>
  );
};

export default Cart;
