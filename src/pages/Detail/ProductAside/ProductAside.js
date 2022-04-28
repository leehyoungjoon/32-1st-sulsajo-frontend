import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductAside.scss';

function ProductAside({ counter, setCounter }) {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  const plus = () => {
    let count = counter;
    count += 1;
    setCounter(count);
  };

  const minus = () => {
    let count = counter;
    if (count === 0) {
      setCounter(0);
    } else {
      count -= 1;
    }
    setCounter(count);
  };

  return (
    <div className="aside">
      <div className="asideBar">
        <div className="label">
          <label>옵션</label>
        </div>
        <div className="option">
          <select>
            <option value="" disabled selected>
              어떤 옵션을 원하시나요?
            </option>
            <option value="[500ml] 매실원주">[500ml] 매실원주</option>
          </select>
        </div>
        <div className="label">
          <label>수량</label>
        </div>
        <div className="amount">
          <button className="minus" onClick={minus}>
            -
          </button>
          <span>{counter}</span>
          <button className="plus" onClick={plus}>
            +
          </button>
        </div>
        <div className="label">
          <label>총 상품가격</label>
        </div>
        <div className="price">
          {String(counter * 4900).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
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
}

export default ProductAside;
