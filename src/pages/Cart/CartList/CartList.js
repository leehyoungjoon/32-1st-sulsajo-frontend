import React from 'react';
import './CartList.scss';
import CartProduct from './CartProduct/CartProduct';

const CartList = ({
  countPlusHandle,
  countMinusHandle,
  ModDataProducts,
  eachProductDelete,
  checkValueHandle,
  checkedTrue,
  selectedDelete,
  isAllCheck,
}) => {
  return (
    <div className="cartList">
      <div className="cartListTop">
        <div className="cartSelectAllBox">
          <input
            id="cartCheckAll"
            onChange={e => {
              checkValueHandle(e.target.id, e.target.checked);
            }}
            checked={isAllCheck}
            className="cartCheckAllBox"
            type="checkbox"
            readOnly
          />
          <span>모두 선택</span>
          <span className="selectedLength">
            {checkedTrue.length} / {ModDataProducts.length}
          </span>
        </div>
        <button onClick={selectedDelete} className="cartSelectedDeleteAll">
          선택삭제
        </button>
      </div>
      {ModDataProducts.length > 0 ? (
        ModDataProducts.map((product, index) => (
          <CartProduct
            key={index}
            product={product}
            countPlusHandle={countPlusHandle}
            countMinusHandle={countMinusHandle}
            eachProductDelete={eachProductDelete}
            checkValueHandle={checkValueHandle}
          />
        ))
      ) : (
        <div className="emptyCart">지금 장바구니가 비어 있어요</div>
      )}
    </div>
  );
};

export default CartList;
