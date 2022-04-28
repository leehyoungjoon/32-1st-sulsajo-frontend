import React, { useState } from 'react';
import './ProductBoxCard.scss';

// {
//   id: 1,
//   name: '애플사이더',
//   category: '탁주',
//   ordercount: 1,
//   productImg:
//     'https://cdn.pixabay.com/photo/2022/04/24/15/38/bird-7153858_1280.jpg',
//   price: 14000,
//   description_detail:
//     '막걸리는 역시 장산! 한사랑 산악회 영남회장님 최애 막걸리',
//   description_tag:
//     '#달콤함 사이로 느껴지는 한국인의 정 #그리고 보리차의 구수함',
// }

const ProductBoxCard = ({ data }) => {
  return (
    <div className="sojuRecommendList">
      <img alt="recommend" src={data.productImg} className="recommendListImg" />
      <div className="contentWrapper">
        <h4 className="contentTitle">{data.description_detail}</h4>
        <p className="price">{data.price}원</p>
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
  );
};

export default ProductBoxCard;
