import React from "react";
import { useState } from "react";

import {
  Select,
  FormControl,
  TextField,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import Layout from "../components/layout/Layout";
import OrderItem from "../components/layout/order/OrderItem";
import ProvinceData from "../data/data.json";
const Account = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      address: "36 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, TP.HCM",
      isConfig: true,
    },
    {
      id: 2,
      address: "14 Nguyễn Công Trứ, Q7, Tân Phú, TP.HCM",
      isConfig: false,
    },
    { id: 3, address: "122 Võ Văn Ngân, Thủ Đức, TP.HCM", isConfig: false },
  ]);

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [commune, setCommune] = useState("");
  const [formAddressOpen, setFormAddressOpen] = useState(false);
  // Dùng để kích hoạt chọn ở selectbox
  const handleChangeProvince = (event) => {
    setProvince(event.target.value);
  };

  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };

  const handleChangeCommune = (event) => {
    console.log(event.target.value);
    setCommune(event.target.value);
  };

  const handleDeleteAddress = (id) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((item) => item.id !== id)
    );
  };

  const handleConfigAddress = (address, index) => {
    const replaceAddress = [...addresses];
    replaceAddress.splice(index, 1);
    replaceAddress.unshift(address);

    const newAddresses = replaceAddress.map((item) => {
      if (item.id === address.id) {
        return {
          ...item,
          isConfig: true,
        };
      }
      return {
        ...item,
        isConfig: false,
      };
    });
    console.log(newAddresses);
    return setAddresses(newAddresses);
  };

  const handleCloseAddForm = () => {
    setFormAddressOpen(false);
  };

  return (
    <Layout>
      <div className="account">
        <div className="container mgb-45">
          <div className="row">
            <div className="account-wrapper">
              <div className="row">
                <div className="col-6">
                  <div className="account-wrapper__information ">
                    <h3 className="account-wrapper__information__heading">
                      Thông tin cá nhân
                    </h3>
                    <div className="account-wrapper__information__body">
                      <form action="">
                        <div className="form-header">
                          <div className="form-header__img">
                            <img
                              src={
                                require("../assets/images/account/user.jpg")
                                  .default
                              }
                              alt=""
                            />
                            <span className="form-header__img-edit">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                class="bi bi-pencil-square"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="form-header__username">
                            <h5>Tài khoản: tanle@gmail.com</h5>
                          </div>
                        </div>
                        {/* <div className="form-control"> */}
                        <FormControl fullWidth style={{ marginBottom: "25px" }}>
                          <TextField label="Họ và tên" variant="outlined" />
                        </FormControl>
                        <FormControl fullWidth style={{ marginBottom: "25px" }}>
                          <TextField label="Số điện thoại" variant="outlined" />
                        </FormControl>
                        {/* <label htmlFor="">Họ và tên</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Nhập tên của bạn"
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="">Số điện thoại</label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Nhập số điện thoại của bạn"
                        />
                      </div> */}
                        <input
                          type="submit"
                          value="Cập nhật"
                          className="btn form-btn"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="account-wrapper__address ">
                    <div className="account-wrapper__address__heading">
                      <h3>Địa chỉ </h3>

                      <div
                        className="add-btn"
                        onClick={() => setFormAddressOpen(true)}
                      >
                        Thêm địa chỉ
                      </div>
                    </div>
                    {formAddressOpen ? (
                      <div className="account-wrapper__address__form">
                        <form action="">
                          <FormControl
                            fullWidth
                            style={{ marginBottom: "25px" }}
                          >
                            <TextField
                              required
                              label="Địa chỉ"
                              variant="outlined"
                            />
                          </FormControl>
                          <FormControl
                            required
                            fullWidth
                            style={{ marginBottom: "25px" }}
                            variant="standard"
                          >
                            <InputLabel id="province">
                              Tỉnh/Thành phố
                            </InputLabel>
                            <Select
                              labelId="province"
                              value={province}
                              onChange={handleChangeProvince}
                              sx={{
                                width: 565,
                              }}
                              label="province"
                            >
                              {ProvinceData.map((item) => (
                                <MenuItem
                                  value={item}
                                  key={item.Id}
                                  sx={{
                                    "& .MuiList-root-MuiMenu-list": {
                                      height: "200px",
                                    },
                                  }}
                                >
                                  {item.Name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <FormControl
                            required
                            fullWidth
                            style={{ marginBottom: "25px" }}
                            variant="standard"
                          >
                            <InputLabel id="district">Quận/Huyện</InputLabel>
                            <Select
                              labelId="district"
                              value={district}
                              onChange={handleChangeDistrict}
                              label="district"
                              sx={{ width: 565 }}
                            >
                              {province.Districts ? (
                                province.Districts.map((item) => (
                                  <MenuItem value={item} key={item.Id}>
                                    {item.Name}
                                  </MenuItem>
                                ))
                              ) : (
                                <MenuItem value={0}></MenuItem>
                              )}
                            </Select>
                          </FormControl>
                          <FormControl
                            required
                            fullWidth
                            style={{ marginBottom: "25px" }}
                            variant="standard"
                          >
                            <InputLabel id="commune">Xã/Phường</InputLabel>
                            <Select
                              labelId="commune"
                              value={commune}
                              onChange={handleChangeCommune}
                              label="commune"
                              sx={{ width: 565 }}
                            >
                              {district.Wards ? (
                                district.Wards.map((item) => (
                                  <MenuItem value={item} key={item.Id}>
                                    {item.Name}
                                  </MenuItem>
                                ))
                              ) : (
                                <MenuItem value={0}></MenuItem>
                              )}
                            </Select>
                          </FormControl>
                          <div className="add-form-btn">
                            <input
                              type="submit"
                              value="Thêm địa chỉ"
                              className="btn form-btn"
                            />
                            <input
                              type="submit"
                              value="Hủy"
                              className="btn form-btn form-btn--cancel"
                              onClick={() => handleCloseAddForm()}
                            />
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div className="account-wrapper__address__body">
                        {addresses.map((address, index) => {
                          return (
                            <div className="address-item" key={address.id}>
                              <div className="address-item__icon">
                                <svg
                                  style={
                                    address.isConfig
                                      ? { color: "green" }
                                      : { color: "transparent" }
                                  }
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  class="bi bi-geo-alt-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                              </div>
                              <div className="address-item__content">
                                <p>{address.address}</p>
                              </div>

                              <div
                                className="address-item__setup address-item__setup--config"
                                style={
                                  address.isConfig
                                    ? {
                                      cursor: "default",
                                      visibility: "hidden",
                                    }
                                    : null
                                }
                                onClick={() =>
                                  handleConfigAddress(address, index)
                                }
                              >
                                Đặt làm mặc định
                              </div>
                              <div
                                style={
                                  address.isConfig
                                    ? {
                                      cursor: "default",
                                      visibility: "hidden",
                                    }
                                    : null
                                }
                                className="address-item__setup address-item__setup--delete"
                                onClick={() => {
                                  handleDeleteAddress(address.id);
                                }}
                              >
                                Xóa
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="account-wrapper__order">
                    <div className="account-wrapper__order__heading">
                      <h3>Đơn hàng</h3>
                      <div className="status-sort">
                        <span className="status-sort-label">Trạng thái: </span>
                        <select name="" id="">
                          <option value="">Tất cả</option>
                          <option value="">Chờ xác nhận</option>
                          <option value="">Đang đóng gói</option>
                          <option value="">Đang vận chuyển</option>
                          <option value="">Giao hàng thành công</option>
                          <option value="">Đơn hàng đã hủy</option>
                        </select>
                      </div>
                    </div>
                    <div className="account-wrapper__order__body">
                      {/* 1 đơn hàng trong list các đơn hàng */}
                      <OrderItem />
                    </div>
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

export default Account;
