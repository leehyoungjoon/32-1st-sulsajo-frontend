import React, { useState } from 'react';
import ProductDetail from './ProductDetail/ProductDetail';
import Aside from './ProductAside/ProductAside';
const Detail = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="detail">
      <Aside counter={counter} setCounter={setCounter} />
      <ProductDetail />
      {/* <Comment /> */}
    </div>
  );
};

export default Detail;
