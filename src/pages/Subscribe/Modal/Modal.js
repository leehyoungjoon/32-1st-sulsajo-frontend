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
            <div className="price">{product.price}원</div>
            <div className="size">{product.size}ml</div>
            <div className="alcholPercentage">
              {product.alcohol_percentage}%
            </div>
            {/* <div>{product[0].taste[0]}</div>
              <div>{product[0].taste[1]}</div>
              <div>{product[0].taste[2]}</div>
              <div>{product[0].taste[3]}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
