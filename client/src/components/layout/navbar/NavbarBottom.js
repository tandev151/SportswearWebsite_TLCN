import React from "react";

const categories = [
  {
    name: "Giày cỏ tự nhiên",
  },
  {
    name: "Giày cỏ nhân tạo",
  },
  {
    name: "Giày futsal",
  },
];

const brands = [
  {
    id: "Nike",
    kinds: [
      { name: "Nike Mercurial" },
      { name: "Nike Phantom" },
      { name: "Nike Tiempo" },
    ],
  },
  {
    id: "Adidas",
    kinds: [
      { name: "Adidas X" },
      { name: "Adidas Predator" },
      { name: "Adidas Copa" },
      { name: "Adidas Nemeziz" },
    ],
  },
  {
    id: "Puma",
    kinds: [],
  },
];
const NavbarBottom = () => {
  return (
    <div className="navbar-bottom">
      <ul className="navbar-bottom__list">
        <li className="navbar-bottom__list-item">
          <a
            href="/"
            className="navbar-bottom__list-item-link"
            title="Trang chủ"
          >
            Trang chủ
          </a>
        </li>

        <li className="navbar-bottom__list-item">
          <a
            href="/collections"
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
                  <li className="category__item">
                    <a href="" className="category__item-link">
                      {category.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </a>
        </li>
        <li className="navbar-bottom__list-item">
          <a
            href=""
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
                    <a href="" className="category__item-link">
                      {brand.id}
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
                        {brand.kinds.map((kind) => {
                          return (
                            <li className="sub-category__item">
                              <a href="" className="sub-category__item-link">
                                {kind.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </a>
                  </li>
                );
              })}
            </ul>
          </a>
        </li>
        <li className="navbar-bottom__list-item">
          <a
            href=""
            className="navbar-bottom__list-item-link"
            title="Cách chọn size"
          >
            Cách chọn size
          </a>
        </li>
        <li className="navbar-bottom__list-item">
          <a href="" className="navbar-bottom__list-item-link" title="Tin tức">
            Tin tức
          </a>
        </li>

        <li className="navbar-bottom__list-item">
          <a
            href=""
            className="navbar-bottom__list-item-link"
            title="Hệ thống cửa hàng"
          >
            Hệ thống cửa hàng
          </a>
        </li>
        <li className="navbar-bottom__list-item">
          <a href="" className="navbar-bottom__list-item-link" title="Liên hệ">
            Liên Hệ
          </a>
        </li>
        <li className="navbar-bottom__list-item">
          <a
            href=""
            className="navbar-bottom__list-item-link"
            title="Về chúng tôi"
          >
            Về chúng tôi
          </a>
        </li>
        <li className="navbar-bottom__list-item">
          <a href="" className="navbar-bottom__list-item-link" title="SALE OFF">
            Sale off
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarBottom;
