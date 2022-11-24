import React from "react";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <div className="container bg-nendo" >
            <div className="row">
                <div className="col-md-8">
                    <NavBar />
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;