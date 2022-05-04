import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from './CartList/CartList';
import CartPayment from './CartPayment/CartPayment';
import './Cart.scss';

const MAX_QUANTITY = 15;

const Cart = () => {
  const navigate = useNavigate();
  const [products, setProductUpdate] = useState([]);

  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then();
  }, []);

  const countPlusHandle = id => {
    const productIdx = products.findIndex(product => product.id === id);
    if (products[productIdx].count === MAX_QUANTITY) {
      alert(`${MAX_QUANTITY + 1}개 이상 주문은 고객센터로 연락 바랍니다.`);
    } else {
      const newProducts = [...products];
      newProducts[productIdx].count++;
      setProductUpdate(newProducts);
    }
  };

  const countMinusHandle = id => {
    const productIdx = products.findIndex(product => product.id === id);
    if (products[productIdx].count === 1) {
      alert('최소 주문 수량은 1개입니다.');
    } else {
      const newProducts = [...products];
      newProducts[productIdx].count--;
      setProductUpdate(newProducts);
    }
  };

  const checkValueHandle = (id, checked) => {
    const productIdx = products.findIndex(product => product.id === id);
    if (typeof id === 'number') {
      const newProducts = [...products];
      newProducts[productIdx].isChecked = checked;
      setProductUpdate(newProducts);
    } else {
      const newProducts = [...products];
      newProducts.map(product => (product.isChecked = checked));
      setProductUpdate(newProducts);
    }
  };

  const checkedTrue = products.filter(product => product.isChecked === true);

  const eachProductDelete = eachSelectedId => {
    const deleteThis = products.filter(
      product => product.id === eachSelectedId
    );
    fetch('', {
      method: 'delete',
      body: JSON.stringify({
        deleteThis,
      }),
    }).then(res => console.log(res.status));
  };

  const totalPrice = checkedTrue.reduce(
    (sum, product) => sum + product.count * product.price,
    0
  );

  const selectedDelete = () => {
    fetch('', {
      method: 'delete',
      body: JSON.stringify({
        isCheckTrue: checkedTrue,
      }),
    }).then(res => console.log(res.status));
  };

  const isAllCheck =
    products.length !== 0 &&
    products.filter(product => product.isChecked === true).length ===
      products.length;

  const goOrder = () => {
    fetch('', {
      method: 'post',
      body: JSON.stringify({
        products,
      }),
    })
      .then(res => console.log(res))
      .then(navigate('/order'));
  };

  return (
    <div className="cartMain">
      <div className="cart">
        <CartList
          ModDataProducts={products}
          countPlusHandle={countPlusHandle}
          countMinusHandle={countMinusHandle}
          eachProductDelete={eachProductDelete}
          checkValueHandle={checkValueHandle}
          checkedTrue={checkedTrue}
          selectedDelete={selectedDelete}
          isAllCheck={isAllCheck}
        />
        <CartPayment goOrder={goOrder} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
