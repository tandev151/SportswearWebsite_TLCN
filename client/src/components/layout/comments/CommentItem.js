import React from "react";

const CommentItem = () => {
  return (
    <div className="comment-item">
      <div className="info">
        <img
          src={require("../../../assets/images/account/user.jpg").default}
          alt=""
        />
        <p className="info-name">Mohamed Salad</p>
      </div>
      <div className="content">
        <div className="rating">
          <div className="star">
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <div className="star-1">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
        <p className="content-body">
          Sản phẩm này cực phù hợp với đôi chân thiên tài của tui Sản phẩm này
          Sản phẩm này cực phù hợp với đôi chân thiên tài của tui Sản phẩm này
          Sản phẩm này cực phù hợp với đôi chân thiên tài của tui Sản phẩm này
          Sản phẩm này cực phù hợp với đôi chân thiên tài của tui Sản phẩm này
          Sản phẩm này cực phù hợp với đôi chân thiên tài của tui Sản phẩm này
        </p>
      </div>
      <div className="create-date">
        <span>Tạo lúc: 20/11/2021</span>
      </div>
    </div>
  );
};

export default CommentItem;
