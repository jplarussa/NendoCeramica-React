import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ItemDetail from "./ItemDetail";
import { products } from "../utils/products";
import { promise } from "../utils/promise";

const ItemDetailContainer = () => {

    const [listItems, setListItems] = useState([])
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    promise(products)
        .then(res => {
            setLoading(false)
            setListItems(res.find(item => item.id === parseInt(id)))
        })
    }, [id]);

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