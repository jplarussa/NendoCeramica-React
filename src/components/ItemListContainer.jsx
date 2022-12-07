import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { products } from "../utils/products";
import { promise } from "../utils/promise";


const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams();

  useEffect(() => {
    promise(id ? products.filter(item => item.category === id) : products)
      .then(res => {
        setLoading(false)
        setListProducts(res)
      })
  }, [id])

  return (
    <div className="row mt-3">
      <div className="col-md-12">
        {
          loading
          ?
          <Loader />
          :
          <ItemList listProducts={listProducts} />
        }
      </div>
    </div>
  );
};

export default ItemListContainer;
