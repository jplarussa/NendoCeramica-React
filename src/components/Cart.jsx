import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContextProvider";

const Cart = () => {
    
    const {cartList, cartTotal, sumTotal, removeItem, clear} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-12 text-center">
                            <div className="alert alert-danger" role="alert">No tienes productos en el Carrito!</div>
                            <Link to={"/"} className="btn bg-nendo-light">Volver a la Página Principal</Link>
                        </div>
                    </div>
                </div>
        )
    }
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={6} className="text-end"><Link onClick={clear} className="btn bg-nendo-light" title={"Vaciar Carrito"}>Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-end">Cantidad</th>
                                <th scope="col" className="text-end">Precio</th>
                                <th scope="col" className="text-end">Subtotal</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.name} width={80} /></td>
                                    <td className="align-middle">{item.name}</td>
                                    <td className="align-middle text-center">{item.qty}</td>
                                    <td className="align-middle text-end">${item.price}</td>
                                    <td className="align-middle text-end">${item.qty * item.price}</td>
                                    <td className="align-middle text-end"><Link onClick={() => {removeItem(item.id)}} title={"Eliminar Producto"}><img src={"/images/trash2.svg"} alt={"Eliminar Producto"} width={28} /></Link></td>
                                </tr>
                                ))
                            }
                            <tr className="bg-nendo">
                                <td colSpan={3}>&nbsp;</td>
                                <td className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-end"><b>${sumTotal()}</b></td>
                                <td className="text-end"><button className="btn bg-nendo-light">Finalizar Compra</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>  
                </div>
            </div>
        </div>
    )

}

export default Cart;