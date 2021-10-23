import React, { useState, useEffect } from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
const Checkout = (props) => {
  const orderItems = props.location.state;
  const { deliveryInfo } = useSelector(state => state.deliveryInfo);
  const [address, setAddress] = useState(null)
  const setDefaultDeliveryInfo = () => {
    if (deliveryInfo.address) {
      const defaultAddress = deliveryInfo.address.find(add => add.isDefault === true)
      if (defaultAddress) {
        setAddress(defaultAddress);
      } else {
        setAddress(deliveryInfo.address[0])
      }
    }
  };

  useEffect(() => {
    setDefaultDeliveryInfo()
  }, [setDefaultDeliveryInfo])

  const handleChange = (event) => {
    const newAddress = deliveryInfo.address.find(add => add._id === event.target.value)
    setAddress(newAddress);
  };

  const totalPrice = orderItems.reduce((total, priceItem) => {
    total +=
      (priceItem.product?.price -
        (priceItem.product?.discountPercent / 100) * priceItem.product?.price) *
      priceItem.quantity;
    return total;
  }, 0);

  if (!deliveryInfo.address || !address) {
    return null;
  }

  const shippingFee = 30000;
  return (
    <div className="checkout">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <div className="wrapper mgt-20 mgb-45">
              <div className="wrapper__heading">
                <div className="wrapper__heading-logo">DoubleT Sport</div>
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
                            src={deliveryInfo.user.profilePicture}
                            alt=""
                          />
                        </div>
                        <div className="information">
                          <div className="information-name">
                            Tên người nhận: {address.name}
                          </div>
                          <div className="information-phone">
                            SĐT người nhận: {address.phoneNumber}
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
                            value={address._id}
                            onChange={handleChange}
                            autoWidth
                            label={address.address}
                          >
                            {
                              deliveryInfo.address.map((info) =>
                                <MenuItem value={info._id} sx={{ minWidth: 510 }}>
                                  {info.address}
                                </MenuItem>
                              )
                            }
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
                        {orderItems.map((orderItem, index) => (
                          <li
                            className="wrapper__body-orders__list-item"
                            key={index}
                          >
                            <div className="photo">
                              <img
                                src={orderItem.product.productPictures[0].img}
                                alt=""
                              />
                              <span className="quantity-label">
                                {orderItem.quantity}
                              </span>
                            </div>
                            <div className="content">
                              <h6 className="name">{orderItem.product.name}</h6>
                              <p className="size">
                                Size: {orderItem.size.size}
                              </p>
                            </div>
                            <div className="price">
                              <p>
                                ₫
                                {new Intl.NumberFormat("de-DE").format(
                                  (orderItem.product.price -
                                    (orderItem.product.discountPercent / 100) * orderItem.product.price) *
                                  orderItem.quantity
                                )}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="wrapper__body-orders__summary">
                        <div className="wrapper__body-orders__summary__fee">
                          <p className="text">Tạm tính</p>
                          <p className="price">
                            ₫{new Intl.NumberFormat("de-DE").format(totalPrice)}
                          </p>
                        </div>
                        <div className="wrapper__body-orders__summary__fee">
                          <p className="text">Phí vận chuyển</p>
                          <p className="price">
                            ₫
                            {new Intl.NumberFormat("de-DE").format(shippingFee)}
                          </p>
                        </div>
                      </div>
                      <div className="wrapper__body-orders__total">
                        <p className="text">Tổng cộng</p>
                        <p className="price">
                          {" "}
                          ₫
                          {new Intl.NumberFormat("de-DE").format(
                            totalPrice + shippingFee
                          )}{" "}
                        </p>
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

export default Checkout;
