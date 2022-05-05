import React from 'react';
import './ProductAside.scss';

function ProductAside({ quantity, setQuantity, product, token, productId }) {
  const postToCart = e => {
    e.preventDefault();
    if (quantity !== 0) {
      fetch(`http://10.58.6.20:8000/products/${productId}/orderitem`, {
        method: 'post',
        headers: { Authorization: token },
        body: JSON.stringify({
          product_id: product.id,
          product_name: product.name,
          category_name: product.category,
          count: quantity,
          is_checked: true,
          product_image: product.product_image[0].image_url,
          price: product.price,
        }),
      }).then(response => {
        if (response.status === 200) {
          alert(
            `주문하신 상품 ${quantity}개가 성공적으로 장바구니에 담겼습니다.`
          );
        }
      });
    } else {
      e.preventDefault();
    }
  };

  const plus = () => {
    if (quantity === 15) {
      alert('16개 이상은 고객센터로 문의 주세요');
    } else {
      setQuantity(prevCount => prevCount + 1);
    }
  };

  const minus = () => {
    if (quantity === 0) return;
    setQuantity(prevCount => prevCount - 1);
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
              [{product.size}ml] {product.name}
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
          <span>{quantity}</span>
          <button className="plus" onClick={plus}>
            +
          </button>
        </div>
        <div className="label">
          <label>총 상품가격</label>
        </div>
        <div className="price">
          {parseInt(product.price * quantity).toLocaleString()}원
        </div>
        <div className="delivery">
          <div className="label">이벤트 기간 무료 배송!</div>
        </div>
        <form>
          <button className="cart" onClick={postToCart}>
            장바구니 담기
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductAside;
