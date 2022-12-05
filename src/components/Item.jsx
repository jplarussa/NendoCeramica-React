import React from "react";

const Item = ({ product }) => {

    const { name, image, desc, price } = product
    return (
        <div className="col-md-6 p-3">
            <div className="card p-3">
                <div className="d-flex justify-content-between align-items-center ">
                    <div className="pt-2">
                        <h4 className="text-uppercase">{name}</h4>
                    </div>
                    <div className="img-fluid">
                        <img className="rounded" src={image} width="250" alt="allal"/>
                    </div>
                </div>
                
                <p className="fs-6">{desc}</p>
                <h5 className="text-uppercase mb-0 flex">${price}</h5>
                <button className="btn bg-nendo-light w-50">Ver detalles</button>
            </div>
        </div>
    )
}

export default Item;