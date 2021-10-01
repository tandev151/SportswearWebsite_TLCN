import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { HotProductData } from "./HotProductData";
import ProductItem from "../../product/ProductItem";
const HotProduct = () => {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adapterHeight: true,
    focusOnSelect: true,
  };
  return (
    <div className="hot-product mgb-45">
      <h3 className="hot-product__heading ">Sản phẩm hot</h3>

      <Slider {...settings}>
        {HotProductData.map((product) => {
          return (
            <div className="col-2-4">
              <ProductItem />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HotProduct;
