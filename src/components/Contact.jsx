import React from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
    
    const submitEmail = () => {
        Swal.fire ({
            title: `Debes completar todos los datos.`,
            icon: `error`,
            showConfirmButton: false,
            timer: 1500
        });
        <Navigate to="/" />
    }


    return (
        <div className="row mt-3">
            <div className="col-md-12">
                <div className="container bg-nendo-mid pb-2">
                    <div className="container-fluid overflow-hidden">
                        <h1 id="titulo-contacto" className="mb-5">Dejanos tu mensaje!</h1>
                        <form id="forminscrip" method="post" action="" acceptCharset="UTF-8">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="fname">Nombre</label>
                                <input type="text" id="nombrecliente" className="form-control" name="nombrecliente"
                                    placeholder="Satoshi" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="lname">Apellido</label>
                                <input type="text" id="apellidocliente" className="form-control" name="apellidocliente"
                                    placeholder="Nakamoto" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="emailaddr">Email</label>
                                <input type="email" id="emailcliente" className="form-control" name="emailcliente"
                                    placeholder="satoshi.nakamoto@tothemoon.com" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="textarea" className="form-label">Dejenos su mensaje/consulta:</label>
                                <textarea className="form-control" id="mensaje" rows="3"></textarea>
                            </div>
                            <div className="mb-3 text-center mt-5">
                                <button type="submit" className="btn bg-nendo-light btn-md" onClick={submitEmail} name="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;