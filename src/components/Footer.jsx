import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container bg-nendo-mid mt-3" >
            <div className="row p-4 align-items-center">
                <div className="col-md-8 ps-5 d-flex align-items-center">
                    <Link to="/"><img src="/images/Logo-3.png" alt="Nendo" width="60"/></Link>
                    <span className="ps-4 fw-bold">Nendo Cerámica</span>
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-center">
                        <a href="https://www.instagram.com/nendo.ceramica/" className="mx-1" target="_blank" rel="noreferrer"><img src="/images/instagram.svg" alt="Instagram" width="24" /></a>
                        <a href="https://www.facebook.com/nendo.ceramica/" className="mx-1" target="_blank" rel="noreferrer"><img src="/images/facebook.svg" alt="Facebook" width="24" /></a>
                        <a href="https://www.youtube.com/nendo.ceramica/" className="mx-1" target="_blank" rel="noreferrer"><img src="/images/twitter.svg" alt="Twitter" width="24" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;