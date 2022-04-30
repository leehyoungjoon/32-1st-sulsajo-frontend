import React from 'react';
import './SpecialPriceCard.scss';

const SpecialPriceCard = () => {
  return (
    <section className="specialPriceSection">
      <section className="specialPriceBar">
        <div className="specialPriceTime">
          <div className="clockImg">
            <img
              alt="clock"
              src="/images/Main/clock.png"
              className="specialPriceImg"
            />
            <span className="specialPriceTitle">릴레이특가</span>
            <div className="specialPriceBorder" />
          </div>
          <div className="timeBox">
            <span className="countTime">43 : 31 : 58</span>
            <span className="timeText">남았어요</span>
          </div>
        </div>
        <div className="specialPriceTimeBox">시간이 지나면 가격이 올라가요</div>
      </section>
      <div className="specialPriceLink">
        <div className="specialImageWrapper">
          <img
            alt="soju"
            src="/images/Main/soju.jpeg"
            className="specialImage"
          />
        </div>
        <div className="specialContentText">
          <div className="contentText">
            <div className="contentRedBox">특가</div>
            <div className="sellingPoint">
              겨울소주 1병, 희석식 소주 10병 안부럽다
            </div>
            <div className="productName-wrapper">
              <div>겨울소주 25</div>
              <div>》</div>
            </div>
            <div className="productPrice-wrapper">
              <div className="productPriceReview">
                <div>⭐ 4.5 | </div>
                <div>리뷰 123</div>
              </div>
              <div className="productPrice">9,000원</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPriceCard;
