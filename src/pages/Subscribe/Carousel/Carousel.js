import React from 'react';
import './Carousel.scss';

const Carousel = ({ leftclickhandler, rightclickhandler, index }) => {
  return (
    <div className="Carousel">
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
              <img src="images/landing-slide-icon1.png" alt="종이미지" />
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
    </div>
  );
};

export default Carousel;
