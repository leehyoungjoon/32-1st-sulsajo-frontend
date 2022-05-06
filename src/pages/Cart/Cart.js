import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from './CartList/CartList';
import CartPayment from './CartPayment/CartPayment';
import './Cart.scss';

const TEMPORARY_DATA = [
  {
    product_id: 1,
    product_name: '애플사이더',
    category: '양주',
    count: 1,
    is_Checked: true,
    product_image:
      'https://cdn.pixabay.com/photo/2022/04/24/15/38/bird-7153858_1280.jpg',
    price: 14000,
  },
  {
    product_id: 2,
    product_name: '스윗마마',
    category: '소주',
    count: 1,
    is_Checked: true,
    product_image:
      'https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280_1280.jpg',
    price: 20000,
  },
  {
    product_id: 3,
    product_name: '루드베리',
    category: '담금주',
    count: 1,
    is_Checked: true,
    product_image:
      'https://cdn.pixabay.com/photo/2022/04/15/06/32/river-7133713_1280.jpg',
    price: 10000,
  },
  {
    product_id: 4,
    product_name: '미상',
    category: '증류주',
    count: 1,
    is_Checked: true,
    product_image:
      'https://cdn.pixabay.com/photo/2022/02/06/19/05/lamp-6997864_1280.jpg',
    price: 15900,
  },
];

const MAX_QUANTITY = 15;

const Cart = () => {
  const navigate = useNavigate();
  const [products, setProductUpdate] = useState(TEMPORARY_DATA);

  useEffect(() => {
    fetch('http://10.58.2.197:8000/products/orderitem').then(res =>
      console.log(res)
    );
    // .then(result => console.log(result));
  }, []);

  const countPlusHandle = id => {
    const productIdx = products.findIndex(product => product.product_id === id);
    if (products[productIdx].count === MAX_QUANTITY) {
      alert(`${MAX_QUANTITY + 1}개 이상 주문은 고객센터로 연락 바랍니다.`);
    } else {
      const newProducts = [...products];
      newProducts[productIdx].count++;
      setProductUpdate(newProducts);
    }
  };

  const countMinusHandle = id => {
    const productIdx = products.findIndex(product => product.product_id === id);
    if (products[productIdx].count === 1) {
      alert('최소 주문 수량은 1개입니다.');
    } else {
      const newProducts = [...products];
      newProducts[productIdx].count--;
      setProductUpdate(newProducts);
    }
  };

  const checkValueHandle = (id, checked) => {
    const productIdx = products.findIndex(product => product.product_id === id);
    if (typeof id === 'number') {
      const newProducts = [...products];
      newProducts[productIdx].is_Checked = checked;
      setProductUpdate(newProducts);
    } else {
      const newProducts = [...products];
      newProducts.map(product => (product.is_Checked = checked));
      setProductUpdate(newProducts);
    }
  };

  const checkedTrue = products.filter(product => product.is_Checked === true);

  const eachProductDelete = eachSelectedId => {
    const deleteThis = products.filter(
      product => product.product_id === eachSelectedId
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
        is_CheckTrue: checkedTrue,
      }),
    }).then(res => console.log(res.status));
  };

  const isAllCheck =
    products.length !== 0 &&
    products.filter(product => product.is_Checked === true).length ===
      products.length;

  const goOrder = () => {
    if (totalPrice === 0) {
      alert('결제 가능한 상품이 없습니다.');
    } else {
      fetch('', {
        method: 'post',
        body: JSON.stringify({
          products,
        }),
      })
        .then(res => console.log(res))
        .then(navigate('/order'));
    }
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
