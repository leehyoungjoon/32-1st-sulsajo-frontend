import React from 'react';
import './Recommend.scss';
import Modal from '../Modal/Modal';

const Recommend = ({ modalOpen, outModal, modalPop, exitModal }) => {
  return (
    <div className="recommend">
      <div className="leftCell">
        <img
          className="leftImage"
          src="./images/damhwabox_basic.png"
          alt="왼쪽이미지"
        />
        <div className="leftComment">
          <div className="leftBox">
            <div className="header">
              <span className="box">담와박스</span>
              <span className="price">39,000원 / 월</span>
            </div>
            <div className="boxComment">
              다양한 주종을 경험할 수 있는 담와박스
            </div>
            <div className="hipoon" />
          </div>
          <div className="date">
            <div className="buyDate">결제일 : 12월 25일</div>
            <div className="arriveDay">도착일 : 1월 28일</div>
          </div>
          <button type="button" onClick={modalPop} className="hintOpen">
            힌트공개
          </button>
          <div className="hintBox" />
          <div className="modalPrac">
            {modalOpen && (
              <div className="big" ref={outModal}>
                <Modal exitModal={exitModal} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
