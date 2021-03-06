import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* <AboutContainer /> */}
      <div className="about">
        <div className="container mgb-45">
          <div className="row">
            <div className="col-12">
              <div className="wrapper">
                <div className="about-3">
                  {/* Lock 100% cua 1/3 */}
                  <div className="about-3-1">
                    <img
                      src={
                        require("../assets/images/slides/slideshow_1.jpg")
                          .default
                      }
                      alt=""
                    />
                  </div>

                  <div className="about-3-1">
                    {/* Lock 50% cua 1/3 */}
                    <div className="about-3-1-2">
                      <img
                        src={
                          require("../assets/images/about/about_1.jpg").default
                        }
                        alt=""
                      />
                    </div>
                    <div className="about-3-1-2">
                      <img
                        src={
                          require("../assets/images/about/about_2.png").default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="about-3-1">
                    <div className="about-3-1-2">
                      <img
                        src={
                          require("../assets/images/about/about_4.png").default
                        }
                        alt=""
                      />
                    </div>
                    <div className="about-3-1-2">
                      <img
                        src={
                          require("../assets/images/about/about_5.jpg").default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="about-3">
                  <h3 className="about-heading">Gi???i thi???u v??? DOUBLET SPORT</h3>
                  <div className="about-content">
                    <p>
                      DOUBLET SPORT l?? c???a h??ng cung c???p c??c s???n ph???m Gi??y th???
                      thao ch??nh h??ng NIKE, ADIDAS, MINUZO, KAMITO,... T???t c???
                      s???n ph???m ?????u ???????c nh???p kh???u v?? ph??n ph???i ch??nh h??ng t???i
                      Vi???t Nam v???i ?????y ????? tem, nh??n, h???p.
                    </p>
                    <p>
                      {" "}
                      Cam k???t c??c s???n ph???m ch??nh h??ng 100% ???????c nh???p kh???u
                      Fullbox t??? c??c nh?? ph??n ph???i ch??nh h??ng t???i Vi???t Nam ??? Qu??
                      kh??ch c?? th??? ki???m tra Tem, nh??n tr??n s???n ph???m, v?? tham
                      kh???o ?? ki???n m???i ng?????i tr?????c khi quy???t ?????nh mua h??ng t???i
                      DOUBLET SPORT.
                    </p>
                  </div>
                </div>
                <div className="about-3">
                  <div className="about-3-1">
                    {/* Lock 50% cua 1/3 */}
                    <div className="about-3-1-2">
                      <img
                        src={
                          require("../assets/images/about/about_fit1.jpg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <div className="about-3-1-2">
                      <img
                        src={
                          require("../assets/images/about/about_7.jpg").default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="about-3-1">
                    <div className="about-3-1-2">
                      <img
                        src={
                          require("../assets/images/about/about_2.png").default
                        }
                        alt=""
                      />
                    </div>
                    <div className="about-3-1-2">
                      <img
                        src={
                          require("../assets/images/about/about_fit2.jpg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  {/* Lock 100% cua 1/3 */}
                  <div className="about-3-1">
                    <img
                      src={
                        require("../assets/images/slides/slideshow_4.jpg")
                          .default
                      }
                      alt=""
                    />
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

export default About;
