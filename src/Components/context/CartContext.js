import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
      <CartContext.Provider value={{ items, handleAddToCart }}>
        {children}
      </CartContext.Provider>
  );
};
