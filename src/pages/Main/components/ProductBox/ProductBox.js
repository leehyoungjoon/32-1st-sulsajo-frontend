import { useEffect, useState } from 'react';
import ProductBoxCard from '../ProductBoxCard/ProductBoxCard';
import './ProductBox.scss';

const ProductBox = () => {
  const [recommendList, setRecommendList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  const [recoomendTitle, setRecommendTitle] = useState('');
  const [recoomendSubTitle, setRecommendSubTitle] = useState('');
  const [productCardNum, setProductCardNum] = useState(1);

  useEffect(() => {
    //setRecommentList(백엔드에서 fetch해온 데이터)
  });
  const moveCardLeft = () => {
    if (productCardNum !== 1) {
      setProductCardNum(productCardNum - 1);
    }
  };
  const moveCardRight = () => {
    if (productCardNum !== 3) {
      setProductCardNum(productCardNum + 1);
    }
  };

  return (
    <section className="mainSojuRecommend">
      <div className="sectionContent">
        "어떤 술을 마실지 고민이라면, 이 술은 어때요?"
      </div>
      <div className="sectionSubContent">
        술담화 전통주 소믈리에의 이번 주 P.I.C.K!
      </div>
      <div className="viewMore">더보기 </div>
      <div className="sojuCarouselOuter">
        <div className={`sojuCarouselSet${productCardNum}`}>
          {recommendList.map(el => (
            <ProductBoxCard />
          ))}
        </div>
      </div>
      <button className="arrowLeftBtn">
        <i className="fa-solid fa-angle-left" onClick={moveCardLeft} />
      </button>
      <button className="arrowRightBtn">
        <i className="fa-solid fa-angle-right" onClick={moveCardRight} />
      </button>
    </section>
  );
};

export default ProductBox;
