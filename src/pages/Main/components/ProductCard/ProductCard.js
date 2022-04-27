import { useEffect, useState } from 'react';
import './ProductCard.scss';

const ProductCard = () => {
  return (
    <section className="mainSojuRecommend">
      <div className="sectionContent">
        "어떤 술을 마실지 고민이라면, 이 술은 어때요?"
      </div>
      <div className="sectionSubContent">
        술담화 전통주 소믈리에의 이번 주 P.I.C.K!
      </div>
      <div className="viewMore">더보기 </div>
      <div className="sojuCarousel">
        <div className="sojuRecommendList">
          <img
            alt=""
            src="/images/Main/april.png"
            className="recommendListImg"
          />
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
      </div>
    </section>
  );
};
