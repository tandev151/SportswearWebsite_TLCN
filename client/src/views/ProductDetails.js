import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Slider from "react-slick";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../features/product/productSlice";
import productAPI from "../api/productAPI";
const ProductDetails = () => {
  let match = useRouteMatch();
  const slug = match.params.slug;
  console.log(match);
  // const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [slideSub, setSlideSub] = useState();
  const [slidePhotos, setSlidePhotos] = useState();
  const [openDescription, setOpenDescription] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const result = await productAPI.getProductBySlug(slug);
        const data = result.data.product;
        // console.log(data);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    })();
    dispatch(getProductBySlug(slug));
  }, [slug]);

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

  // Open/Close description
  const handleOpenDescription = () => {
    if (openDescription === true) setOpenDescription(false);
    else setOpenDescription(true);
  };
  // Handle add cart
  const handleAddCart = () => {};
  return (
    <Layout>
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
                        {product.productPictures?.map((image) => (
                          <img src={image.img} alt="" />
                        ))}
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
                        {product.productPictures?.map((image) => (
                          <img src={image.img} alt={product?.name} />
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <form className="body" onSubmit={() => handleAddCart()}>
                <div className="body-heading">
                  <h3>{product?.name}</h3>
                </div>
                <div className="body-price">
                  <span className="body-price__old">
                    ₫{new Intl.NumberFormat("de-DE").format(product?.price)}
                  </span>
                  <span className="body-price__current">
                    ₫
                    {new Intl.NumberFormat("de-DE").format(
                      product?.price -
                        (product?.discountPercent / 100) * product?.price
                    )}
                  </span>
                </div>
                <div className="body-brand">
                  <span className="body-brand__label">Thương hiệu: </span>
                  <p className="body-brand__name">{product.brand?.name}</p>
                </div>
                <div className="body-size">
                  <div className="body-size__label">
                    <p>Size</p>
                    <Link to="#">(Hướng dẫn chọn size)</Link>
                  </div>
                  <div className="body-size__options">
                    {product.sizes?.map((size) => (
                      <label
                        htmlFor={size.size.size}
                        className="body-size__options-item"
                      >
                        <input
                          type="radio"
                          className="body-size__options-item__input"
                          name="size"
                          id={size.size.size}
                          required
                        />
                        <div className="body-size__options-item__label">
                          {size.size.size}
                        </div>
                      </label>
                    ))}
                  </div>
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
              </form>
            </div>
          </div>
          <div className="row mgt-20 ">
            <div className="col-12">
              <div className="description">
                <div className="description-header">
                  <div
                    className="description-header__title"
                    onClick={() => handleOpenDescription()}
                  >
                    Mô tả sản phẩm
                  </div>
                  <div className="description-header__separate"></div>
                </div>
                {openDescription ? (
                  <div className="description-body">
                    {product?.description ? (
                      <p>{product?.description}</p>
                    ) : (
                      <p>Chưa có mô tả sản phẩm này</p>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
