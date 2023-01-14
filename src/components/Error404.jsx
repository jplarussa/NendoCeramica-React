import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert bg-nendo-light" role="alert">
                        <h1 className="mb-3">ERROR 404!</h1>
                        <p>Página no encontrada, vuelva al inicio.</p>
                    </div>
                    <Link to={"/"} className="btn bg-nendo-light">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    );
}

export default Error404;