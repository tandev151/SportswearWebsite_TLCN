import React from "react";
import { ProductData } from "./ProductData";
import { Link } from "react-router-dom";

const checkNewProduct = (createdbyDate) => {
  const sellDate = new Date(createdbyDate);
  const currentDate = new Date();
  // 86.400.000 is the total number of milliseconds in a day
  if (currentDate - sellDate < 86400000 * 10) return true;
  return false;
};
const Products = () => {
  return (
    <div className="products">
      <div className="row">
        <div className="products-banner">
          <img
            className="products-banner__img"
            src={
              require("../../../assets/images/banner/banner-collection.jpg")
                .default
            }
            alt=""
          />
        </div>
        <div className="products-heading">
          <h2 className="products-heading-title">Tất cả sản phẩm</h2>
        </div>
        <div className="products-sort">
          <span className="products-sort__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-grid-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
          </span>
          <div className="products-sort__body">
            <span className="products-sort__body-text">Sắp xếp theo:</span>
            <span className="products-sort__body-select">
              <select name="" id="">
                <option value="price-ascending">Giá: Tăng dần</option>
                <option value="price-descending">Giá: Giảm dần</option>
                <option value="created-descending">Sản phẩm mới nhất</option>
                <option value="created-ascending">Sản phẩm cũ nhất</option>
                <option value="best-selling">Bán chạy nhất</option>
              </select>
            </span>
          </div>
        </div>
        <div className="products-body">
          <div className="row">
            {ProductData.map((product) => (
              <div className="col-3 mgt-25">
                <Link to="" className="product">
                  <div className="product-img">
                    <img src={product.photo} alt="" />

                    <ul className="img-demo">
                      {product.subPhoto.map((photo) => (
                        <li className="img-demo-item">
                          <img src={photo.img} alt="" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-body">
                    <h4 href="" className="product-body__name">
                      {product.name}
                    </h4>
                    <div className="product-body__price">
                      <p className="product-body__price-old">
                        ₫
                        {new Intl.NumberFormat("de-DE").format(
                          product.oldPrice
                        )}
                      </p>
                      <p className="product-body__price-current">
                        ₫
                        {new Intl.NumberFormat("de-DE").format(
                          product.oldPrice -
                            (product.discount / 100) * product.oldPrice
                        )}
                      </p>
                    </div>
                  </div>
                  {checkNewProduct(product.sellDate) === true ? (
                    <span className="label-new">New</span>
                  ) : null}
                  {product.discount > 0 ? (
                    <span className="label-discount">{product.discount}%</span>
                  ) : null}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
