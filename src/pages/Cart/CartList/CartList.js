import React from 'react';
import './CartList.scss';
import CartProduct from './CartProduct/CartProduct';

const CartList = (
  {
    handlePlusCount,
    countMinusHandle,
    ModDataProducts,
    eachProductDelete,
    selectDelete,
    isChangeValue,
    isCheckTrue,
  },
  e
) => {
  const emptyOrNot =
    ModDataProducts.length > 0 ? (
      ModDataProducts.map((product, index) => (
        <CartProduct
          key={index}
          product={product}
          handlePlusCount={handlePlusCount}
          countMinusHandle={countMinusHandle}
          isChangeValue={isChangeValue}
          eachProductDelete={eachProductDelete}
          // selectDelete={selectDelete}
        />
      ))
    ) : (
      <div className="emptyCart">지금 장바구니가 비어 있어요</div>
    );

  return (
    <div id="cartList">
      <div className="cartListTop">
        <div className="cartSelectAllBox">
          <input className="cartCheckAllBox" type="checkbox" />
          <span>모두 선택</span>
          <span>
            {isCheckTrue.length} / {ModDataProducts.length}
          </span>
        </div>
        <button onClick={selectDelete} className="cartSelectedDeleteAll">
          선택삭제
        </button>
      </div>
      <div>{emptyOrNot}</div>
    </div>
  );
};

export default CartList;
