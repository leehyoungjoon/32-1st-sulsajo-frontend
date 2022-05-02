import React from 'react';
import './Modal.scss';

const Modal = ({ outModal, closeModal, modal }) => {
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
              술담아{/* taste={taste} */}
              {/* product={product} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
