import React from 'react';
import './CartList.scss';
import CartProduct from './CartProduct/CartProduct';

const CartList = ({ handlePlusCount, countMinusHandle, ModDataProducts }) => {
  return (
    <div id="cartList">
      <div className="cartListTop">
        <div className="cartSelectAllBox">
          <input
            className="cartCheckAllBox"
            type="checkbox"
            id="cartProductSelectAll"
          />
          <span>모두 선택</span>
        </div>
        <span className="cartSelectedDeleteAll">선택삭제</span>
      </div>
      <div>
        {ModDataProducts.map((product, index) => (
          <CartProduct
            key={index}
            product={product}
            handlePlusCount={handlePlusCount}
            countMinusHandle={countMinusHandle}
          />
        ))}
      </div>
    </div>
  );
};

export default CartList;
