import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CART_KEY = "techmarket_cart";

export const CartProvider = ({ children }) => {
    const [items, setCartItems] = useState(() => {
        const stored = localStorage.getItem(CART_KEY);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
    }, [items]);

    const handleAddToCart = (item, quantity) => {
        const existing = items.find(i => i.id === item.id);

        if (existing) {
            setCartItems(items.map(i =>
                i.id === item.id
                    ? { ...i, quantity: i.quantity + quantity }
                    : i
            ));
        } else {
            setCartItems([...items, { ...item, quantity }]);
        }
    };

    const removeFromCart = (item) => {
        setCartItems(items.filter(i => i.id !== item.id));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem(CART_KEY);
    };

    const discountedIds = ['2','4','8','11','16','18','6zndGN4JWZFWTfO0uxJ4','KygNO71EAY7gDYsN3V3g','wq6aq3kMD9aGxms3PUpS'];

    return (
        <CartContext.Provider
            value={{
                items,
                handleAddToCart,
                removeFromCart,
                clearCart,
                discountedIds
            }}
        >
            {children}
        </CartContext.Provider>
    );
};