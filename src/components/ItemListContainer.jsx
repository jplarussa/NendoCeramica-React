import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { products } from "../utils/products";
import { promise } from "../utils/promise";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams();

  useEffect(() => {
    promise(id ? products.filter(item => item.id === parseInt(id)) : products)
      .then(res => {
        setLoading(false)
        setListProducts(res)
      })
  }, [id])

  return (
    <div className="container">
      {
        loading
        ?
        <Loader />
        :
        <div className="row mt-3">
          <div className="col-md-12">
              <div className="d-flex align-items-center alert alert-success text-center p-2 mb-2" role="alert">
                  <ItemCount initial={1} stock={7} onAdd={() => {}} />
              </div>
              <ItemList listProducts={listProducts} />
          </div>
        </div>
      }
    </div>
  );
};

export default ItemListContainer;
