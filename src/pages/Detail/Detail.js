import React, { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail/ProductDetail';
import Aside from './ProductAside/ProductAside';
import { useParams } from 'react-router-dom';

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
    finger_food: [
      {
        id: 1,
        name: '골뱅이 소면',
        image_url:
          'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg',
      },
      {
        id: 2,
        name: '두부김치',
        image_url:
          'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg',
      },
      {
        id: 3,
        name: '국물닭발',
        image_url:
          'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg',
      },
    ],
    taste: [
      {
        id: 1,
        spiceness: 2,
        savory: 3,
        refreshness: 4,
        sweetness: 4,
        taste_intensity: 2,
      },
    ],
  },
];

const Detail = () => {
  const [quantity, setQuantity] = useState(0);
  const [inputContent, setInputContent] = useState('');
  const [commentList, setCommentList] = useState(temporaryData);
  const [count, setCount] = useState(7);
  const [product, setProduct] = useState([]);
  // const [product, setProduct] = useState(productData[0]);
  const param = useParams();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://10.58.1.7:8000/products/product/${param.id}`)
      .then(res => res.json())
      .then(data => setProduct(data.product_detail[0]));
  }, [param.id]);

  return (
    <div className="detail">
      <Aside
        quantity={quantity}
        setQuantity={setQuantity}
        product={product}
        token={token}
        param={param}
      />
      <ProductDetail
        commentList={commentList}
        setCommentList={setCommentList}
        inputContent={inputContent}
        setInputContent={setInputContent}
        count={count}
        setCount={setCount}
        product={product}
        param={param}
        token={token}
      />
    </div>
  );
};

export default Detail;
