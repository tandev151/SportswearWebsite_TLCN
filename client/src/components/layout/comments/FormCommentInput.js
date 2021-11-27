import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { addProductReview } from "../../../features/product/productSlice";
import { useDispatch } from "react-redux";

const FormCommentInput = ({ rating, productId }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [review, setReview] = useState({
    rating: rating,
    comment: "",
    productId: productId,
  });

  useEffect(() => {
    setReview({ ...review, rating });
  }, [rating]);

  const handleSubmitReview = async () => {
    if (!auth) {
      alert("Vui lòng đăng nhập để có thể đánh giá sản phẩm!");
    } else {
      if (review.comment.length === 0 || rating === 0)
        alert("Vui lòng đánh giá và nhận xét sản phẩm trước khi gửi!");
      else {
        try {
          const resp = await dispatch(addProductReview(review)).unwrap();
          if (resp.status === 202) {
            alert("Gửi đánh giá thành công!");
            setReview({ rating: 0, comment: "", productId: productId });
          } else alert("Gửi đánh giá không thành công !");
        } catch (e) {
          alert("Gửi đánh giá không thành công");
        }
      }
    }
  };
  return (
    <div className="comments-body__form ">
      <div className="form-input">
        <img
          src={
            auth.user?.profilePicture ||
            require("../../../assets/images/account/images.png").default
          }
          alt=""
        />
        <div className="form-input__content">
          <p className="form-input__label">Nhận xét</p>
          <textarea
            maxLength="100"
            className="form-input__text"
            value={review.content}
            onChange={(e) => {
              setReview({ ...review, comment: e.target.value });
            }}
          ></textarea>
        </div>
        <button
          className=" mgt-20 form-input__submit"
          onClick={() => handleSubmitReview()}
        >
          Gửi nhận xét
        </button>
      </div>
    </div>
  );
};

export default FormCommentInput;
