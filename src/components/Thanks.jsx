import React from "react";
import { useParams, Link } from "react-router-dom";

const Thanks = () => {
    const {id} = useParams();

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert bg-nendo-light" role="alert">
                        <h1 className="mb-3">Gracias por tu Compra!</h1>
                        <p>Tu Número de Orden es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn bg-nendo-light">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Thanks;