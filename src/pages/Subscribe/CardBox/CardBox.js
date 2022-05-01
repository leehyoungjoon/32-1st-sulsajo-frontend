import React from 'react';
import './CardBox.scss';

const CardBox = ({ outModal, modalOpen, Modal, closeModal, openModal }) => {
  return (
    <div className="cardBox">
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
          <button className="modalOpenBtn" type="button" onClick={openModal}>
            힌트공개
          </button>
          <div className="hintBox" />
          <div className="modalPrac" ref={outModal}>
            {modalOpen && (
              <div className="big">
                <Modal
                  closeModal={closeModal}
                  // productData={product}
                  // productData={product}
                  // tasteData={taste}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="rightCell">
        <img
          className="rightImage"
          src="./images/damhwabox_soju.png"
          alt="우측이미지"
        />
        <div className="rightComment">
          <div className="rightBox">
            <div className="header">
              <span className="box">증류주 담와박스</span>
              <span className="price">49,000원 / 월</span>
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
          <div className="hintBox">
            <button className="hintOpen" onClick={openModal}>
              힌트공개
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
