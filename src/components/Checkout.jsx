import { addDoc, collection, getFirestore, writeBatch, doc, getDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import Swal from "sweetalert2";

const Checkout = () => {

    const {cartList, sumTotal, clear} = useContext(CartContext);
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [orderId, setOrderId] = useState("");

    function isValidEmail(mail) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return re.test(mail);
    }

    const validate = (e) => {
        e.preventDefault()
        if (!name || !telephone || !email) {
            Swal.fire ({
                title: `Debes completar todos los datos.`,
                icon: `error`,
                showConfirmButton: false,
                timer: 1500
            });
        } else if (email !== emailConfirm) {
            Swal.fire ({
                title: `El email no coincide, revisar por favor.`,
                icon: `error`,
                showConfirmButton: false,
                timer: 1500
            });
        } else if (!isValidEmail(email)) {
            Swal.fire ({
                title: `El email no es valido`,
                icon: `error`,
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire ({
                title: `Los datos son válidos`,
                icon: `success`,
                showConfirmButton: false,
                timer: 1500
            });
            generateOrder();
        }
    }

    const generateOrder = async () => {
        const db = getFirestore();
        const orderItems = [];
        const batch = writeBatch(db);
    
        // Get current stock levels for each item in the cart
        for (let item of cartList) {
            const itemRef = doc(db, "products", item.id);
            const itemDoc = await getDoc(itemRef);
            if (!itemDoc.exists) {
                Swal.fire({
                    title: `No existe ese item`,
                    icon: `error`,
                    showConfirmButton: false,
                    timer: 1500
                });
                return;
            }
            let stock = itemDoc.data().stock;
            if (stock < item.qty) {
                Swal.fire({
                    title: `No hay stock suficiente para: ${item.name}`,
                    icon: `error`,
                    showConfirmButton: false,
                    timer: 1500
                });
                return;
            }
            //update stock
            orderItems.push({ id: item.id, title: item.name, quantity: item.qty, price: item.price, subtotal: item.qty * item.price });
            batch.update(itemRef, { stock: stock - item.qty });
        }
        // Execute batch update
        batch.commit();
        //create order
        const fecha = new Date();
        const order = {
            buyer: { name: name, telephone: telephone, email: email },
            items: orderItems,
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        }
    
        const ordersCollection = collection(db, "orders");
        await addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear();
        });
    }

/*     const generateOrder = async () => {

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
        await addDoc(ordersCollection, order).then((snapShot) => {
            
            setOrderId(snapShot.id);
            const batch = writeBatch(db);
            
            cartList.forEach(item => {
                const producto = doc(db, "products", item.id);
                getDoc(producto).then((product) => {
                    batch.update(producto, {stock: product.data().stock - item.qty});
                });
            });
            batch.commit();

            clear();
        });

    } */

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" value={name} placeholder="Ingrese su Nombre" onInput={(e) => {setName(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telephone" className="form-label">Teléfono:</label>
                            <input type="number" className="form-control" value={telephone} id="telephone" placeholder="Ingrese su Teléfono" onInput={(e) => {setTelephone(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmMail" className="form-label">Confirma tu Email</label>
                            <input type="email" className="form-control" value={emailConfirm} id="confirmEmail" placeholder="Ingrese de nuevo su Email" onInput={(e) => {setEmailConfirm(e.target.value)}} />
                        </div>
                        <button type="button" className="btn bg-nendo-light" onClick={validate}>Generar Orden</button>
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
                    {orderId !== "" ? <Navigate to={"/thanks/"+ orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;
