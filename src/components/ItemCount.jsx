import React from "react";

/* const ItemCount = ({stock, initial, onAdd}) => {
    const stock = {stock};
 */
    const ItemCount = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12 align-items-center">
                    <button className="btn bg-nendo-light h-100">+</button>
                    <input type="number" name="cantidad" id="form1" min="0" value="1" />
                    <button className="btn bg-nendo-light">-</button>
                </div       >
            </div>
        </div>
    )
}

export default ItemCount;