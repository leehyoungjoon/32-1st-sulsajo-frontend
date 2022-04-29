import React, { useEffect, useState } from 'react';
import RecommendProductBox from './components/RecommendProductBox/RecommendProductBox';
import CategoryCard from './components/CategoryCard/CategoryCard';
import ReviewCard from './components/ReviewCard/ReviewCard';
import Data from './Data';
import './Main.scss';

const Main = () => {
  const [recommendProductTakju, setRecommendProductTakju] = useState([]);
  const [recommendProductBoxies, setRecommendProductBoxies] = useState([]);

  useEffect(() => {
    const totalData = Data;

    const filteredTakju = totalData.filter(value => value.category === '탁주');
    setRecommendProductTakju(filteredTakju);

    const filteredYakju = totalData.filter(value => value.category === '약주');
    const filteredChungju = totalData.filter(
      value => value.category === '청주'
    );
    const filteredSoju = totalData.filter(value => value.category === '증류주');

    setRecommendProductBoxies([filteredYakju, filteredChungju, filteredSoju]);
  }, []);

  return (
    <section className="Main">
      <header className="mainHeader">
        <section className="mainHeaderTitle">
          <div className="mainHeaderMenu">신상품</div>
          <div className="mainHeaderMenu">베스트</div>
          <div className="mainHeaderMenu">선물세트</div>
          <div className="mainHeaderMenu">이벤트</div>
          <div className="mainSearchBar">검색어를 입력해주세요</div>
        </section>
      </header>
      <section className="mainRecommend">
        <img
          alt="recommend"
          src="/images/Main/sudamhwa.png"
          className="recommendImg"
        />
      </section>
      <section className="mainCategory">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </section>

      <RecommendProductBox data={recommendProductTakju} />

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
          <div className="specialPriceTimeBox">
            시간이 지나면 가격이 올라가요
          </div>
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

      {recommendProductBoxies.map((value, i) => (
        <RecommendProductBox key={i} data={value} />
      ))}

      <section className="mainReview">
        <div className="reviewContent">"이 순간 다른 분들은"</div>
        <div className="reviewSubContent">실시간 후기</div>
        <div className="mainReviewBox">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </section>
    </section>
  );
};

export default Main;
