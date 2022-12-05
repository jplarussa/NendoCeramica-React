import React from "react";
import Item from "./Item";

const ItemDetail = ({ listItems }) => {
    return (
        <div>
            <div className="container bg-nendo" >
                <div className="row">
                    {listItems.map(product => <Item key={product.id} product={product} />)}
                </div>
        </div>
        </div>
    )
}

export default ItemDetail;