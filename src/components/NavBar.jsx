import React from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (

            <div className="container bg-nendo" >
                <div className="row">
                    <div className="col-md-8">
                        <nav className="navbar navbar-expand-lg bg-nendo">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/"><img src="/images/Logo-3.png" alt="Nendo" width="100"/></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <ul className="navbar-nav">
                                        <li><NavLink className="nav-link" activeclassname="page" to="/">Inicio</NavLink>
                                        </li>
                                        <li className="nav-item dropdown active">
                                            <NavLink className="nav-link dropdown-toggle dropdown-toggle-split" to="/items" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos </NavLink>
                                            <ul className="dropdown-menu" activeclassname="page" aria-labelledby="navbarDropdown">
                                                <li><NavLink className="dropdown-item" activeclassname="page" to="/category/cuencos">Cuencos</NavLink></li>
                                                <li><NavLink className="dropdown-item" activeclassname="page" to="/category/recipientes">Recipientes</NavLink></li>
                                                <li><NavLink className="dropdown-item" activeclassname="page" to="/category/platos">Platos</NavLink></li>
                                            </ul>
                                        </li>
                                        <NavLink className="nav-link" activeclassname="page" to="/sobremi">Sobre Mi</NavLink>
                                        <NavLink className="nav-link" activeclassname="page" to="/contacto">Contacto</NavLink>
                                    </ul>
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