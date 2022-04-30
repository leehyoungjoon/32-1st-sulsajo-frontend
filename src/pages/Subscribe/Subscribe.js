import React, { useState, useRef } from 'react';
import Recommend from './Recommend/Recommend';
import './Subscribe.scss';

const Subscribe = () => {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const leftclickhandler = () => {
    return index !== 0 && setIndex(index - 1);
  };
  const rightclickhandler = () => {
    return index !== 2 && setIndex(index + 1);
  };

  const outModal = useRef();

  const modalPop = () => {
    setModalOpen(true);
  };

  const exitModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="mainWrap">
      <div className="topWrap">
        <p className="firstComment">한달에 한 번, 찾아오는 인생술 만나보세요</p>
      </div>
      <div className="scrollEvent">구독이 망설여진다면 ?</div>
      <div className="imageBox">
        <Recommend
          modalOpen={modalOpen}
          modalPop={modalPop}
          outModal={outModal}
          exitModal={exitModal}
        />
        {/* <Recommend
          modalOpen={modalOpen}
          outModal={outModal}
          openModal={openModal}
        /> */}
      </div>
      <div className="mainBanner">
        <img
          className="mainBannerImg"
          src="./images/landing-banner-pc1.png"
          alt="상자이미지"
        />
      </div>
      <div className="firstMainText">한 달을 특별하게 해주는</div>
      <div className="secondMainText">가장 편리한 방법</div>
      <button className="subscribeButton">구독하러 가기</button>
      <div className="firstSubscribeText">전통주 구독을</div>
      <div className="secondSubscribeText">술담와로 시작해야 하는 이유</div>
      <div className="landingBanner">
        <img src="./images/landing-banner-pc2.png" alt="술잔이미지" />
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
      <div className="dontWorryWrapper">
        <div className="leftIcon">
          <button onClick={leftclickhandler} />
        </div>
        <div className="dontWorrySlideBox">
          <div
            className="dontWorrySubSlideBox"
            style={{
              transform: `translateX(${index * -375}px)`,
              transition: `transform 1s`,
            }}
          >
            <div className="dontWorryBox">
              <img src="./images/landing-slide-icon1.png" alt="종이미지" />
              <div>결제되기 3일 전</div>
              <div>이번 달 담와박스 구성의 힌트와</div>
              <div>결제 알림 문자를 보내드려요.</div>
            </div>
            <div className="dontWorryBox">
              <img src="./images/landing-slide-icon2.png" alt="병이미지" />
              <div>노련한 소믈리에들이</div>
              <div>매달 블라인드 테이스팅을 통해</div>
              <div>누군가의 '인생술'이 될 수 있는 술들을 선별합니다.</div>
            </div>
            <div className="dontWorryBox">
              <img src="./images/landing-slide-icon3.png" alt="정지이미지" />
              <div>이번 달 구독이 힘들 것 같다면</div>
              <div>언제든 '쉬어가기' 할 수 있어요.</div>
              <div>당연히, 금액은 청구되지 않아요.</div>
            </div>
          </div>
          <div className="rightIcon">
            <button onClick={rightclickhandler} />
          </div>
          <ul className="buttonWrapper">
            <li className="slideButton" />
            <li className="slideButton" />
            <li className="slideButton" />
          </ul>
        </div>
      </div>
      <div className="recentlyText">최근 담와, 함께 볼까요?</div>
      <div className="recentylBox">
        <div>한달에 한번씩</div>
        <div>나에게 주는 선물</div>
        <div>HyeongJoon</div>
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
