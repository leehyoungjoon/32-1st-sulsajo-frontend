import React, { useState } from 'react';
import './Cart.scss';
import CartList from './CartList/CartList';
import CartPayment from './CartPayment/CartPayment';

const temporaryData = [
  {
    id: 1,
    name: '애플사이더',
    category: '탁주',
    ordercount: 1,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/24/15/38/bird-7153858_1280.jpg',
    price: 14000,
  },
  {
    id: 2,
    name: '스윗마마',
    category: '탁주',
    ordercount: 6,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280_1280.jpg',
    price: 20000,
  },
  {
    id: 3,
    name: '루드베리',
    category: '약주',
    ordercount: 3,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/15/06/32/river-7133713_1280.jpg',
    price: 10000,
  },
  {
    id: 4,
    name: '미상',
    category: '증류주',
    ordercount: 4,
    productImg:
      'https://cdn.pixabay.com/photo/2022/02/06/19/05/lamp-6997864_1280.jpg',
    price: 15900,
  },
  {
    id: 5,
    name: '복순도가',
    category: '탁주',
    ordercount: 7,
    productImg:
      'https://cdn.pixabay.com/photo/2021/08/12/05/29/feather-6539949_1280.jpg',
    price: 52000,
  },
  {
    id: 6,
    name: '별산',
    category: '청주',
    ordercount: 2,
    productImg:
      'https://cdn.pixabay.com/photo/2022/02/16/18/10/fox-7017260_1280.jpg',
    price: 8000,
  },
  // {
  //   id: 7,
  //   name: '백련',
  //   category: '증류주',
  //   ordercount: 1,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2021/10/09/07/37/maisan-provincial-park-6693310_1280.jpg',
  //   price: 25000,
  // },
  // {
  //   id: 8,
  //   name: '미스티',
  //   category: '약주',
  //   ordercount: 5,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2022/04/09/17/30/coffee-7121939_1280.jpg',
  //   price: 90000,
  // },
  // {
  //   id: 9,
  //   name: '나루',
  //   category: '약주',
  //   ordercount: 2,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2022/03/24/08/52/bird-7088667_1280.jpg',
  //   price: 20000,
  // },
  // {
  //   id: 10,
  //   name: '매화깊은 밤',
  //   category: '증류주',
  //   ordercount: 10,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2022/03/16/21/01/gentoo-penguin-7073391_1280.jpg',
  //   price: 14090,
  // },
];

const Cart = () => {
  // const [cartProductCount, setCartProductCount] = useState(1);
  const [products, setProducts] = useState(temporaryData);

  const countPlusHandle = e => {
    // console.log(products);
    products.map(product => console.log(product));
    console.log(typeof products);
    // console.log(newCount);
    // setData(data.map(x => {
    //   return ({
    //     ...x,
    //     x.ordercount += 1
    //   });
    // }));
  };
  const countMinusHandle = () => {};
  return (
    <div id="cartMain">
      <div id="cart">
        <CartList
          ModDataProducts={products}
          handlePlusCount={countPlusHandle}
          countMinusHandle={countMinusHandle}
        />
        <CartPayment />
      </div>
    </div>
  );
};

export default Cart;
