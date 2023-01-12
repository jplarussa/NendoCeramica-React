import React, { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom"



const ItemDetail = ({ listItems }) => {
    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(listItems.initial);
    
    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity)
        addItem(listItems, quantity); 
    }

    useEffect(() => {
        setItemStock(listItems.stock)
    }, [listItems]);

    return (
        <div>
            {
            listItems
            ?
            <div className="row bg-nendo mt-2">
                <div className="col-md-4 offset-md-2 mt-3">
                    <img src={listItems.image} alt={listItems.name} className="img-fluid" />
                </div>
                <div className="col-md-4 mt-3">
                    <h1>{listItems.name}</h1>
                    <p>{listItems.desc}</p>
                    <p><b>${listItems.price}</b></p>
                    <ItemCount stock={listItems.stock} onAdd={onAdd} />
                </div>
            </div>
            :
            <div className="container">
                <div className="row my-5">
                    <div className="col text-center">
                        <div className="alert bg-nendo-light" role="alert">
                            <h1 className="mb-3">No existen productos</h1>
                        </div>
                        <Link to={"/"} className="btn bg-nendo-light">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default ItemDetail;