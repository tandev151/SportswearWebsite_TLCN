import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import Policy from "../components/layout/content/policy/Policy";
import Footer from "../components/layout/footer/Footer";
const Forget = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="form">
        <div className="container">
          <div className="wrapper mgb-45">
            <h2 className="wrapper-heading">Quên mật khẩu</h2>
            <div className="row">
              <div className="wrapper-body">
                <form className="form-control" action="" method="post">
                  <div className="form-control__input">
                    <span className="form-control__input-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                      </svg>
                    </span>
                    <input
                      className="form-control__input-text"
                      type="email"
                      name=""
                      id=""
                      placeholder="Email của bạn"
                    />
                  </div>
                  <div className="form-control__link">
                    <Link to="/login" className="form-control__link-forget">
                      Đăng nhập
                    </Link>
                    <Link
                      to="/register"
                      className="form-control__link-register"
                    >
                      Đăng ký
                    </Link>
                  </div>
                  <button className="btn form-control__btn" type="submit">
                    Gửi yêu cầu
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Policy />
      <Footer />
    </div>
  );
};

export default Forget;
