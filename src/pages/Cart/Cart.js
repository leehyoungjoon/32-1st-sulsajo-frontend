import React, { useState } from 'react';
import './Cart.scss';
import CartList from './CartList/CartList';
import CartPayment from './CartPayment/CartPayment';

const hanld = [
  {
    id: 1,
    name: '애플사이더',
    category: '탁주',
    fingerfood: '오징어',
    ordercount: 0,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/24/15/38/bird-7153858_1280.jpg',
    price: 14000,
  },
  {
    id: 2,
    name: '스윗마마',
    category: '탁주',
    fingerfood: '칩',
    ordercount: 0,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280_1280.jpg',
    price: 20000,
  },
  {
    id: 3,
    name: '루드베리',
    category: '약주',
    fingerfood: '전',
    ordercount: 0,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/15/06/32/river-7133713_1280.jpg',
    price: 10000,
  },
  {
    id: 4,
    name: '미상',
    category: '증류주',
    fingerfood: '피자',
    ordercount: 0,
    productImg:
      'https://cdn.pixabay.com/photo/2022/02/06/19/05/lamp-6997864_1280.jpg',
    price: 15900,
  },
  {
    id: 5,
    name: '복순도가',
    category: '탁주',
    fingerfood: '샐러드',
    ordercount: 0,
    productImg:
      'https://cdn.pixabay.com/photo/2021/08/12/05/29/feather-6539949_1280.jpg',
    price: 52000,
  },
  {
    id: 6,
    name: '별산',
    category: '청주',
    fingerfood: '떡볶이',
    ordercount: 0,
    productImg:
      'https://cdn.pixabay.com/photo/2022/02/16/18/10/fox-7017260_1280.jpg',
    price: 8000,
  },
  {
    id: 7,
    name: '백련',
    category: '증류주',
    fingerfood: '스테이크',
    ordercount: 0,
    productImg:
      'https://cdn.pixabay.com/photo/2021/10/09/07/37/maisan-provincial-park-6693310_1280.jpg',
    price: 25000,
  },
  {
    id: 8,
    name: '미스티',
    category: '약주',
    fingerfood: '김밥',
    ordercount: 0,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/09/17/30/coffee-7121939_1280.jpg',
    price: 90000,
  },
  {
    id: 9,
    name: '나루',
    category: '약주',
    fingerfood: '오징어',
    ordercount: 0,
    productImg:
      'https://cdn.pixabay.com/photo/2022/03/24/08/52/bird-7088667_1280.jpg',
    price: 20000,
  },
  {
    id: 10,
    name: '매화깊은 밤',
    category: '증류주',
    fingerfood: '파스타',
    ordercount: 0,
    productImg:
      'https://cdn.pixabay.com/photo/2022/03/16/21/01/gentoo-penguin-7073391_1280.jpg',
    price: 14090,
  },
];

const Cart = () => {
  const [cartProductCount, setCartProductCount] = useState(1);
  const [data, setData] = useState(hanld);
  // console.log(data);

  const countPlusHandle = e => {
    if (cartProductCount === 15) {
      setData(data[e.target.id].ordercount);
      alert('최대 재고 수량입니다.');
    } else {
      if (data.id === e.target.id) {
        console.log(data.id);
        console.log(e.target.id);
        setData(data[e.target.id].ordercount + 1);
        console.log(data[e.target.id].ordercount);
      }
      // console.log(hanld[e.target.id - 1].id);
    }
  };
  const countMinusHandle = e => {
    // if (cartProductCount === 0) {
    //   setData(hanld[e.target.id].ordercount);
    // } else {
    //   setData(hanld[e.target.id].ordercount - 1);
    //   console.log(hanld[e.target.id - 1].id);
    // }
  };
  return (
    <div id="cartMain">
      <div id="cart">
        <CartList
          ModDataProducts={data}
          handlePlusCount={countPlusHandle}
          countMinusHandle={countMinusHandle}
          handledCount={cartProductCount}
        />
        <CartPayment />
      </div>
    </div>
  );
};

export default Cart;
