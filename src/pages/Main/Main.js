import React, { useEffect, useRef, useState } from 'react';
import RecommendProductBox from './components/RecommendProductBox/RecommendProductBox';
import CategoryCard from './components/CategoryCard/CategoryCard';
import ReviewCard from './components/ReviewCard/ReviewCard';
import SearchModal from './components/SearchModal/SearchModal';
import './Main.scss';

const categoryInfo = ['탁주', '약주', '청주', '증류주', '맥주'];

const Main = () => {
  const [recommendProductBoxies, setRecommendProductBoxies] = useState([]);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const productBoxRef = useRef({});

  useEffect(() => {
    fetch('http://10.58.1.129:8000/products/productlist')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const filteredTakju = data.product_list.filter(
          value => value.category_id === 1
        );
        const filteredYakju = data.product_list.filter(
          value => value.category_id === 2
        );
        const filteredChungju = data.product_list.filter(
          value => value.category_id === 3
        );
        const filteredSoju = data.product_list.filter(
          value => value.category_id === 4
        );
        const filteredBeer = data.product_list.filter(
          value => value.category_id === 5
        );

        setRecommendProductBoxies([
          filteredTakju,
          filteredYakju,
          filteredChungju,
          filteredSoju,
          filteredBeer,
        ]);
      });
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
