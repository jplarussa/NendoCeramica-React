import React from "react";

const CartWidget = () => {
    return (
        <div className="d-flex align-items-center px-4">
            <button type="button" className="btn bg-nendo-light position-relative">
            <img src="images/basket.svg" alt="Carrito" width="40"/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-nendo-dark">1</span>
            </button>
        </div>
    )
}

export default CartWidget;