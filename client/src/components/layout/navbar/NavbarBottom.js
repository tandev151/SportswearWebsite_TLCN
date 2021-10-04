import React from "react";
import { NavLink } from "react-router-dom";

const NavbarBottom = ({ categories , brands}) => {
  return (
    <div className="navbar-bottom">
      <ul className="navbar-bottom__list">
        <li className="navbar-bottom__list-item">
          <NavLink
            to={`/`}
            className="navbar-bottom__list-item-link"
            title="Trang chủ"
          >
            Trang chủ
          </NavLink>
        </li>

        <li className="navbar-bottom__list-item">
          <NavLink
            to={`/collections/all`}
            className="navbar-bottom__list-item-link"
            title="Tất cả sản phẩm"
          >
            Tất cả sản phẩm
            <span className="arrow-down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            <ul className="category">
              {categories.map((category) => {
                return (
                  <li className="category__item" key={category._id}>
                    <NavLink
                      to={`/collections/category/${category.slug}`}
                      className="category__item-link"
                    >
                      {category.name}
                      {category.children.length > 0 && (
                        <>
                          <span className="arrow-right">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-caret-right-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                          </span>

                          <ul className="sub-category">
                            {category.children.map((child) => {
                              return (
                                <li className="sub-category__item">
                                  <NavLink
                                    to={`/collections/${child.slug}`}
                                    className="sub-category__item-link"
                                  >
                                    {child.name}
                                  </NavLink>
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      )
                      }
                    </NavLink>
                  </li>

                );
              })}
            </ul>
          </NavLink>
        </li>
        <li className="navbar-bottom__list-item">
          <NavLink
            to={`/collections/all`}
            className="navbar-bottom__list-item-link"
            title="Thương hiệu"
          >
            Thương hiệu
            <span className="arrow-down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            <ul className="category">
              {brands.map((brand) => {
                return (
                  <li className="category__item">
                    <NavLink
                      to={`/collections/brand/${brand.slug}`}
                      className="category__item-link"
                    >
                      {brand.name}
                   
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </NavLink>
        </li>
        <li className="navbar-bottom__list-item">
          <NavLink
            to={`/`}
            className="navbar-bottom__list-item-link"
            title="Cách chọn size"
          >
            Cách chọn size
          </NavLink>
        </li>
        <li className="navbar-bottom__list-item">
          <NavLink
            to={``}
            className="navbar-bottom__list-item-link"
            title="Tin tức"
          >
            Tin tức
          </NavLink>
        </li>

        <li className="navbar-bottom__list-item">
          <NavLink
            to={``}
            className="navbar-bottom__list-item-link"
            title="Hệ thống cửa hàng"
          >
            Hệ thống cửa hàng
          </NavLink>
        </li>
        <li className="navbar-bottom__list-item">
          <NavLink
            to={`contact`}
            className="navbar-bottom__list-item-link"
            title="Liên hệ"
          >
            Liên Hệ
          </NavLink>
        </li>
        <li className="navbar-bottom__list-item">
          <NavLink
            to={`/about`}
            className="navbar-bottom__list-item-link"
            title="Về chúng tôi"
          >
            Về chúng tôi
          </NavLink>
        </li>
        <li className="navbar-bottom__list-item">
          <NavLink
            to={``}
            className="navbar-bottom__list-item-link"
            title="SALE OFF"
          >
            Sale off
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarBottom;
