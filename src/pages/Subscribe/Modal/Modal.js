import React from 'react';
import './Modal.scss';

const Modal = ({ productData, tasteData, closeModal }) => {
  // console.log(productData);
  // console.log(tasteData);
  // const { size, price, alchol } = productData;
  // const { taste } = tasteData;
  return (
    <>
      <div className="big-back" onClick={closeModal} />
      <div className="biggggg">
        {/* {size} */}
        <button className="modalBtn" onClick={closeModal}>
          X
        </button>
        <div className="modalbox">
          <div className="modalOpen">술담아</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
