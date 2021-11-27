import React from "react";

const CommentItem = ({ review }) => {

  const renderedRating = (rating) => {
    const ratingArr = []
    for (let i = 0; i < review.rating; i++) {
      ratingArr.push(<i className="fas fa-star"></i>)
    }
    return <>{ratingArr}</>
  }

  const convertDate = (strDate) => {
    const date = new Date(strDate);
    const sDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    return sDate;
  }
  return (
    <div className="comment-item">
      <div className="info">
        <img
          src={review.user.profilePicture}
          alt="no img"
        />
        <p className="info-name">{review.user.name}</p>
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
              {
                renderedRating(review.rating)
              }
            </div>
          </div>
        </div>
        <p className="content-body">
          {review.comment}
        </p>
      </div>
      <div className="create-date">
        <span>Tạo lúc: {convertDate(review.createdAt)}</span>
      </div>
    </div>
  );
};

export default CommentItem;
