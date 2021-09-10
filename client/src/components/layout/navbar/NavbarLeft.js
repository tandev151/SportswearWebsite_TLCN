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
    kinds: [{ name: "Puma Ultra" }],
  },
  {
    id: "Minuzo",
    kinds: [],
  },
];

const sizes = [];
const getsizes = () => {
  for (let size = 27; size < 48; size += 0.5) {
    sizes.push(size);
  }
};
getsizes();
const NavbarLeft = () => {
  return (
    <div className="navbar-left">
      <h3 className="navbar-left__heading">Danh mục sản phẩm</h3>
      <ul className="navbar-left-category">
        {categories.map((category) => (
          <li className="navbar-left-category__item">
            <a href="" className="navbar-left-category__item-link">
              {category.name}
            </a>
          </li>
        ))}
        {brands.map((brand) => (
          <li className="navbar-left-category__item">
            <a href="" className="navbar-left-category__item-link">
              Giày đá banh {brand.id}
              {brand.kinds.length !== 0 ? (
                <span className="add">
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
              ) : null}
              <ul className="sub-category">
                {brand.kinds.map((kind) => (
                  <li className="sub-category__item">
                    <a href="" className="sub-category__item-link">
                      {kind.name}
                    </a>
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
      <h3 className="navbar-left__heading">Tìm theo</h3>
      <div className="navbar-left-price">
        <h5 className="navbar-left-price__heading">Giá sản phẩm</h5>
        <div className="navbar-left-price__options">
          <input type="checkbox" name="all" id="all" />
          <label htmlFor="all"> Tất cả </label>
        </div>
        <div className="navbar-left-price__options">
          <input type="checkbox" name="s" id="s" />
          <label htmlFor="s"> Từ 0 ~ ₫1.000.000</label>
        </div>
        <div className="navbar-left-price__options">
          <input type="checkbox" name="m" id="m" />
          <label htmlFor="m"> Từ ₫1.000.000 ~ ₫2.000.000</label>
        </div>
        <div className="navbar-left-price__options">
          <input type="checkbox" name="l" id="l" />
          <label htmlFor="l"> Từ ₫2.000.000 ~ ₫3.000.000</label>
        </div>
        <div className="navbar-left-price__options">
          <input type="checkbox" name="xl" id="xl" />
          <label htmlFor="xl"> Từ ₫3.000.000 trở lên</label>
        </div>
      </div>
      <div className="navbar-left-sizes">
        <h5 className="navbar-left-sizes__heading">Size</h5>
        {sizes.map((size) => (
          <div className="navbar-left-sizes__options">
            <input type="checkbox" name={size} id={size} />
            <label htmlFor={size}> {size}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarLeft;
