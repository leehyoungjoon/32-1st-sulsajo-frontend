import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartProduct.scss';

const CartProduct = ({ handlePlusCount, countMinusHandle, product, key }) => {
  const cartAProductCheckBox = useRef();
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate('/Cart');
  };

  return (
    <div key={key} id="cartProduct">
      <div className="cartProductTop">
        <span>{product.category}</span>
        <span className="freeDelevery">이벤트기간 무료배송!</span>
      </div>

      <div className="cartProductBottom">
        <input
          onClick={() => {}}
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
                src={product.productImg}
              />

              <div className="productOption">
                <div className="productNameAndOption">
                  <div className="CartProductName">{product.name}</div>

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
              <div key={product.id} className="cartProductCountBtn">
                <button
                  className="productCounterBtn"
                  onClick={() =>
                    countMinusHandle(product.id, product.ordercount)
                  }
                >
                  -
                </button>

                <div className="productCount">{product.ordercount}</div>

                <button
                  className="productCounterBtn"
                  onClick={() => handlePlusCount(product.id)}
                >
                  +
                </button>
              </div>

              <span className="cartProductPrice">{product.price}원</span>
            </div>
          </div>

          <div className="aProductDetailPrice">
            <div className="aProductDetail">
              <span>상품금액</span>

              <span>
                {String(product.price * product.ordercount).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ','
                )}
                원
              </span>
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
                {String(product.price * product.ordercount).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ','
                )}
                원
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
