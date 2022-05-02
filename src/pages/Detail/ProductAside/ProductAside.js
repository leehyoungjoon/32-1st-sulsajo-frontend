import React from 'react';
import './ProductAside.scss';

function ProductAside({ addCount, setAddCount, products }) {
  const goToCart = e => {
    if (addCount !== 0) {
      alert(`주문하신 상품 ${addCount}개가 성공적으로 장바구니에 담겼습니다.`);
    } else {
      e.preventDefault();
    }
  };

  const plus = () => {
    if (addCount === 15) {
      alert('16개 이상은 고객센터로 문의 주세요');
    } else {
      setAddCount(prevCount => prevCount + 1);
    }
  };

  const minus = () => {
    if (addCount === 0) return;
    setAddCount(prevCount => prevCount - 1);
  };

  return (
    <div className="productAside">
      <div className="asideBar">
        <div className="label">
          <label>옵션</label>
        </div>
        <div className="option">
          <select>
            <option defaultValue disabled>
              옵션 하나지롱
            </option>
            <option value="술">
              [{products[0].size}ml] {products[0].name}
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
          {String(addCount * `${products[0].price}`).replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ','
          )}
          원
        </div>
        <div className="delivery">
          <div className="label">이벤트 기간 무료 배송!</div>
        </div>
        <form>
          <button className="cart" onClick={goToCart}>
            장바구니 담기
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductAside;
