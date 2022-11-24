import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-12">
            <div className="alert alert-success text-center" role="alert">
                {greeting}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
