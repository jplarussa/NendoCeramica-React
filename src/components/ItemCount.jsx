import React from "react";
import { useState } from "react";

    const ItemCount = ({ initial, stock, onAdd }) => {

        const [count, setCount] = useState(initial);

        const addition = () => count < stock && setCount(count + 1);
        const subtraction = () => count > initial && setCount(count - 1);

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12 align-items-center">
                    <button className="btn bg-nendo-light h-100 fw-bold" onClick={subtraction}>-</button>
                    <span className="fw-bold px-3 bg-light">{count}</span>
                    <button className="btn bg-nendo-light fw-bold" onClick={addition}>+</button>
                </div>
            </div>
        </div>
    )
}
export default ItemCount;