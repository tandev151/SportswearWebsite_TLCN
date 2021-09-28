import React, { useState } from "react";

const CartContainer = () => {
  const [cart, setCart] = useState();
  return (
    <div className="cart">
      <div className="container">
        {cart === null ? (
          <h3> Không có sản phẩm</h3>
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
                    <tbody>
                      <tr>
                        <td className="image">
                          <a href="#" className="image-link">
                            <img
                              src={
                                require("../../../assets/images/products/adidas/a2.jpg")
                                  .default
                              }
                              alt=""
                            />
                          </a>
                        </td>
                        <td className="name">
                          <a href="" className="name-link">
                            <p className="name-link-text">
                              adidas X Speedflow .1 TF Meteorite - Red/Core
                              Black/Solar Red
                            </p>
                            <p className="name-link-size">Size: 43</p>
                          </a>
                        </td>
                        <td className="quantity">
                          <input
                            className="quantity-ip"
                            type="number"
                            name=""
                            id=""
                          />
                        </td>
                        <td className="price">
                          <p>₫1.490.000</p>
                        </td>
                        <td className="remove">
                          <button className="remove-btn">Xóa</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="image">
                          <a href="#" className="image-link">
                            <img
                              src={
                                require("../../../assets/images/products/puma/puma3.jpeg")
                                  .default
                              }
                              alt=""
                            />
                          </a>
                        </td>
                        <td className="name">
                          <a href="" className="name-link">
                            <p className="name-link-text">
                              PUMA ULTRA 1.3 PRO CAGE TT FASTER FOOTBALL -
                              SUNBLAZE/PUMA WHITE/BLUEMAZING
                            </p>
                            <p className="name-link-size">Size: 43</p>
                          </a>
                        </td>
                        <td className="quantity">
                          <input
                            className="quantity-ip"
                            type="number"
                            name=""
                            id=""
                          />
                        </td>
                        <td className="price">
                          <p> ₫1.490.000</p>
                        </td>
                        <td className="remove">
                          <button className="remove-btn">Xóa</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="image">
                          <a href="#" className="image-link">
                            <img
                              src={
                                require("../../../assets/images/products/puma/puma3.jpeg")
                                  .default
                              }
                              alt=""
                            />
                          </a>
                        </td>
                        <td className="name">
                          <a href="" className="name-link">
                            <p className="name-link-text">
                              PUMA ULTRA 1.3 PRO CAGE TT FASTER FOOTBALL -
                              SUNBLAZE/PUMA WHITE/BLUEMAZING
                            </p>
                            <p className="name-link-size">Size: 43</p>
                          </a>
                        </td>
                        <td className="quantity">
                          <input
                            className="quantity-ip"
                            type="number"
                            name=""
                            id=""
                          />
                        </td>
                        <td className="price">
                          <p> ₫1.490.000</p>
                        </td>
                        <td className="remove">
                          <button className="remove-btn">Xóa</button>
                        </td>
                      </tr>
                      <tr className="summary">
                        <td></td>
                        <td></td>
                        <td className="summary-label">Tổng cộng : </td>
                        <td className="price">
                          <p>₫14.490.000 </p>
                        </td>
                        <td></td>
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
                        <a href="/collections">
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
                        </a>
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
  );
};

export default CartContainer;
