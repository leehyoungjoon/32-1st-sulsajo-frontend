import React from 'react';
import './Modal.scss';

const Modal = ({ outModal, closeModal, product }) => {
  return (
    <div className="modalPrac" ref={outModal}>
      <div className="big">
        <div className="madalBack" onClick={closeModal} />
        <div className="modalPage">
          <button className="modalBtn" onClick={closeModal}>
            X
          </button>
          <div className="modalbox">
            <div className="modalOpen">
              <div>{product[0].id}</div>
              <img
                className="modalImage"
                src={product[0].product_image}
                alt="이미지"
              />
              <div className="description_detail">
                {product[0].description_detail}
              </div>
              <div className="description_tag">
                {product[0].description_tag}
              </div>
              <div className="price">{product[0].price}원</div>
              <div className="size">{product[0].size}ml</div>
              <div className="alchol_percentage">
                {product[0].alcohol_percentage}%
              </div>
              {/* <div>{product[0].taste[0]}</div>
              <div>{product[0].taste[1]}</div>
              <div>{product[0].taste[2]}</div>
              <div>{product[0].taste[3]}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
