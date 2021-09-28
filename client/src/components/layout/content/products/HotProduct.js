import React from "react";
import Slider from "react-slick";
import { HotProductData } from "./HotProductData";
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
              <a href="" className="hot-product__item">
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
                      ₫{new Intl.NumberFormat("de-DE").format(product.oldPrice)}
                    </p>
                    <p className="item-body__price-current">
                      ₫
                      {new Intl.NumberFormat("de-DE").format(
                        product.oldPrice -
                          (product.oldPrice * product.discount) / 100
                      )}
                    </p>
                  </div>
                </div>

                <span className="label-new">New</span>
                <span className="label-discount">{product.discount}%</span>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HotProduct;
