import React from "react";

const Banners = () => {
    return (
/*         <div className="container" >
            <div className="row">
                <div className="col-md-8">Banner</div>
            </div>
        </div> */
    <div className="container">
        <div className="row gx-3 mb-5">
            <div className="col-md-6 text-center shadow p-3 rounded">
                <div className="d-flex flex-column h-100">
                <p><img src="images/DSC_0029.jpg" alt="Bowls" className="img-fluid" /></p>
                    <h4>Nueva colección de Bowls</h4>
                    <p>Elegí tu color favorito</p>
                    <p className="mt-auto"><a href="#" target="_blank" className="btn bg-nendo-light">Ver Más</a></p>
                </div>
            </div>
            <div className="col-md-6 text-center shadow p-3 rounded">
                <div className="d-flex flex-column h-100">
                <p><img src="images/DSC_0006.jpg" alt="Preparación" className="img-fluid" /></p>
                    <h4>Conocé nuestro proceso de elaboración</h4>
                    <p>Revisa todo el proceso desde la materia prima hasta la puerta de tu casa</p>
                    <p className="mt-auto"><a href="#" target="_blank" className="btn bg-nendo-light">Ver Más</a></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banners;