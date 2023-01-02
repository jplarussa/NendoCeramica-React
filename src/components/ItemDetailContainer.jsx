import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = () => {

    const [listItems, setListItems] = useState([])
    const {id} = useParams();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    
        const db = getFirestore();
        const products = doc(db, "products", id);
        getDoc(products).then((snapshot) => {
            if (snapshot.exists()) {
                setListItems({id:snapshot.id, ...snapshot.data()});
            } else {
                console.log("No está");
            }
        });
    }, []);

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