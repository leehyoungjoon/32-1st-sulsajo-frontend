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
          <img alt="" src="/images/Main/wine.png" className="drinkTypeImg" />
          <span className="drinkTypeName">소주</span>
        </div>
        <div className="drinkType">
          <img alt="" src="/images/Main/wine.png" className="drinkTypeImg" />
          <span className="drinkTypeName">소주</span>
        </div>
        <div className="drinkType">
          <img alt="" src="/images/Main/wine.png" className="drinkTypeImg" />
          <span className="drinkTypeName">소주</span>
        </div>
        <div className="drinkType">
          <img alt="" src="/images/Main/wine.png" className="drinkTypeImg" />
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
            <div className="specialPrice">릴레이특가</div>
            <div>43시간 남았어요</div>
          </div>
          <div className="specialPriceTimeBox">
            시간이 지나면 가격이 올라가요
          </div>
        </section>
        <div className="specialPriceImg">
          <img alt="specialPrice" src="/images/Main/logo.jpg" />
        </div>
      </section>
    </section>
  );
};

export default Main;
