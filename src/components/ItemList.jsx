import React from "react";
import Item from "./Item";

const ItemList = ({ listProducts }) => {

    console.log(listProducts);

    return (
        <div className="container bg-nendo" >
            {listProducts.map(product => <Item />)}
        </div>
    )
}

export default ItemList;