import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setCartItems] = useState([]);

  const handleAddToCart = (item, quantity) => {
    let previousItem = items.find((itemExisted) => itemExisted.id === item.id);
    if (previousItem) {
      previousItem.quantity = previousItem.quantity + quantity;
      const updatedCartItems = items.map((cartItem) =>
          cartItem.id === item.id ? previousItem : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      item.quantity = quantity;
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }
  };

  const discountedIds = [2, 4, 8, 11, 16, 18];

  const removeFromCart = (item) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
      <CartContext.Provider value={{ items, handleAddToCart, removeFromCart, clearCart, discountedIds }}>
        {children}
      </CartContext.Provider>
  );
};
