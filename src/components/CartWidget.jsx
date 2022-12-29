import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

const CartButton = ({total}) => {
    
    return (
        <Link to={"/cart"} className="btn bg-nendo-light position-relative">
            <img src="/images/basket.svg" alt="Carrito" width="36"/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-nendo-dark">{total}</span>
        </Link>
    )
}

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);
    return cartTotal() > 0 ? <CartButton total={cartTotal()} />  : "";
}


export default CartWidget;