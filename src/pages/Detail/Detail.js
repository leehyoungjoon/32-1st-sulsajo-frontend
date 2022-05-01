import React, { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail/ProductDetail';
import Aside from './ProductAside/ProductAside';

const temporaryData = [
  {
    id: 1,
    nickname: '애플사이더',
    products: '탁주',
    created_at: 1,
    content: 14000,
  },
  {
    id: 2,
    nickname: '스윗마마',
    products: '탁주',
    created_at: 6,
    content: 20000,
  },
  {
    id: 3,
    nickname: '루드베리',
    products: '약주',
    created_at: 3,
    content: 10000,
  },
  {
    id: 4,
    nickname: '미상',
    products: '증류주',
    created_at: 4,
    content: 15900,
  },
  {
    id: 5,
    nickname: '복순도가',
    products: '탁주',
    created_at: 7,
    content: 52000,
  },
  {
    id: 6,
    nickname: '별산',
    products: '청주',
    created_at: 2,
    content: 8000,
  },
];

// const productData = [
//   {
//     id: 1,
//     name: '애플사이더',
//     category: '탁주',
//     ordercount: 1,
//     productImg:
//       'https://cdn.pixabay.com/photo/2022/04/24/15/38/bird-7153858_1280.jpg',
//     price: 14000,
//   },
//   {
//     id: 2,
//     name: '스윗마마',
//     category: '탁주',
//     ordercount: 6,
//     productImg:
//       'https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280_1280.jpg',
//     price: 20000,
//   },
//   {
//     id: 3,
//     name: '루드베리',
//     category: '약주',
//     ordercount: 3,
//     productImg:
//       'https://cdn.pixabay.com/photo/2022/04/15/06/32/river-7133713_1280.jpg',
//     price: 10000,
//   },
//   {
//     id: 4,
//     name: '미상',
//     category: '증류주',
//     ordercount: 4,
//     productImg:
//       'https://cdn.pixabay.com/photo/2022/02/06/19/05/lamp-6997864_1280.jpg',
//     price: 15900,
//   },
//   {
//     id: 5,
//     name: '복순도가',
//     category: '탁주',
//     ordercount: 7,
//     productImg:
//       'https://cdn.pixabay.com/photo/2021/08/12/05/29/feather-6539949_1280.jpg',
//     price: 52000,
//   },
//   {
//     id: 6,
//     name: '별산',
//     category: '청주',
//     ordercount: 2,
//     productImg:
//       'https://cdn.pixabay.com/photo/2022/02/16/18/10/fox-7017260_1280.jpg',
//     price: 8000,
//   },
// ];

const Detail = () => {
  const [addCount, setAddCount] = useState(0);
  const [inputContent, setInputContent] = useState('');
  const [addComment, setAddComment] = useState(temporaryData);
  const [count, setCount] = useState(7);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://10.58.6.222:8000/products/productdetail', {
      method: 'get',
    }).then(response => console.log(response));
    // .then(data => console.log(data));
  }, []);

  // console.log(products)

  return (
    <div classnickname="detail">
      <Aside
        addCount={addCount}
        setAddCount={setAddCount}
        products={products}
        setProducts={setProducts}
      />
      <ProductDetail
        addComment={addComment}
        setAddComment={setAddComment}
        inputContent={inputContent}
        setInputContent={setInputContent}
        count={count}
        setCount={setCount}
        products={products}
      />
    </div>
  );
};

export default Detail;
