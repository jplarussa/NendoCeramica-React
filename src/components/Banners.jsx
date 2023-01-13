import React from "react";
import { Link } from "react-router-dom";

const Banners = () => {
    return (
    <div className="container bg-nendo-mid pb-2">
        <div className="row gx-3 py-4 justify-content-evenly">
            <div className="col-md-4 bg-nendo-green text-center shadow p-3 rounded">
                <div className="d-flex flex-column h-100">
                <p><img src="/images/DSC_0029.jpg" alt="Bowls" className="img-fluid" /></p>
                    <h4>Nueva colección de Bowls</h4>
                    <p>Elegí tu color favorito</p>
                    <p className="mt-auto"><Link to="/category/recipientes" className="btn bg-nendo-light">Ver Más</Link></p>
                </div>
            </div>
            <div className="col-md-4 bg-nendo-green text-center shadow p-3 rounded">
                <div className="d-flex flex-column h-100">
                <p><img src="/images/DSC_0006.jpg" alt="Preparación" className="img-fluid" /></p>
                    <h4>Conocé nuestro proceso de elaboración</h4>
                    <p>Revisa todo el proceso desde la materia prima hasta la puerta de tu casa</p>
                    <p className="mt-auto"><Link to="/proceso" className="btn bg-nendo-light">Ver Más</Link></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banners;