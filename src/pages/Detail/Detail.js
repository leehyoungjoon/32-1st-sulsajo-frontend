import React, { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail/ProductDetail';
import Aside from './ProductAside/ProductAside';
import { useParams } from 'react-router-dom';
const token = localStorage.getItem('token');

const Detail = () => {
  const [quantity, setQuantity] = useState(0);
  const [inputContent, setInputContent] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState([]);
  const [product, setProduct] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetch(`http://10.58.6.20:8000/products/${param.id}`)
      .then(res => res.json())
      .then(data => setProduct(data.product_detail[0]));
  }, [param.id]);

  useEffect(() => {
    fetch(`http://10.58.6.20:8000/products/${param.id}/comment`)
      .then(res => res.json())
      .then(data => {
        setCommentList(data.data);
      });
  }, []);

  return (
    <div className="detail">
      <Aside
        quantity={quantity}
        setQuantity={setQuantity}
        product={product}
        token={token}
        productId={param.id}
      />
      <ProductDetail
        commentList={commentList}
        setCommentList={setCommentList}
        inputContent={inputContent}
        setInputContent={setInputContent}
        product={product}
        productId={param.id}
        newComment={newComment}
        setNewComment={setNewComment}
        token={token}
      />
    </div>
  );
};

export default Detail;
