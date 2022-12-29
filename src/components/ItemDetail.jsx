import React from "react";
import { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContextProvider";

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
        </div>
    )
}

export default ItemDetail;