import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ listItems }) => {

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
                    <ItemCount stock={listItems.stock} initial={listItems.initial} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;