import React, { useRef, useState } from 'react';
import './CartList.scss';
import CartProduct from './CartProduct/CartProduct';

const CartList = (
  { handlePlusCount, countMinusHandle, ModDataProducts, eachProductDelete },
  e
) => {
  const testRef = useRef();
  const [isCheckValue, setIsCheckValue] = useState(ModDataProducts);

  const isChangeValue = (id, currentValue) => {
    const productIdx = isCheckValue.findIndex(product => product.id === id);
    const newProducts = [...isCheckValue];
    newProducts[productIdx].isChecked = currentValue;
    setIsCheckValue(newProducts);
  };

  const checkValue = [...isCheckValue];
  const isCheckTrue = checkValue.filter(x => x.isChecked === true);
  // const isCheckFalse = checkValue.filter(x => x.isChecked === false);

  const hover = ModDataProducts.length ? (
    ModDataProducts.map((product, index) => (
      <CartProduct
        key={index}
        product={product}
        handlePlusCount={handlePlusCount}
        countMinusHandle={countMinusHandle}
        isChangeValue={isChangeValue}
        eachProductDelete={eachProductDelete}
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
            ref={testRef}
            className="cartCheckAllBox"
            type="checkbox"
            id="cartProductSelectAll"
            // onClick={e => {
            //   onCheckedAll(e.target.checked);
            // }}
          />
          <span>모두 선택</span>
          <span>
            {isCheckTrue.length} / {ModDataProducts.length}
          </span>
        </div>
        <button className="cartSelectedDeleteAll">선택삭제</button>
      </div>
      <div>{hover}</div>
      {/* <div className="emptyCart">장바구니가 비어있습니다.</div> */}
    </div>
  );
};

export default CartList;
