import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from './CartList/CartList';
import CartPayment from './CartPayment/CartPayment';
import './Cart.scss';

const TEMPORARY_DATA = [
  {
    id: 1,
    name: '애플사이더',
    category: '양주',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/24/15/38/bird-7153858_1280.jpg',
    price: 14000,
  },
  {
    id: 2,
    name: '스윗마마',
    category: '소주',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280_1280.jpg',
    price: 20000,
  },
  {
    id: 3,
    name: '루드베리',
    category: '담금주',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/15/06/32/river-7133713_1280.jpg',
    price: 10000,
  },
  {
    id: 4,
    name: '미상',
    category: '증류주',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2022/02/06/19/05/lamp-6997864_1280.jpg',
    price: 15900,
  },
  {
    id: 5,
    name: '복순도가',
    category: '양주',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2021/08/12/05/29/feather-6539949_1280.jpg',
    price: 52000,
  },
  {
    id: 6,
    name: '별산',
    category: '맥주',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2022/02/16/18/10/fox-7017260_1280.jpg',
    price: 8000,
  },
  {
    id: 7,
    name: '백련',
    category: '막걸리',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2021/10/09/07/37/maisan-provincial-park-6693310_1280.jpg',
    price: 25000,
  },
  {
    id: 8,
    name: '미스티',
    category: '소주',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/09/17/30/coffee-7121939_1280.jpg',
    price: 90000,
  },
  {
    id: 9,
    name: '나루',
    category: '양주',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2022/03/24/08/52/bird-7088667_1280.jpg',
    price: 20000,
  },
  {
    id: 10,
    name: '매화깊은 밤',
    category: '전통',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2022/03/16/21/01/gentoo-penguin-7073391_1280.jpg',
    price: 14900,
  },
];

const MAX_QUANTITY = 15;

const Cart = () => {
  const navigate = useNavigate();
  const [products, setProductUpdate] = useState(TEMPORARY_DATA);

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
