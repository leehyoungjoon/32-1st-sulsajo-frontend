import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartProduct.scss';

const CartProduct = ({
  countPlusHandle,
  countMinusHandle,
  product: {
    product_id,
    product_name,
    category_name,
    count,
    isChecked,
    product_image,
    price,
  },
  eachProductDelete,
  checkValueHandle,
}) => {
  const navigate = useNavigate();

  return (
    <div className="cartProduct">
      <div className="cartProductTop">
        <span>{category_name}</span>
        <span className="freeDelevery">이벤트기간 무료배송!</span>
      </div>
      <div className="cartProductBottom">
        <input
          onChange={e => {
            checkValueHandle(product_id, e.target.checked);
          }}
          checked={isChecked}
          className="cartProductCheck"
          type="checkbox"
          readOnly
        />
        <div className="btnRight">
          <div className="cartProductDetail">
            <div className="showCartProduct">
              <img
                className="cartProductImg"
                alt="cartProductImg"
                src={product_image}
              />
              <div className="productOption">
                <div className="productNameAndOption">
                  <div className="CartProductName">{product_name}</div>
                  <button
                    className="cartDeleteProduct"
                    onClick={() => {
                      eachProductDelete(product_id);
                    }}
                  >
                    X
                  </button>
                </div>
                <input
                  list="cartProductOptionReCheck"
                  className="cartProductOptionReCheck"
                  placeholder="옵션 선택"
                  defaultValue="500ml, Medium 사이즈"
                />
                <datalist id="cartProductOptionReCheck" />
              </div>
            </div>
            <div className="cartProductCountAndPrice">
              <div key={product_id} className="cartProductCountBtn">
                <button
                  className="productCounterBtn"
                  onClick={() => countMinusHandle(product_id)}
                >
                  -
                </button>
                <div className="productCount">{count}</div>
                <button
                  className="productCounterBtn"
                  onClick={() => countPlusHandle(product_id)}
                >
                  +
                </button>
              </div>
              <span className="cartProductPrice">
                {price.toLocaleString()}원
              </span>
            </div>
          </div>
          <div className="aProductDetailPrice">
            <div className="aProductDetail">
              <span>상품금액</span>
              <span>{(price * count).toLocaleString()}원</span>
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
                {(price * count).toLocaleString()}원
              </span>
            </div>
          </div>
          <button
            className="SeeMoreProductOfShop"
            onClick={() => {
              navigate('/main');
            }}
          >
            {category_name} 카테고리 상품 더보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
