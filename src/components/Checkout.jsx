import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContextProvider";

const Checkout = () => {

    const {cartList, sumTotal, clear} = useContext(CartContext);
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generateOrder = () => {
        const fecha = new Date();
        const order = {
            buyer:{name:name, telephone:telephone, email:email},
            items: cartList.map(item => (
                {id:item.id, title:item.name, quantity:item.qty, price:item.price, subtotal:item.qty * item.price}
            )),
            total:sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const generatedOrder = doc(db, "orders", snapShot.id); //Selecciono la Orden a modificar
            updateDoc(generatedOrder, {total:order.total * 1.21}); //Actualiza la Orden Generada aplicando un 21% al valor total
            clear();
        });

    }
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="name" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => {setName(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="telephone" className="form-label">Teléfono:</label>
                            <input type="number" className="form-control" id="telephone" placeholder="Ingrese su Teléfono" onInput={(e) => {setTelephone(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <button type="button" className="btn bg-nendo-light" onClick={generateOrder}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">                                
                    <tbody>
                            {cartList.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width={80} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle text-center">{item.qty}</td>
                                    <td className="align-middle text-end">${item.price}</td>
                                    <td className="align-middle text-end">${item.qty * item.price}</td>
                                </tr>
                                ))
                            }
                            <tr className="bg-nendo">
                                <td colSpan={3}>&nbsp;</td>
                                <td className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-end"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <div className="bg-nendo-light p-4 mb-3" role="alert">La Orden generada es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;