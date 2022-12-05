import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (

            <div className="container bg-nendo" >
                <div className="row">
                    <div className="col-md-8">
                        <nav className="navbar navbar-expand-lg bg-nendo">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/"><img src="images/Logo-3.png" alt="Nendo" width="100"/></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                                        <NavLink className="nav-link" to="/items">Productos</NavLink>
                                        <NavLink className="nav-link" to="#">Sobre Mi</NavLink>
                                        <NavLink className="nav-link" to="#">Contacto</NavLink>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                        <CartWidget />
                    </div>
                </div>
            </div>

    )
}

export default NavBar;