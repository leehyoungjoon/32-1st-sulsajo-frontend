import React from 'react';
import './Modal.scss';

const Modal = ({ exitModal }) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className="biggggg">
      <div className="modalbox">
        <button className="exitModal" onClick={exitModal}>
          X
        </button>
        <div className="modalOpen">술담화</div>
      </div>
    </div>
  );
};

export default Modal;
