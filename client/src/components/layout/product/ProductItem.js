import React from "react";
import { Link } from "react-router-dom";
const product = {
  image: require("../../../assets/images/products/adidas/a1.jpg").default,
  name: "Mercurial Superfly 6 ACA TF",
  oldPrice: 3500000,
  // currentPrice: this.oldPrice - (this.oldPrice * this.discount) / 100,
  discount: 10,
  descriptionImage: [
    {
      img: require("../../../assets/images/products/adidas/a11.jpg").default,
    },
    {
      img: require("../../../assets/images/products/adidas/a12.jpg").default,
    },
    {
      img: require("../../../assets/images/products/adidas/a13.jpg").default,
    },
    {
      img: require("../../../assets/images/products/adidas/a14.jpg").default,
    },
  ],
};
const ProductItem = () => {
  return (
    <Link to="/product" className="hot-product__item">
      <div className="hot-product__item-img">
        <img className="item-img" src={product.image} alt="" />
        <ul className="sub-img">
          {product.descriptionImage.map((item) => {
            return (
              <li className="sub-img__item">
                <img src={item.img} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="item-body">
        <h4 className="item-body__name">{product.name}</h4>
        <div className="item-body__price">
          <p className="item-body__price-old">
            ₫{new Intl.NumberFormat("de-DE").format(1400000)}
          </p>
          <p className="item-body__price-current">
            ₫{new Intl.NumberFormat("de-DE").format(1000000)}
          </p>
        </div>
      </div>

      <span className="label-new">New</span>
      <span className="label-discount">{product.discount}%</span>
    </Link>
  );
};

export default ProductItem;
