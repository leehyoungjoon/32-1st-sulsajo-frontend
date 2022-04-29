import React, { useState } from 'react';
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

const Detail = () => {
  const [addCount, setAddCount] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [inputContent, setInputContent] = useState('');
  const [addComment, setAddComment] = useState(temporaryData);

  return (
    <div classnickname="detail">
      <Aside
        addCount={addCount}
        setAddCount={setAddCount}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <ProductDetail
        addComment={addComment}
        setAddComment={setAddComment}
        inputContent={inputContent}
        setInputContent={setInputContent}
      />
    </div>
  );
};

export default Detail;
