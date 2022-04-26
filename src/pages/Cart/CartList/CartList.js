import React from 'react';
import './CartList.scss';
import CartProduct from './CartProduct/CartProduct';

const CartList = () => {
  return (
    <div id="cartList">
      <div className="cartListTop">
        <div className="cartSelectAllBox">
          <input className="cartCheckAllBox" type="checkbox" />
          <span>모두 선택</span>
        </div>
        <span className="cartSelectedDeleteAll">선택삭제</span>
      </div>
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </div>
  );
};

export default CartList;
