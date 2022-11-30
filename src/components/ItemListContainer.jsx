import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { products } from "../utils/products";
import { promise } from "../utils/promise";
import { useState, useEffect } from "react";


const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([])
  useEffect(() => {
    promise(products)
      .then(res => {
        setListProducts(res)
      })
  }, [])

  /* console.log(listProducts) */

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-12">
            <div className="alert alert-success text-center" role="alert">
                <ItemCount initial={1} stock={7} onAdd={() => {}} />
            </div>
            <ItemList ListProducts={listProducts} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
