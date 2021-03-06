import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import Slider from "react-slick";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../features/product/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { confirmAlert } from "react-confirm-alert";
import Comments from "../components/layout/comments/Comments";

const ProductDetails = () => {

  let match = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const [product, setProduct] = useState({
    _id: "", discountPercent: "", name: "", slug: "", price: "", description: "", reviews: []
  });
  const [slideSub, setSlideSub] = useState();
  const [slidePhotos, setSlidePhotos] = useState();
  const [openDescription, setOpenDescription] = useState(true);
  const { cartItems } = useSelector((state) => state.cart);
  const [isAddedComment, setIsAddedComment] = useState(false);

  // useHistory be used to redirect page
  const routeChange = (url) => {
    history.push(url);
  };

  const [cartItem, setCartItem] = useState({
    product,
    size: {},
    quantity: 1,
  });

  useEffect(() => {
    const fetchProductBySlug = async () => {
      const { slug } = match.params;
      const res = await dispatch(getProductBySlug(slug)).unwrap();
      setProduct(res.data.product)
    }
    fetchProductBySlug()
  }, [isAddedComment]);

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
  const pageRedirects = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="confirm">
            <h1>B???n mu???n l??m g?? ti???p theo ?</h1>
            <div className="btn-container">
              <button
                className="btn"
                onClick={() => {
                  onClose();
                  routeChange("/");
                }}
              >
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-left-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                </span>
                Quay l???i trang ch???
              </button>
              <button className="btn" onClick={onClose}>
                ??? l???i trang
              </button>
              <button
                className="btn"
                onClick={() => {
                  onClose();
                  routeChange("/cart");
                }}
              >
                ??i ?????n Gi??? h??ng
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        );
      },
    });
  };

  // Open/Close description
  const handleOpenDescription = () => {
    setOpenDescription(!openDescription);
  };
  // Handle change size
  const handleChangeSize = (size) => {
    setCartItem({ ...cartItem, size, product });
  };
  const handleChangeQuantity = (e) => {
    const value = e.target.value;
    if (value < 1) {
      alert("S??? l?????ng t???i thi???u l?? 1");
    } else {
      setCartItem({ ...cartItem, quantity: Number.parseInt(value) });
    }
  };
  // Handle pay now
  const handlePayNow = () => {
    if (cartItem.size._id === undefined || cartItem.quantity === 0) {
      alert("Ki???m tra k??ch th?????c gi??y v?? s??? l?????ng mu???n mua.");
    } else if (auth.authenticate === false) {
      routeChange("/login");
    } else {
      const order = [cartItem];
      history.push({
        pathname: "/checkout",
        state: order,
      });
    }
  };
  // Handle add cart
  const handleAddCart = () => {
    if (cartItem.size._id === undefined || cartItem.quantity === 0) {
      alert("Ki???m tra k??ch th?????c gi??y v?? s??? l?????ng mu???n mua.");
    } else if (auth.authenticate === false) {
      routeChange("/login");
    } else {
      const cartObject = cartItems.find(
        (item) =>
          item.product?._id === cartItem.product._id &&
          item.size?._id === cartItem.size._id
      );

      if (cartObject) {
        const cartExisted = {
          cartItems: [
            {
              product: cartObject.product._id,
              size: cartObject.size._id,
              quantity: cartItem.quantity + cartObject.quantity,
            },
          ],
        };
        dispatch(addToCart(cartExisted));
        pageRedirects();
      } else {
        const cart = {
          cartItems: [
            {
              product: cartItem.product._id,
              size: cartItem.size._id,
              quantity: cartItem.quantity,
            },
          ],
        };

        dispatch(addToCart(cart));
        pageRedirects();
      }
    }
  };
  // Show confirm alert to redirect

  if (Object.keys(product).length === 0) {
    return null;
  }

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
                          <img src={image.img} alt={product.name} />
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <form className="body">
                <div className="body-heading">
                  <h3>{product?.name}</h3>
                </div>
                <div className="body-price">
                  <span className="body-price__old">
                    ???{new Intl.NumberFormat("de-DE").format(product.price)}
                  </span>
                  <span className="body-price__current">
                    ???
                    {new Intl.NumberFormat("de-DE").format(
                      product.price -
                      (product.discountPercent / 100) * product.price
                    )}
                  </span>
                </div>
                <div className="body-brand">
                  <span className="body-brand__label">Th????ng hi???u: </span>
                  <p className="body-brand__name">{product.brand?.name}</p>
                </div>
                <div className="body-size">
                  <div className="body-size__label">
                    <p>Size</p>
                    <Link to="/size-choose">(H?????ng d???n ch???n size)</Link>
                  </div>
                  <div className="body-size__options">
                    {product.sizes?.map((size) => (
                      <label
                        htmlFor={size.size._id}
                        className="body-size__options-item"
                      >
                        <input
                          type="radio"
                          className="body-size__options-item__input"
                          name="size"
                          id={size.size._id}
                          value={size.size._id}
                          required
                          onChange={() => handleChangeSize(size.size)}
                        />
                        <div className="body-size__options-item__label">
                          {size.size.size}
                          <div className="body-size__options-item__label-note">
                            <p>G???i ?? ({size.size.description})</p>
                            <p>S??? l?????ng c??n l???i: {size.quantity}</p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="body-quantity">
                  <label
                    htmlFor="quantity-input"
                    className="body-quantity__label"
                  >
                    S??? l?????ng
                  </label>
                  <input
                    className="body-quantity__input"
                    required
                    name="quantity-input"
                    value={cartItem.quantity}
                    onChange={handleChangeQuantity}
                    type="number"
                  />
                </div>
                <div className="body-promotion">
                  <h4 className="body-promotion__title">Khuy???n m??i t???ng k??m</h4>
                  <ul className="body-promotion__content">
                    <li>1 Balo ?????ng gi??y </li>
                    <li>1 ????i v??? ch???ng tr?????t</li>
                  </ul>
                </div>
                <div className="body-btn">
                  {/* T???o disable khi s???n ph???m h???t h??ng hay v?? s??? c??? n??o ???? ( btn--disable)*/}
                  <span
                    className="btn body-btn__buy"
                    onClick={() => handlePayNow()}
                  >
                    Mua ngay
                  </span>
                  <span
                    type="submit"
                    className="btn body-btn__add-to-cart "
                    onClick={() => handleAddCart()}
                  >
                    Th??m v??o gi??? h??ng
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
                    M?? t??? s???n ph???m
                  </div>
                  <div className="description-header__separate"></div>
                </div>
                {openDescription ? (
                  <div className="description-body">
                    {product.description ? (
                      <p>{product.description}</p>
                    ) : (
                      <p>Ch??a c?? m?? t??? s???n ph???m n??y</p>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row mgt-20">
            <div className="col-12">
              <Comments product={product} isAddedComment={isAddedComment} setIsAddedComment={setIsAddedComment} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
