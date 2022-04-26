import React from 'react';
import './Cart.scss';
import CartList from './CartList/CartList';
import CartPayment from './CartPayment/CartPayment';

const Cart = () => {
  return (
    <div id="cartMain">
      <div id="cart">
        <CartList />
        <CartPayment />
      </div>
    </div>
  );
};

export default Cart;
