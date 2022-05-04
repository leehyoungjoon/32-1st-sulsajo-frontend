import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductBoxCard.scss';

const ProductBoxCard = ({ data }) => {
  return (
    <Link className="ProductBoxCard" to={`/detail/${data.product_id}`}>
      <div>
        <img
          alt="recommend"
          src={data.products_image}
          className="recommendListImg"
        />
        <div className="contentWrapper">
          <h4 className="contentTitle">{data.name}</h4>
          <p className="price">{parseInt(data.price).toLocaleString()}원</p>
          <div className="scoreAndReview">
            <span className="score">⭐ 4.5</span>
            <div className="border" />
            <span className="review">리뷰 5901</span>
          </div>
          <div className="hashtags">
            <p className="tag">{data.description_tag}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductBoxCard;
