import React from "react";

const Error404 = () => {
    return (
        <div className="container bg-nendo min-vh-100" >
            <div className="row px-3 pt-4 d-flex justify-content-center">
                <div className="col-md-8 alert alert-danger w-100 text-center">
                    <h1>ERROR 404!</h1>
                    <h3>Página no encontrada, vuelva al inicio.</h3>
                </div>
            </div>
        </div>
    );
}

export default Error404;