import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import './CartProduct.scss';

const CartProduct = () => {
  const cartAProductCheckBox = useRef();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const []

  // console.log(cartAProductCheckBox.current.current.checked);

  const plusProductCount = () => {
    if (count === 5) {
      setCount(5);
    } else {
      setCount(count + 1);
    }
  };

  const minusProductCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const goToCategory = () => {
    navigate('/Cart');
  };

  return (
    <div id="cartProduct">
      <div className="cartProductTop">
        <span>"categories.id"</span>
        <span className="freeDelevery">이벤트기간 무료배송!</span>
      </div>
      <div className="cartProductBottom">
        <input
          onClick={() => {
            console.log(cartAProductCheckBox.current.checked);
          }}
          ref={cartAProductCheckBox}
          className="cartProductCheck"
          type="checkbox"
          id="cartProductCheckBox"
        />
        <div className="btnRight">
          <div className="cartProductDetail">
            <div className="showCartProduct">
              <img
                className="cartProductImg"
                alt="cartProductImg"
                src="https://cdn.pixabay.com/photo/2018/02/25/11/17/wine-3180220_1280.jpg"
              />
              <div className="productOption">
                <div className="productNameAndOption">
                  <div className="CartProductName">"products.id"</div>
                  <button className="cartDeleteProduct">X</button>
                </div>
                <input
                  list="cartProductOptionReCheck"
                  className="cartProductOptionReCheck"
                  placeholder="옵션 선택"
                />
                <datalist id="cartProductOptionReCheck">
                  <option value="500ml, Medium 사이즈" />
                </datalist>
              </div>
            </div>
            <div className="cartProductCountAndPrice">
              <div className="cartProductCountBtn">
                <button
                  className="productCounterBtn"
                  onClick={minusProductCount}
                >
                  -
                </button>

                <div className="productCount">{count}</div>
                <button
                  className="productCounterBtn"
                  onClick={plusProductCount}
                >
                  +
                </button>
              </div>
              <span className="cartProductPrice">"products.price"원</span>
            </div>
          </div>
          <div className="aProductDetailPrice">
            <div className="aProductDetail">
              <span>상품금액</span>
              <span>"products.price * {count}"원</span>
            </div>
            <div className="aProductDetail">
              <span>즉시할인금액</span>
              <span>0원</span>
            </div>
            <div className="aProductDetail">
              <span>배송비</span>
              <span>0원</span>
            </div>
            <div className="aProductWholeDetail">
              <span>총 금액</span>
              <span className="aProductWholePrice">
                "products.price * {count}"
              </span>
            </div>
          </div>
          <button className="SeeMoreProductOfShop" onClick={goToCategory}>
            양조장 상품 더보기 해당 카테고리로 이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
