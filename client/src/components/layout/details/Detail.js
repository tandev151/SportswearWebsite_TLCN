import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Detail = () => {
  const [slideSub, setSlideSub] = useState();
  const [slidePhotos, setSlidePhotos] = useState();

  const photoSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adapterHeight: true,
    focusOnSelect: true,
  };

  const subPhotoSettings = {
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adapterHeight: false,
    focusOnSelect: true,
    vertical: true,
  };
  return (
    <div className="detail mgb-45">
      <div className="container">
        <div className="row mgt-20 ">
          <div className="col-6">
            <div className="photo-container">
              <div className="row">
                <div className="col-3">
                  <div className="sub-photos">
                    <Slider
                      asNavFor={slideSub}
                      ref={(slide) => setSlidePhotos(slide)}
                      {...subPhotoSettings}
                    >
                      <img
                        src={
                          require("../../../assets/images/products/puma/puma1.jpeg")
                            .default
                        }
                        alt=""
                      />

                      <img
                        src={
                          require("../../../assets/images/products/puma/puma2.jpeg")
                            .default
                        }
                        alt=""
                      />

                      <img
                        src={
                          require("../../../assets/images/products/puma/puma3.jpeg")
                            .default
                        }
                        alt=""
                      />

                      <img
                        src={
                          require("../../../assets/images/products/puma/puma4.jpeg")
                            .default
                        }
                        alt=""
                      />

                      <img
                        src={
                          require("../../../assets/images/products/puma/puma5.jpeg")
                            .default
                        }
                        alt=""
                      />
                    </Slider>
                  </div>
                </div>
                <div className="col-9">
                  <div className="photos">
                    <Slider
                      asNavFor={slidePhotos}
                      ref={(slide) => setSlideSub(slide)}
                      {...photoSettings}
                    >
                      <img
                        src={
                          require("../../../assets/images/products/puma/puma1.jpeg")
                            .default
                        }
                        alt=""
                      />

                      <img
                        src={
                          require("../../../assets/images/products/puma/puma2.jpeg")
                            .default
                        }
                        alt=""
                      />

                      <img
                        src={
                          require("../../../assets/images/products/puma/puma3.jpeg")
                            .default
                        }
                        alt=""
                      />

                      <img
                        src={
                          require("../../../assets/images/products/puma/puma4.jpeg")
                            .default
                        }
                        alt=""
                      />

                      <img
                        src={
                          require("../../../assets/images/products/puma/puma5.jpeg")
                            .default
                        }
                        alt=""
                      />
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="body">
              <div className="body-heading">
                <h3>
                  PUMA ULTRA 1.3 PRO CAGE TT FASTER FOOTBALL - SUNBLAZE/PUMA
                  WHITE/BLUEMAZING
                </h3>
              </div>
              <div className="body-price">
                <span className="body-price__old">₫1.895.000 </span>
                <span className="body-price__current">₫1.490.000</span>
              </div>
              <div className="body-brand">
                <span className="body-brand__label">Thương hiệu: </span>
                <p className="body-brand__name">Nike</p>
              </div>
              <div className="body-size">
                <div className="body-size__label">
                  <p>Size</p>
                  <Link to="#">(Hướng dẫn chọn size)</Link>
                </div>
                <ul className="body-size__options">
                  <li className="body-size__options-item body-size__options-item--selected">
                    43
                  </li>
                  <li className="body-size__options-item">43.5</li>
                </ul>
              </div>
              <div className="body-promotion">
                <h4 className="body-promotion__title">Khuyến mãi tặng kèm</h4>
                <ul className="body-promotion__content">
                  <li>1 Balo đựng giày </li>
                  <li>1 Đôi vớ chống trượt</li>
                  <li>Voucher giảm 10% cho lần mua tiếp theo</li>
                </ul>
              </div>
              <div className="body-btn">
                {/* Tạo disable khi sản phẩm hết hàng hay vì sự cố nào đó ( btn--disable)*/}
                <span className="btn body-btn__buy">Mua ngay</span>
                <span className="btn body-btn__add-to-cart ">
                  Thêm vào giỏ hàng
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
