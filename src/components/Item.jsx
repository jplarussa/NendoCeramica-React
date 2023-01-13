import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    const { id, name, image, price } = product;
    return (
        <div className="col-md-6 p-3 ">
            <div className="wrapper">
                <div className="containerN">
                    <div className="top" style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "80%",
                        width: "100%",
                        WebkitBackgroundSize: "100%",
                        MozBackgroundSize: "100%",
                        obackgroundSize: "100%",
                        backgroundSize: "cover"
                        }}>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="details">
                                <h4>{name}</h4>
                                <h5>${price}</h5>
                            </div>
                            <div className="buy d-flex align-items-center justify-content-center">
                                <Link to={"/item/"+ id}><button type="button" className="bg-nendo-light border-0"><img className="bg-nendo-light" src="/images/addBasket.svg" alt="Add to basket" width="60"/></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;