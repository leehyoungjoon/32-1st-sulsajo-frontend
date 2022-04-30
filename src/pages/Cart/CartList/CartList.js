import React from 'react';
import './CartList.scss';
import CartProduct from './CartProduct/CartProduct';

const CartList = ({
  handlePlusCount,
  countMinusHandle,
  ModDataProducts,
  eachProductDelete,
  checkValueHandle,
  checkValueTrue,
}) => {
  const emptyOrNot =
    ModDataProducts.length > 0 ? (
      ModDataProducts.map((product, index) => (
        <CartProduct
          key={index}
          product={product}
          handlePlusCount={handlePlusCount}
          countMinusHandle={countMinusHandle}
          eachProductDelete={eachProductDelete}
          checkValueHandle={checkValueHandle}
        />
      ))
    ) : (
      <div className="emptyCart">지금 장바구니가 비어 있어요</div>
    );

  return (
    <div id="cartList">
      <div className="cartListTop">
        <div className="cartSelectAllBox">
          <input
            id="cartCheckAll"
            onChange={e => {
              checkValueHandle(e.target.id, e.target.checked);
            }}
            className="cartCheckAllBox"
            type="checkbox"
          />
          <span>모두 선택</span>
          <span>
            {checkValueTrue.length} / {ModDataProducts.length}
          </span>
        </div>
        <button className="cartSelectedDeleteAll">선택삭제</button>
      </div>
      <div>{emptyOrNot}</div>
    </div>
  );
};

export default CartList;
