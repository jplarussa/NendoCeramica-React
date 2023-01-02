import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

    const ItemCount = ({ stock, onAdd }) => {

        const [count, setCount] = useState(1);
        const [itemStock, setItemStock] = useState(stock);
        const [isPurchased, setIsPurchased] = useState(false);

        const addition = () => count < itemStock && setCount(count + 1);
        const subtraction = () => count > 1 && setCount(count - 1);


        const addToCart = (quantity) => {
            if (count <= itemStock) {
                setCount(1);
                setItemStock(itemStock - quantity)
                setIsPurchased(true)
                onAdd(quantity)
            }
        } 

        useEffect(() => {
            setItemStock(stock);
        }, [stock])

    return (
        <div className="d-flex flex-column align-items-center container mt-1">
            <div className="row ">
                <div className="col-md-12 align-items-center text-center">
                    <ul className="list-group list-group-horizontal bg-sucess d-flex align-items-center">
                        <li className="list-group-item list-group-item-success border-0 px-1"><button className="btn bg-nendo-light fw-bold" onClick={subtraction}>-</button></li>
                        <li className="list-group-item fw-bold bg-light text-center border-0 rounded-3 px-3"><span className="user-select-none">{count}</span></li>
                        <li className="list-group-item list-group-item-success border-0 px-1"><button className="btn bg-nendo-light fw-bold" onClick={addition}>+</button></li>
                    </ul>
                </div>
            </div>
            <div className="row pt-1">
            <div className="col-md-12 align-items-center text-center">
                    {isPurchased ? <Link to={"/cart"} className="btn bg-nendo-light h-100">Terminar mi compra</Link> : <button className="btn bg-nendo-light h-100" onClick={() => {addToCart(count)}}>Agregar</button>}
                </div>
            </div>
        </div>
    )
}
export default ItemCount;