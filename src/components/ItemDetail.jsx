import React, { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";



const ItemDetail = ({ listItems }) => {
    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(listItems.stock);
    
    const onAdd = (quantity) => {
            setItemStock(itemStock - quantity)
            addItem(listItems, quantity);
    }

    useEffect(() => {
        setItemStock(listItems.stock)
    }, [listItems]);

    if (itemStock === 0) {
        Swal.fire({
            title: "Producto sin stock",
            icon: `info`,
            showConfirmButton: false,
            timer: 1500
        });
} 

    return (
        <div>
            {
            listItems
            ?
            <div className="row bg-nendo p-5">
                <div className="col-md-6">
                    <img src={listItems.image} alt={listItems.name} className="img-fluid" />
                </div>
                <div className="col-md-6 ps-5">
                    <p className="fs-6 text pb-1">Categoría: <span style={{textTransform:'capitalize'}}>{listItems.category}</span></p>
                    <h1>{listItems.name}</h1>
                    <p className="fs-6 text">{listItems.desc}</p>
                    <p><b>${listItems.price}</b></p>
                    {itemStock !==0 ? <ItemCount stock={listItems.stock} onAdd={onAdd}/> : <h6 className="alert alert-danger p-1 w-50 text-center">Sin Stock</h6> } 
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