import React from 'react';
import { useNavigate } from 'react-router';
import './CartPayment.scss';

const CartPayment = () => {
  const navtigate = useNavigate();
  const goPayment = () => {
    navtigate('/Cart');
  };
  return (
    <div id="cartPayment">
      <div className="paymentTop">
        <span className="receipt">계산서</span>
        <div className="detailPayment">
          <div className="selectedPrice">
            <span>총 상품금액</span>
            <span>"모든 상품 금액 더한 값"</span>
          </div>
          <div className="discountPrice">
            <span>총 즉시할인 금액</span>
            <span>0원</span>
          </div>
          <div className="deliveryCharge">
            <span>총 배송비</span>
            <span>0원</span>
          </div>
          <span className="deliverySoHard">
            <i className="fa-solid fa-circle-info" />
            제주도 및 도서 산간의 경우 배송비가 추가될 수 있습니다.
          </span>
        </div>
        <div className="wholePrice">
          <span>총 결제 예상 금액</span>
          <span>"모든 상품 금액 더한 값"</span>
        </div>
      </div>
      <button className="startPayment" onClick={goPayment}>
        구매하기
      </button>
    </div>
  );
};

export default CartPayment;
