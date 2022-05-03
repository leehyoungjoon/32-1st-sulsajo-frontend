import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductBoxCard.scss';

// category_id: 3 number
// description_tag: "#직장인들 최애"
// name: "유채꽃, 선릉"
// price: "10000.00"
// product_id: 14
// products_image: "h

const ProductBoxCard = ({ data }) => {
  console.log(data);

  return (
    <Link className="sojuRecommendList" to={`/detail/${data.product_id}`}>
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
