import React from "react";

const FormCommentInput = () => {
  return (
    <div className="comments-body__form mgb-45">
      <div className="form-input">
        <img
          src={require("../../../assets/images/account/images.png").default}
          alt=""
        />
        <div className="form-input__content">
          <p className="form-input__label">Nhận xét</p>
          <div
            className="form-input__text"
            contentEditable={true}
            placeholder="Bạn có nhận xét gì về sản phẩm này?"
          ></div>
        </div>
        <button className=" mgt-20 form-input__submit">Gửi nhận xét</button>
      </div>
    </div>
  );
};

export default FormCommentInput;
