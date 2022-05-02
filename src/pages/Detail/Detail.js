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

const productData = [
  {
    alcohol_percentage: '6.0',
    id: 1,
    name: '애플사이더',
    size: 500,
    description_tag: '#아몰랑 #배고파',
    description_detail: '고기랑 잘 어울리는 소주',
    price: 14000,
    product_image:
      'https://media.istockphoto.com/photos/open-wine-bottle-with-cork-on-white-picture-id1298570428?s=612x612',
    category: '소주',
    finger_food: ['골뱅이 소면', '두부 김치', '닭발'],
    taste: [1, 3, 2, 5, 4],
  },
];

const Detail = () => {
  const [addCount, setAddCount] = useState(0);
  const [inputContent, setInputContent] = useState('');
  const [addComment, setAddComment] = useState(temporaryData);
  const [count, setCount] = useState(7);
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useState(productData);

  // useEffect(() => {
  //   fetch('http://10.58.6.222:8000/products/productdetail')
  //     .then(response => response.json())
  //     .then(data => setProducts(data.product_detail));
  // }, []);

  return (
    <div classnickname="detail" key={products.id}>
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
