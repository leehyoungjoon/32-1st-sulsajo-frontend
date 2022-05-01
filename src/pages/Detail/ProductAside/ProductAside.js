import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductAside.scss';

function ProductAside({ addCount, setAddCount, products }) {
  const goTo = useNavigate();

  const goToCart = () => {
    goTo('/cart');
  };

  const plus = () => {
    setAddCount(prevCount => prevCount + 1);
  };

  const minus = () => {
    if (addCount === 0) return;
    setAddCount(prevCount => prevCount - 1);
  };

  return products.map(el => {
    return (
      <div className="productAside" key={el.id}>
        <div className="asideBar">
          <div className="label">
            <label>옵션</label>
          </div>
          <div className="option">
            <select>
              <option defaultValue disabled>
                옵션 하나지롱
              </option>
              <option value="[500ml] 매실원주">
                [{el.price}ml] {el.name}
              </option>
            </select>
          </div>
          <div className="label">
            <label>수량</label>
          </div>
          <div className="amount">
            <button className="minus" onClick={minus}>
              -
            </button>
            <span>{addCount}</span>
            <button className="plus" onClick={plus}>
              +
            </button>
          </div>
          <div className="label">
            <label>총 상품가격</label>
          </div>
          <div className="price">
            {String(addCount * `${el.price}`).replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ','
            )}
            원
          </div>
          <div className="delivery">
            <div className="label">이벤트 기간 무료 배송!</div>
          </div>
          <button className="cart" onClick={goToCart}>
            장바구니 담기
          </button>
          <button className="purchase">바로 구매하기</button>
        </div>
      </div>
    );
  });
}

export default ProductAside;
