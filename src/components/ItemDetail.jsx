import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom"



const ItemDetail = ({ listItems }) => {
    const {addItem} = useContext(CartContext);
    
    const onAdd = (quantity) => {
            addItem(listItems, quantity);
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
                    <p>Stock: {listItems.stock}</p>
                    <ItemCount stock={listItems.stock} onAdd={onAdd}/>
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