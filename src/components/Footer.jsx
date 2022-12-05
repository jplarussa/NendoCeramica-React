import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container bg-nendo" >
            <div className="row p-4">
                <div className="col-md-8 ps-5">
                    <Link to="#"><img src="images/Logo-3.png" alt="Nendo" width="60"/></Link>
                </div>
                <div className="col-md-4 align-item-center">
                    <div className="d-flex justify-content-center">
                        <Link to="#" className="mx-1" target="_blank"><img src="images/instagram.svg" alt="Instagram" width="24" /></Link>
                        <Link to="#" className="mx-1" target="_blank"><img src="images/facebook.svg" alt="Facebook" width="24" /></Link>
                        <Link to="#" className="mx-1" target="_blank"><img src="images/twitter.svg" alt="Twitter" width="24" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;