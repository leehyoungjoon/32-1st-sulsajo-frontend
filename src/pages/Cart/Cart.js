import React, { useState } from 'react';
import './Cart.scss';
import CartList from './CartList/CartList';
import CartPayment from './CartPayment/CartPayment';

const temporaryData = [
  {
    id: 1,
    name: '애플사이더',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/24/15/38/bird-7153858_1280.jpg',
    price: 14000,
  },
  {
    id: 2,
    name: '스윗마마',
    count: 1,
    isChecked: true,
    productImg:
      'https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280_1280.jpg',
    price: 20000,
  },
  // {
  //   id: 3,
  //   name: '루드베리',
  //   count: 3,
  //   isChecked: true,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2022/04/15/06/32/river-7133713_1280.jpg',
  //   price: 10000,
  // },
  // {
  //   id: 4,
  //   name: '미상',
  //   count: 4,
  //   isChecked: true,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2022/02/06/19/05/lamp-6997864_1280.jpg',
  //   price: 15900,
  // },
  // {
  //   id: 5,
  //   name: '복순도가',
  //   count: 7,
  //   isChecked: true,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2021/08/12/05/29/feather-6539949_1280.jpg',
  //   price: 52000,
  // },
  // {
  //   id: 6,
  //   name: '별산',
  //   count: 2,
  //   isChecked: true,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2022/02/16/18/10/fox-7017260_1280.jpg',
  //   price: 8000,
  // },
  // {
  //   id: 7,
  //   name: '백련',
  //   count: 1,
  //   isChecked: true,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2021/10/09/07/37/maisan-provincial-park-6693310_1280.jpg',
  //   price: 25000,
  // },
  // {
  //   id: 8,
  //   name: '미스티',
  //   count: 5,
  //   isChecked: true,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2022/04/09/17/30/coffee-7121939_1280.jpg',
  //   price: 90000,
  // },
  // {
  //   id: 9,
  //   name: '나루',
  //   count: 2,
  //   isChecked: true,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2022/03/24/08/52/bird-7088667_1280.jpg',
  //   price: 20000,
  // },
  // {
  //   id: 10,
  //   name: '매화깊은 밤',
  //   count: 10,
  //   isChecked: true,
  //   productImg:
  //     'https://cdn.pixabay.com/photo/2022/03/16/21/01/gentoo-penguin-7073391_1280.jpg',
  //   price: 14900,
  // },
];

const Cart = () => {
  const [products, setProductUpdate] = useState(temporaryData);

  const countPlusHandle = id => {
    const productIdx = products.findIndex(product => product.id === id);
    if (products[productIdx].count === 15) {
      alert('15개 이상 주문은 고객센터로 연락 바랍니다.');
    } else {
      const newProducts = [...products];
      newProducts[productIdx].count++;
      setProductUpdate(newProducts);
    }
  };

  const countMinusHandle = (id, count) => {
    if (count - 1 === 0) {
      const newProducts = [...products];
      setProductUpdate(newProducts);
    } else {
      const productIdx = products.findIndex(product => product.id === id);
      const newProducts = [...products];
      newProducts[productIdx].count--;
      setProductUpdate(newProducts);
    }
  };

  const checkValueTrue = products.filter(product => product.isChecked === true);
  const amoutPrice = () => {
    const sum = checkValueTrue.map(product => product.count * product.price);
    const result = sum.reduce((x, y) => x + y, 0);
    return result;
  };

  const eachProductDelete = eachSelectedId => {
    setProductUpdate(
      products.filter(product => (product.id === eachSelectedId) === false)
    );
  };

  const checkValueHandle = (id, checked) => {
    const productIdx = products.findIndex(product => product.id === id);
    if (id === 'cartCheckAll') {
      // const allCheck =
      //   products.filter(product => product.isChecked === true).length > 0
      //     ? true
      //     : false;
      // return allCheck;
    } else if (id !== 'cartCheckAll') {
      const newProducts = [...products];
      newProducts[productIdx].isChecked = checked;
      setProductUpdate(newProducts);
    }
  };

  return (
    <div id="cartMain">
      <div id="cart">
        <CartList
          ModDataProducts={products}
          handlePlusCount={countPlusHandle}
          countMinusHandle={countMinusHandle}
          eachProductDelete={eachProductDelete}
          checkValueHandle={checkValueHandle}
          checkValueTrue={checkValueTrue}
        />
        <CartPayment wholePrice={amoutPrice()} ModDataProducts={products} />
      </div>
    </div>
  );
};

export default Cart;
