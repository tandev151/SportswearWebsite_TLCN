import React from "react";
import { Link } from "react-router-dom";
const NavbarTop = () => {
  return (
    <div className="navbar-top">
      <div className="navbar-top__logo">
        <a href="" className="navbar-top__logo-link">
          Double T Sport
        </a>
      </div>
      <button className="navbar-top__search">
        <input
          className="navbar-top__search-input"
          placeholder="Tìm kiếm ..."
        ></input>
        <div className="navbar-top__search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </button>
      <div className="navbar-top__user">
        {/* navbar-top__user-info--define : define
        navbar-top__user-info--undefine : undefine */}
        <div className="navbar-top__user-info navbar-top__user-info--undefine">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          <div className="navbar-top__user-info-box">
            <ul className="list">
              <li className="box-item">
                <a href="/login" className="link">
                  Đăng nhập
                </a>
              </li>
              <li className="box-item">
                <a href="/register" className="link">
                  Đăng ký
                </a>
              </li>
              <li className="box-item">
                <a href="" className="link">
                  Tra cứu đơn hàng
                </a>
              </li>
            </ul>
            <ul className="list">
              <li className="box-item">
                <a href="" className="link">
                  Tài khoản: Lê Đức Tân
                </a>
              </li>
              <li className="box-item">
                <a href="" className="link">
                  Đăng xuất
                </a>
              </li>
              <li className="box-item">
                <a href="" className="link">
                  Tra cứu đơn hàng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-top__user-cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <span className="quantity">0</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
