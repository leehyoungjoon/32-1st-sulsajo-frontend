import React, { useEffect, useRef, useState } from 'react';
import RecommendProductBox from './components/RecommendProductBox/RecommendProductBox';
import CategoryCard from './components/CategoryCard/CategoryCard';
import ReviewCard from './components/ReviewCard/ReviewCard';
import Data from './Data';
import './Main.scss';
import SearchModal from './components/SearchModal/SearchModal';

const Main = () => {
  const [recommendProductBoxies, setRecommendProductBoxies] = useState([]);
  const categoryInfo = ['탁주', '약주', '청주', '증류주'];

  const productBoxRef = useRef({});

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const totalData = Data;

    const filteredTakju = totalData.filter(value => value.category === '탁주');
    const filteredYakju = totalData.filter(value => value.category === '약주');
    const filteredChungju = totalData.filter(
      value => value.category === '청주'
    );
    const filteredSoju = totalData.filter(value => value.category === '증류주');

    setRecommendProductBoxies([
      filteredTakju,
      filteredYakju,
      filteredChungju,
      filteredSoju,
    ]);
  }, []);

  const scrollToCard = index => {
    productBoxRef.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="Main">
      <header className="mainHeader">
        <section className="mainHeaderTitle">
          <div className="mainHeaderMenu">신상품</div>
          <div className="mainHeaderMenu">베스트</div>
          <div className="mainHeaderMenu">선물세트</div>
          <div className="mainHeaderMenu">이벤트</div>
          <div
            className="mainSearchBar"
            onClick={() => setSearchModalOpen(true)}
          >
            검색어를 입력해주세요
          </div>
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
        {categoryInfo.map((value, i) => (
          <CategoryCard
            key={i}
            index={i}
            title={value}
            scrollToCard={scrollToCard}
          />
        ))}
      </section>

      {recommendProductBoxies.map((value, i) => (
        <RecommendProductBox
          ref={el => (productBoxRef.current[i] = el)}
          key={i}
          data={value}
        />
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
      {searchModalOpen && <SearchModal closeModal={setSearchModalOpen} />}
    </section>
  );
};

export default Main;
