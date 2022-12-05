import React from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../utils/products";
import { promise } from "../utils/promise";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const ItemDetailContainer = () => {

    
    const [listItems, setListItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    promise(products)
        .then(res => {
        setLoading(false)
        setListProducts(res)
        })
    }, [])
    return (
            <div className="container">
                {
                loading
                ?
                <Loader />
                :
                <div className="row my-3">
                    <div className="col-md-12">
                        <ItemDetail listItems={listItems} />
                    </div>
                </div>
                }
            </div>
    )
}

export default ItemDetailContainer;