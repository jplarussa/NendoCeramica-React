import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {

    const { id, name, image, desc, price } = product
    return (
        <div className="col-md-6 p-3 ">
            <div className="card p-3 h-100 d-flex align-items-center">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="p-3">
                        <h4 className="text-uppercase">{name}</h4>
                    </div>
                    <div className="img-fluid">
                        <img className="rounded" src={image} width="250" alt={name}/>
                    </div>
                </div>
                <div className="d-flex flex-column  mb-2">
                    <p className="fs-6">{desc}</p>
                    <h5 className="text-uppercase mb-0 flex mb-2">${price}</h5>
                    <Link to={"/item/"+ id}><button type="button" className="btn bg-nendo-light link-dark w-50">Ver detalles</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item;