import React from "react";
import Products from "../layout/collections/Products";
import NavbarLeft from "../layout/navbar/NavbarLeft";

const ProductCollection = () => {
  return (
    <div>
      <div className="container">
        <div className="row mgt-20">
          <div className="col-2-4 ">
            <NavbarLeft />
          </div>
          <div className="col-8-4">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
