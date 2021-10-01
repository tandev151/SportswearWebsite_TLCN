import React, { useState } from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@material-ui/core";
const CheckoutPage = () => {
  const [address, setAddress] = useState("");

  const handleChange = (event) => {
    setAddress(event.target.value);
  };
  return (
    <div className="checkout">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <div className="wrapper mgt-20 mgb-45">
              <div className="wrapper__heading">
                <div className="wrapper__heading-logo">DoupleT Sport</div>
                <h3 className="wrapper__heading-title">Thanh toán</h3>
              </div>
              <div className="wrapper__body">
                <div className="row">
                  <div className="col-6">
                    <div className="wrapper__body-info">
                      <h5 className="wrapper__body-info__title">
                        Thông tin giao hàng
                      </h5>
                      <div className="wrapper__body-info__body">
                        <div className="photo">
                          <img
                            src={
                              require("../../../assets/images/account/user.jpg")
                                .default
                            }
                            alt=""
                          />
                        </div>
                        <div className="information">
                          <div className="information-name">
                            Tân Lê (tanle@gmail.com)
                          </div>
                          <div className="information-phone">
                            Số điện thoại: 0123456789
                          </div>
                        </div>
                      </div>
                      <div className="wrapper__body-info__address">
                        <FormControl sx={{ m: 1, minWidth: 540 }}>
                          <InputLabel id="address-user-label">
                            Địa chỉ
                          </InputLabel>
                          <Select
                            labelId="address-user-label"
                            id="address-user"
                            value={address}
                            onChange={handleChange}
                            autoWidth
                            label="Address"
                          >
                            <MenuItem value={1} sx={{ minWidth: 510 }}>
                              36 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, TP.HCM
                            </MenuItem>
                            <MenuItem value={10}>Twenty</MenuItem>
                            <MenuItem value={21}>Twenty one</MenuItem>
                            <MenuItem value={26}>
                              Twenty one and a half
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="wrapper__body-info__payments">
                        <h5 className="payments-title">
                          Phương thức thanh toán
                        </h5>

                        <label htmlFor="byCreditCart" className="radio">
                          <input
                            type="radio"
                            name="payments-radio"
                            id="byCreditCart"
                            className="radio__input"
                          />
                          <div className="radio__radio"></div>
                          Thanh toán trực tuyến
                        </label>
                        <label htmlFor="byCash" className="radio">
                          <input
                            type="radio"
                            name="payments-radio"
                            id="byCash"
                            className="radio__input"
                          />
                          <div className="radio__radio"></div>
                          Thanh toán khi nhận hàng
                        </label>
                      </div>
                      <div className="wrapper__body-info__btn row">
                        <button className="btn-pay btn">Thanh toán</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="wrapper__body-orders">
                      <h5 className="wrapper__body-orders__title">Sản phẩm</h5>
                      <ul className="wrapper__body-orders__list">
                        <li className="wrapper__body-orders__list-item">
                          <div className="photo">
                            <img
                              src={
                                require("../../../assets/images/products/adidas/a4.jpg")
                                  .default
                              }
                              alt=""
                            />
                            <span className="quantity-label">4</span>
                          </div>
                          <div className="content">
                            <h6 className="name">
                              adidas Copa Sense .3 FG Meteorite - Red/Footwear
                              White/Solar Red adidas Copa Sense .3 FG Meteorite
                              - Red/Footwear White/Solar Red adidas Copa Sense
                              .3 FG Meteorite - Red/Footwear White/Solar Red
                            </h6>
                            <p className="size">Size: 43</p>
                          </div>
                          <div className="price">
                            <p>₫1.490.000</p>
                          </div>
                        </li>
                        <li className="wrapper__body-orders__list-item">
                          <div className="photo">
                            <img
                              src={
                                require("../../../assets/images/products/adidas/a2.jpg")
                                  .default
                              }
                              alt=""
                            />
                            <span className="quantity-label">4</span>
                          </div>
                          <div className="content">
                            <h6 className="name">
                              adidas Copa Sense .3 FG Meteorite - Red/Footwear
                              White/Solar Red adidas Copa Sense .3 FG Meteorite
                              - Red/Footwear White/Solar Red adidas Copa Sense
                              .3 FG Meteorite - Red/Footwear White/Solar Red
                            </h6>
                            <p className="size">Size: 43</p>
                          </div>
                          <div className="price">
                            <p>₫1.490.000</p>
                          </div>
                        </li>
                        <li className="wrapper__body-orders__list-item">
                          <div className="photo">
                            <img
                              src={
                                require("../../../assets/images/products/adidas/a2.jpg")
                                  .default
                              }
                              alt=""
                            />
                            <span className="quantity-label">4</span>
                          </div>
                          <div className="content">
                            <h6 className="name">
                              adidas Copa Sense .3 FG Meteorite - Red/Footwear
                              White/Solar Red adidas Copa Sense .3 FG Meteorite
                              - Red/Footwear White/Solar Red adidas Copa Sense
                              .3 FG Meteorite - Red/Footwear White/Solar Red
                            </h6>
                            <p className="size">Size: 43</p>
                          </div>
                          <div className="price">
                            <p>₫1.490.000</p>
                          </div>
                        </li>
                        <li className="wrapper__body-orders__list-item">
                          <div className="photo">
                            <img
                              src={
                                require("../../../assets/images/products/adidas/a4.jpg")
                                  .default
                              }
                              alt=""
                            />
                            <span className="quantity-label">4</span>
                          </div>
                          <div className="content">
                            <h6 className="name">
                              adidas Copa Sense .3 FG Meteorite - Red/Footwear
                              White/Solar Red adidas Copa Sense .3 FG Meteorite
                              - Red/Footwear White/Solar Red adidas Copa Sense
                              .3 FG Meteorite - Red/Footwear White/Solar Red
                            </h6>
                            <p className="size">Size: 43</p>
                          </div>
                          <div className="price">
                            <p>₫1.490.000</p>
                          </div>
                        </li>
                      </ul>
                      <div className="wrapper__body-orders__summary">
                        <div className="wrapper__body-orders__summary__fee">
                          <p className="text">Tạm tính</p>
                          <p className="price">₫1.490.000</p>
                        </div>
                        <div className="wrapper__body-orders__summary__fee">
                          <p className="text">Phí vận chuyển</p>
                          <p className="price">0</p>
                        </div>
                      </div>
                      <div className="wrapper__body-orders__total">
                        <p className="text">Tổng cộng</p>
                        <p className="price">₫1.490.000 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
