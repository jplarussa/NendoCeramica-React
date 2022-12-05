import React from "react";
import { useState } from "react";

    const ItemCount = ({ initial, stock, onAdd }) => {

        const [count, setCount] = useState(initial);

        const addition = () => count < stock && setCount(count + 1);
        const subtraction = () => count > initial && setCount(count - 1);
        const agregar = () => {
            stock > 0  && console.log("Agregaste " + count + " productos al carrito");
        }

    return (
        <div className="d-flex flex-column align-items-center container mt-1">
            <div className="row ">
                <div className="col-md-12 align-items-center text-center">
                    <ul class="list-group list-group-horizontal bg-sucess d-flex align-items-center">
                        <li class="list-group-item list-group-item-success border-0 px-1"><button className="btn bg-nendo-light fw-bold" onClick={subtraction}>-</button></li>
                        <li class="list-group-item fw-bold bg-light text-center border-0 rounded-3 px-3"><span className="user-select-none">{count}</span></li>
                        <li class="list-group-item list-group-item-success border-0 px-1"><button className="btn bg-nendo-light fw-bold" onClick={addition}>+</button></li>
                    </ul>
                </div>
            </div>
            <div className="row pt-1">
            <div className="col-md-12 align-items-center text-center">
                    <button className="btn bg-nendo-light h-100" onClick={agregar}>Agregar</button>
                </div>
            </div>
        </div>
    )
}
export default ItemCount;