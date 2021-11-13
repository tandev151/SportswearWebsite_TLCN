import React from "react";
import FormCommentInput from "./FormCommentInput";
const Comments = () => {
  return (
    <div className="comments">
      <div className="comments-header">
        <div className="comments-header__title">Đánh giá sản phẩm</div>
        <div className="comments-header__separate"></div>
      </div>
      <div className="comments-body mgt-20">
        <div className="comments-body__rating">
          <div className="label">Đánh giá:</div>
          <div className="rating">
            <input type="radio" name="rate" id="rd-5" />
            <label htmlFor="rd-5" className="fas fa-star"></label>
            <input type="radio" name="rate" id="rd-4" />
            <label htmlFor="rd-4" className="fas fa-star"></label>
            <input type="radio" name="rate" id="rd-3" />
            <label htmlFor="rd-3" className="fas fa-star"></label>
            <input type="radio" name="rate" id="rd-2" />
            <label htmlFor="rd-2" className="fas fa-star"></label>
            <input type="radio" name="rate" id="rd-1" />
            <label htmlFor="rd-1" className="fas fa-star"></label>
          </div>
        </div>
        <FormCommentInput />
        <div className="comments-body__list"></div>
      </div>
    </div>
  );
};

export default Comments;
