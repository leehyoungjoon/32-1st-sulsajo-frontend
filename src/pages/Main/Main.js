import React, { useEffect, useRef, useState } from 'react';
import RecommendProductBox from './components/RecommendProductBox/RecommendProductBox';
import CategoryCard from './components/CategoryCard/CategoryCard';
import ReviewCard from './components/ReviewCard/ReviewCard';
import './Main.scss';
import MainHeader from './components/MainHeader/MainHeader';

const categoryInfo = ['탁주', '약주', '청주', '증류주', '맥주'];

const Main = () => {
  const [recommendProductBoxies, setRecommendProductBoxies] = useState([]);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const productBoxRef = useRef({});

  useEffect(() => {
    fetch('http://10.58.3.97:8000/products/list')
      .then(res => res.json())

      .then(data => {
        setData(data);
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
      <MainHeader />
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
    </section>
  );
};

export default Main;
