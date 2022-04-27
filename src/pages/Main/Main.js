import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <section className="mainLayOut">
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
        <div className="drinkType">
          <img
            alt="wineImg"
            src="/images/Main/wine.png"
            className="drinkTypeImg"
          />
          <span className="drinkTypeName">소주</span>
        </div>
        <div className="drinkType">
          <img
            alt="wineImg"
            src="/images/Main/wine.png"
            className="drinkTypeImg"
          />
          <span className="drinkTypeName">소주</span>
        </div>
        <div className="drinkType">
          <img
            alt="wineImg"
            src="/images/Main/wine.png"
            className="drinkTypeImg"
          />
          <span className="drinkTypeName">소주</span>
        </div>
        <div className="drinkType">
          <img
            alt="wineImg"
            src="/images/Main/wine.png"
            className="drinkTypeImg"
          />
          <span className="drinkTypeName">소주</span>
        </div>
      </section>
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
              alt="april"
              src="/images/Main/april.png"
              className="recommendListImg"
            />
            <div className="contentWrapper">
              <h4 className="contentTitle">
                잔에 담긴 꽃, 4월 담화박스(선물용)
              </h4>
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
          <div className="sojuRecommendList">
            <img
              alt="april"
              src="/images/Main/april.png"
              className="recommendListImg"
            />
            <div className="contentWrapper">
              <h4 className="contentTitle">
                잔에 담긴 꽃, 4월 담화박스(선물용)
              </h4>
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
          <div className="sojuRecommendList">
            <img
              alt="april"
              src="/images/Main/april.png"
              className="recommendListImg"
            />
            <div className="contentWrapper">
              <h4 className="contentTitle">
                잔에 담긴 꽃, 4월 담화박스(선물용)
              </h4>
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
          <div className="sojuRecommendList">
            <img
              alt=""
              src="/images/Main/april.png"
              className="recommendListImg"
            />
            <div className="contentWrapper">
              <h4 className="contentTitle">
                잔에 담긴 꽃, 4월 담화박스(선물용)
              </h4>
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
              <div className="specialPriceBorder"> </div>
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
              alt="sojuImg"
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
      <section className="mainReview">
        <div className="reviewContent">"이 순간 다른 분들은"</div>
        <div className="reviewSubContent">실시간 후기</div>
        <div className="mainReviewBox">
          <div className="reviewBoxContent">
            <img
              alt="userProductImg"
              src="/images/Main/april.png"
              className="reviewBoxImg"
            />
            <div className="mainReviewScore">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <div className="reviewInfo">
              <div className="mainReviewComment">맛있어요</div>
            </div>
          </div>
          <div className="reviewBoxContent">
            <img
              alt="userProductImg"
              src="/images/Main/april.png"
              className="reviewBoxImg"
            />
            <div className="mainReviewScore">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <div className="reviewInfo">
              <div className="mainReviewComment">맛있어요</div>
            </div>
          </div>
          <div className="reviewBoxContent">
            <img
              alt="userProductImg"
              src="/images/Main/april.png"
              className="reviewBoxImg"
            />
            <div className="mainReviewScore">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <div className="reviewInfo">
              <div className="mainReviewComment">맛있어요</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Main;
