import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ItemList from "./ItemList";
import Banners from "./Banners";
import { collection, getFirestore, getDocs, where, query, writeBatch, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");
    setLoading(true);

      // Check if an id Param is received to filter products by category 
    const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
    getDocs(q).then(async snapShot => {
      // Check if there are no products.
      if (snapShot.size === 0) {
        Swal.fire({
          title: `No hay productos`,
          icon: `info`,
          showConfirmButton: false,
          timer: 1500
        });
        setLoading(false);
      }else{
        //Only first run of ItemListContainer, check if a product have stock = 0, and add 5 units.
        let products = snapShot.docs.map(product => ({id:product.id, ...product.data()}));
        if(isFirstLoad){
          const batch = writeBatch(db);
          products.forEach(async product => {
            if(product.stock === 0){
              const itemRef = doc(db, "products", product.id);
              batch.update(itemRef, { stock: 5 });
            }
          });
          await batch.commit();
          setIsFirstLoad(false);
        }
        setListProducts(products);
        setLoading(false);
      }
    });
  }, [id,isFirstLoad]);


  

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
