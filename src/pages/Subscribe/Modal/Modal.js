import React from 'react';
import './Modal.scss';
const Modal = ({ outModal, closeModal, product }) => {
  return (
    <div className="modal" ref={outModal}>
      <div className="madalBack" onClick={closeModal} />
      <div className="modalPage">
        <button className="modalBtn" onClick={closeModal}>
          X
        </button>
        <div className="modalbox">
          <div className="modalOpen">
            <img
              className="modalImage"
              src={product.product_image}
              alt="이미지"
            />
            <div className="descriptionDetail">
              {product.description_detail}
            </div>
            <div className="descriptionTag">{product.description_tag}</div>
            <div className="alcholPercentage">
              도수 : {product.alcohol_percentage}%
            </div>
            <div className="price">
              가격 : {parseInt(product.price).toLocaleString()}원
            </div>
          </div>
        </div>
        <div>
          <style jsx="true">{`
            body {
              overflow: hidden;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Modal;
