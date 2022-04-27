import { useState } from 'react';
import './ProductBoxCard.scss';

import React from 'react';

const ProductBoxCard = () => {
  return (
    <div className="sojuRecommendList">
      <img alt="" src="/images/Main/april.png" className="recommendListImg" />
      <div className="contentWrapper">
        <h4 className="contentTitle">잔에 담긴 꽃, 4월 담화박스(선물용)</h4>
        <p className="price">42,000원</p>
        <div className="scoreAndReview">
          <span className="score">⭐ 4.5</span>
          <div className="border"> </div>
          <span className="review">리뷰 5901</span>
        </div>
        <div className="hashtags">
          <p className="tag">#국화꽃, 유채꽃</p>
          <p className="tag">#4월</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBoxCard;
