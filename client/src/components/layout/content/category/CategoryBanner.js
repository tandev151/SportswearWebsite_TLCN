import React from "react";
import { Link } from "react-router-dom";

const CategoryBanner = ({ category }) => {
  const CategoryMainBanners = [
    {
      img: require("../../../../assets/images/banner/index_banner_1.jpg")
        .default,
      title: "Giày cỏ nhân tạo (Đế TF)",
      description: "Giày dành cho mặt sân cỏ nhân tạo sân 5-7 người",
      link: "/collections/category/Giay-co-nhan-tao-wQliTMGa0",
    },
    {
      img: require("../../../../assets/images/banner/index_banner_2.jpg")
        .default,
      title: "Giày cỏ tự nhiên(Đế FG, AG, SG)",
      description: "Giày dành cho mặt sân tự nhiên 11 người",
      link: "/collections/category/Giay-co-tu-nhien-JR_L6B_lO",
    },
    {
      img: require("../../../../assets/images/banner/index_banner_3.jpg")
        .default,
      title: "Giày Futsal (Đế IC)",
      description: "Giày dành cho mặt sân xi măng và sân futsal trong nhà",
      link: "/collections/category/Giay-futsal-cwPqmV5T0",
    },
    {
      img: require("../../../../assets/images/banner/index_banner_4.jpg")
        .default,
      title: "Giày Sale Off (50 - 70% OFF)",
      description: "Giày đá banh đang sale off đến 70%",
      link: "/collections/category/Giay-co-nhan-tao-wQliTMGa0",
    },
  ];

  const CategoryExtraBanners = [
    {
      img: require("../../../../assets/images/banner/index_banner_5.jpg")
        .default,
      title: "Giày dành cho trẻ em",
    },
    {
      img: require("../../../../assets/images/banner/index_banner_8.jpg")
        .default,
      title: "Vớ bóng đá",
    },
    {
      img: require("../../../../assets/images/banner/index_banner_10.jpg")
        .default,
      title: "Phụ kiện thể thao",
    },
  ];

  return (
    <div className="banner mgb-45">
      <h3 className="banner__heading">Bạn đang tìm</h3>
      <div className="row ">
        {CategoryMainBanners.map((item) => {
          return (
            <div className="col-3 ">
              <Link to={item.link} className="banner-3 mgb-30">
                <img className="banner-3__img" src={item.img} alt="" />
                <div className="banner-3__body">
                  <h4 className="banner-3__body-title">{item.title}</h4>
                  <span className="banner-3__body-description">
                    {item.description}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="row">
        {CategoryExtraBanners.map((item) => (
          <div className="col-4">
            <Link to="" className="banner-4 mgb-30">
              <img src={item.img} alt="" className="banner-4__img" />
              <div className="banner-4__title">
                <span className="banner-4__title-text">{item.title}</span>
                <span className="banner-4__title-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    class="bi bi-pin-angle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBanner;
