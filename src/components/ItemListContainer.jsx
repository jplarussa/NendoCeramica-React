import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ItemList from "./ItemList";
import Banners from "./Banners";
import { collection, getFirestore, getDocs, where, query } from "firebase/firestore"

const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams();


  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");

    // Check if an id Param is received to filter products by category 
    const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
    getDocs(q).then((snapShot) => {
      if (snapShot.size === 0) {
        console.log("No hay productos");
        setLoading(false);
      } else {
        setListProducts(snapShot.docs.map((product) => ({id:product.id, ...product.data()})))
        setLoading(false);
      }
    });
  }, [id]);

  return (
    <div>
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
      <div className="row mt-3">
        <div className="col-md-12">
          <Banners />
        </div>
      </div>  
    </div>
  );
};

export default ItemListContainer;
