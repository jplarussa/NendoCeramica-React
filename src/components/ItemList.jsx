import React from "react";
import Item from "./Item";

const ItemList = ({ listProducts }) => {


    return (
        <div className="container bg-nendo" >
            <div className="row">
                    {listProducts.map(product => <Item key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default ItemList;