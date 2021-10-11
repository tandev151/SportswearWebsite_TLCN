import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import Layout from "../components/layout/Layout";
import NavbarLeft from "../components/layout/navbar/NavbarLeft";
import ProductItem from "../components/layout/product/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { getProductsBySlug } from "../features/product/productSlice";
import Loading from "../components/layout/loading/Loading";
const Collections = () => {

  let match = useRouteMatch();
  const { type, slug } = match.params;
  const params = { type, slug }
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsBySlug(params));
  }, [params]);
  return (
    //   If user don't login , system will redirect to login page
    // <Redirect to="/login" />
    <Layout>
      {/* <ProductCollection /> */}
      {product.loading && <Loading />}
      <div className="container">
        <div className="row mgt-20">
          <div className="col-2-4 ">
            <NavbarLeft />
          </div>
          <div className="col-8-4">
            <div className="products">
              <div className="row">
                <div className="products-banner">
                  <img
                    className="products-banner__img"
                    src={
                      require("../assets/images/banner/banner-collection.jpg")
                        .default
                    }
                    alt=""
                  />
                </div>
                <div className="products-heading">
                  <h2 className="products-heading-title">{product.title}</h2>
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
                    <span className="products-sort__body-text">
                      Sắp xếp theo:
                    </span>
                    <span className="products-sort__body-select">
                      <select name="" id="">
                        <option value="price-ascending">Giá: Tăng dần</option>
                        <option value="price-descending">Giá: Giảm dần</option>
                        <option value="created-descending">
                          Sản phẩm mới nhất
                        </option>
                        <option value="created-ascending">
                          Sản phẩm cũ nhất
                        </option>
                        <option value="best-selling">Bán chạy nhất</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div className="products-body">
                  <div className="row">
                    {product.products.map((product) => (
                      <div className="col-3 mgt-25">
                        <ProductItem product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Collections;
