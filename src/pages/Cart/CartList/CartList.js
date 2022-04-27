import React, { useRef } from 'react';
import './CartList.scss';
import CartProduct from './CartProduct/CartProduct';

const CartList = () => {
  const checkBoxRef = useRef();
  return (
    <div id="cartList">
      <div className="cartListTop">
        <div className="cartSelectAllBox">
          <input
            ref={checkBoxRef}
            className="cartCheckAllBox"
            type="checkbox"
            id="cartProductSelectAll"
          />
          <span>모두 선택</span>
        </div>
        <span className="cartSelectedDeleteAll">선택삭제</span>
      </div>
      <CartProduct />
      <CartProduct />
    </div>
  );
};

export default CartList;
