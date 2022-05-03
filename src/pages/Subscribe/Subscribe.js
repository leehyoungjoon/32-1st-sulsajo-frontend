import React, { useState, useRef, useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import CardBox from './CardBox/CardBox';
import './Subscribe.scss';

// const modalData = [
//   {
//     alcohol_percentage: '6.0',
//     id: 1,
//     name: '애플사이더',
//     size: 500,
//     description_tag: '#아몰랑 #배고파',
//     description_detail: '고기랑 잘 어울리는 소주',
//     price: 14000,
//     product_image:
//       'https://media.istockphoto.com/photos/open-wine-bottle-with-cork-on-white-picture-id1298570428?s=612x612',
//     category: '소주',
//     finger_food: ['골뱅이 소면', '두부 김치', '닭발'],
//     taste: [[1], [3], [2], [5], [4]],
//   },
// ];

const Subscribe = () => {
  const [index, setIndex] = useState(0);
  const [product, setProduct] = useState([]);

  const leftclickhandler = () => {
    return index !== 0 && setIndex(index - 1);
  };

  const rightclickhandler = () => {
    return index !== 2 && setIndex(index + 1);
  };

  const changeModalBtn = idx => {
    setIndex(idx);
  };

  useEffect(() => {
    fetch('http://10.58.1.7:8000/products/subscribe/2')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProduct(data.subscribe_detail[0]);
      });
  }, []);

  console.log(product);

  return (
    <div className="subscribe">
      <div className="topWrap">
        <p className="firstComment">한달에 한 번, 찾아오는 인생술 만나보세요</p>
      </div>
      <div className="scrollEvent">구독이 망설여진다면 ?</div>
      <CardBox product={product} />
      <div className="mainBanner">
        <img
          className="mainBannerImg"
          src="./images/mainbanner.jpg"
          alt="상자이미지"
        />
      </div>
      <div className="firstMainText">나를 기쁘게 해주는</div>
      <div className="secondMainText">가장 편리한 방법</div>
      <button className="subscribeButton">구독하러 가기</button>
      <div className="firstSubscribeText">전통주 구독을</div>
      <div className="secondSubscribeText">술담와로 시작해야 하는 이유</div>
      <div className="landingBanner">
        <img src="./images/mainbanner1.jpg" alt="술잔이미지" />
      </div>
      <div className="descriptionWrapper">
        <div className="landingIcon">
          <img src="./images/landing-icon1.png" alt="트럭이미지" />
          <div className="firstDescription">
            유일하게 문 앞 배송이 가능한 술
          </div>
          <div className="secondDescription">편리한 홈술</div>
          <div className="thirdDescription">일상 속 소중한 담와</div>
        </div>
        <div className="landingIcon">
          <img src="./images/landing-icon2.png" alt="병체크이미지" />
          <div className="firstDescription">술에 진심인 소믈리에 픽</div>
          <div className="secondDescription">
            전국 1,200개 이상의 양조장 술 중
          </div>
          <div className="thirdDescription">잠재적 '인생술'만 골라 받기</div>
        </div>
        <div className="landingIcon">
          <img src="./images/landing-icon3.png" alt="술병가격이미지" />
          <div className="firstDescription">가성비도 잊지 않았어요!</div>
          <div className="secondDescription">단품 구매보다</div>
          <div className="thirdDescription">평균 12% 더 저렴한 술로 구성</div>
        </div>
      </div>
      <div className="dontWorry">걱정 마세요!</div>
      <Carousel
        leftclickhandler={leftclickhandler}
        rightclickhandler={rightclickhandler}
        changeModalBtn={changeModalBtn}
        index={index}
      />
      <div className="recentlyText">최근 담와, 함께 볼까요?</div>
      <div className="recentylBox">
        <div>한달에 한번씩</div>
        <div>나에게 주는 선물</div>
        <div>술담와</div>
      </div>
      <div className="converSationWrapper">
        <img src="./images/bubble_conversation.png" alt="말풍선이미지" />
      </div>
      <div className="tripDescription">
        자, 이제 나만의 '인생술 찾기 여정'을
      </div>
      <div className="startDescription">시작할 준비 되셨나요?</div>
      <button className="subscribeButton">구독하러 가기</button>
    </div>
  );
};

export default Subscribe;
