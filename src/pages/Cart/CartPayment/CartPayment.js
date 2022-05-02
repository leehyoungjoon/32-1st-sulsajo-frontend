import React from 'react';
import './CartPayment.scss';

const CartPayment = ({ wholePrice, goOrder }) => {
  return (
    <div className="cartPayment">
      <div className="paymentTop">
        <span className="receipt">계산서</span>
        <div className="detailPayment">
          <div className="finalPaymentAccount">
            <span>총 상품금액</span>
            <span>{wholePrice.toLocaleString()}원</span>
          </div>
          <div className="finalPaymentAccount">
            <span>총 즉시할인 금액</span>
            <span>0원</span>
          </div>
          <div className="finalPaymentAccount">
            <span>총 배송비</span>
            <span>0원</span>
          </div>
          <span className="deliverySoHardIHateIt">
            <i className="fa-solid fa-circle-info" />
            제주도 및 도서 산간의 경우 배송비가 추가될 수 있습니다.
          </span>
        </div>
        <div className="wholePrice">
          <span>총 결제 예상 금액</span>
          <span>{wholePrice.toLocaleString()}원</span>
        </div>
      </div>
      <button className="startPayment" onClick={goOrder}>
        구매하기
      </button>
    </div>
  );
};

export default CartPayment;
