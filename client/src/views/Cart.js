import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import Policy from "../components/layout/content/policy/Policy";
import Footer from "../components/layout/footer/Footer";
const Cart = () => {
  const [cartData, setCartData] = useState([
    {
      id: 1,
      image: require("../assets/images/products/adidas/a2.jpg").default,
      name: `adidas X Speedflow .1 TF Meteorite - Red/Core
      Black/Solar Red`,
      size: 43,
      quantity: 1,
      price: 1490000,
    },
    {
      id: 2,
      image: require("../assets/images/products/adidas/a2.jpg").default,
      name: `adidas X Speedflow .1 TF Meteorite - Red/Core
      Black/Solar Red`,
      size: 43.5,
      quantity: 1,
      price: 1490000,
    },
    {
      id: 3,
      image: require("../assets/images/products/adidas/a2.jpg").default,
      name: `adidas X Speedflow .1 TF Meteorite - Red/Core
      Black/Solar Red`,
      size: 42,
      quantity: 3,
      price: 1490000,
    },
  ]);

  const totalPrice = cartData.reduce((total, priceItem) => {
    total += priceItem.price * priceItem.quantity;
    return total;
  }, 0);
  function removeProduct(id) {
    setCartData((prevCarts) => {
      return prevCarts.filter((item) => item.id !== id);
    });
  }

  return (
    <div>
      <Navbar />
      <Header />
      {/* <CartContainer /> */}
      <div className="cart">
        <div className="container">
          {cartData.length === 0 ? (
            <div className="cart-empty">
              <h3> Không có sản phẩm !!!</h3>
              <Link to="/" className="btn back-home">
                Mua ngay
              </Link>
            </div>
          ) : (
            <div className="row  mgb-45">
              <div className="col-12">
                <div className="cart-wrapper">
                  <div className="cart-header">
                    <h3>Giỏ hàng</h3>
                  </div>
                  <form action="" className="cart-form">
                    <table className="cart-form-table">
                      <thead>
                        <tr>
                          <th className="image"></th>
                          <th className="name">Tên sản phẩm</th>
                          <th className="quantity">Số lượng</th>
                          <th className="price">Giá tiền</th>
                          <th className="remove"></th>
                        </tr>
                      </thead>
                    </table>
                    <div className="scroll-table">
                      <table className="cart-form-table">
                        <tbody>
                          {cartData.map((item) => (
                            <tr>
                              <td className="image">
                                <Link to="#" className="image-link">
                                  <img src={item.image} alt="" />
                                </Link>
                              </td>

                              <td className="name">
                                <Link to="" className="name-link">
                                  <p className="name-link-text">{item.name}</p>
                                  <p className="name-link-size">
                                    Size: {item.size}
                                  </p>
                                </Link>
                              </td>
                              <td className="quantity">
                                <input
                                  className="quantity-ip"
                                  type="number"
                                  name=""
                                  id=""
                                  value={item.quantity}
                                />
                              </td>
                              <td className="price">
                                <p>
                                  ₫
                                  {new Intl.NumberFormat("de-DE").format(
                                    item.price * item.quantity
                                  )}
                                </p>
                              </td>
                              <td className="remove">
                                <button
                                  type="button"
                                  onClick={() => {
                                    removeProduct(item.id);
                                  }}
                                  className="remove-btn"
                                >
                                  Xóa
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <table className="cart-form-table">
                      <tbody>
                        <tr className="summary">
                          <td className="image"></td>
                          <td className="name"></td>
                          <td className="summary-label">Tổng cộng : </td>
                          <td className="price">
                            <p>
                              ₫
                              {new Intl.NumberFormat("de-DE").format(
                                totalPrice
                              )}
                            </p>
                          </td>
                          <td className="remove"></td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="row">
                      <div className="col-6">
                        <div className="cart-form-notes">
                          <p className="cart-form-notes__title">Ghi chú</p>
                          <textarea
                            className="cart-form-notes__content"
                            name="note"
                            rows="5"
                            cols="10"
                            maxLength="200"
                            placeholder="Tối đa 200 kí tự!"
                          ></textarea>
                        </div>
                        <div className="cart-form-collections">
                          <Link to="/collections">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-box-arrow-left"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                                />
                                <path
                                  fill-rule="evenodd"
                                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                                />
                              </svg>
                            </span>
                            Tiếp tục mua sắm
                          </Link>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="cart-form-btn">
                          <button className="btn cart-form-btn__update">
                            Cập nhập
                          </button>
                          <button className="btn cart-form-btn__payment">
                            Thanh toán
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Policy />
      <Footer />
    </div>
  );
};

export default Cart;
