import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        return cartList.some(x => x.id === id);
    }

    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            let pos = cartList.findIndex(x => x.id === item.id);
            cartList(pos).qty += qty;
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, { ...item, qty: qty }])
        }
    }
    const removeItem = (id) => {
        const filter = cartList.filter(x => x.id !== id)
        setCartList([...filter]);
    }
    const clear = () => {
        setCartList([]);
    }
    const cartTotal = () => {
        return cartList.reduce((total, item) => total += item.qty, 0);
    }
    const sumTotal = () => {
        return cartList.reduce((total, item) => total += (item.qty * item.price), 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, cartTotal, sumTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
