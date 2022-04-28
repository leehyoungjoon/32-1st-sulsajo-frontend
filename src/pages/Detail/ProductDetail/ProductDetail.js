import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="detailWrapper">
      <div className="detailDescription">
        <div className="detailCard">
          <img
            alt="productImage"
            className="productImg"
            src="https://cdn.pixabay.com/photo/2015/06/24/13/31/beer-820011_1280.jpg"
          />
        </div>
        <div className="productDetail">
          <div className="productTitletoRating">
            <h1 className="productTitle">매실원주</h1>
            <br />
            <div className="productElement">
              맛있게 한잔하고 싶은 날에 찾아주세요
            </div>
            <div className="productOrangecolor">
              #달콤한 매실주 #매실음료 아님!
            </div>
            <div className="productRating">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>

          <div className="productInfo">
            <div className="productElement">주종: 리큐르</div>
            <div className="productElement">도수: 13.0%</div>
            <div className="productElement">용량: 500ml</div>
          </div>
          <div className="productAdditional">
            <div className="productElement">배송기간: 2일이내 배송</div>
            <div className="productElement">
              수상: 2017년 우리술 품평회 기타주류 우수상
            </div>
          </div>
          <div className="productPrice">
            <div className="productElement">판매가격:</div>
            <div className="productValue">4,900원</div>
          </div>
          <div className="blueColor">유통기한: 유통기한 없음</div>
          <div className="blueColor">보관방법: 상온 보관 가능</div>
        </div>
      </div>
      <div className="hacksim">
        <div className="pointFont">핵심포인트</div>
        <div className="threePoint">
          <div className="pointEach">
            <img
              alt="tasteimage"
              className="pointImg"
              src="https://cdn.pixabay.com/photo/2016/04/01/09/52/cartoon-1299636_960_720.png"
            />
            <div className="pointTitle">맛</div>
            <div className="pointFont">
              달달구리하게 한잔하고 싶을 때 찾아주세요!
            </div>
          </div>
          <div className="pointEach">
            <img
              alt="tasteimage"
              className="pointImg"
              src="https://cdn.pixabay.com/photo/2020/09/09/09/00/cooking-5557053_960_720.jpg"
            />
            <div className="pointTitle">안주</div>
            <div className="pointFont">
              달달구리하게 한잔하고 싶을 때 찾아주세요!
            </div>
          </div>
          <div className="pointEach">
            <img
              alt="tasteimage"
              className="pointImg"
              src="https://cdn.pixabay.com/photo/2018/03/26/14/07/space-3262811_960_720.jpg"
            />
            <div className="pointTitle">담아</div>
            <div className="pointFont">
              달달구리하게 한잔하고 싶을 때 찾아주세요!
            </div>
          </div>
        </div>
      </div>
      <div className="andrew">
        어울리는 안주
        <div className="andrewPictures">
          <div className="andrewPicture">
            <img
              alt="golbang-e"
              className="foodPicture"
              src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg"
            />
            골뱅이 소면 무침
          </div>
          <div className="andrewPicture">
            <img
              alt="golbang-e"
              className="foodPicture"
              src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg"
            />
            골뱅이 소면 무침
          </div>
          <div className="andrewPicture">
            <img
              alt="golbang-e"
              className="foodPicture"
              src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg"
            />
            골뱅이 소면 무침
          </div>
        </div>
      </div>
      <div className="circleChart">
        <div className="chartList">
          <div className="chart">
            <svg viexBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="orange"
                strokeWidth="15"
                strokeDasharray={`${2 * Math.PI * 40 * 0} ${
                  2 * Math.PI * 40 * 1
                }`}
                strokeDashoffset={2 * Math.PI * 40 * 0.25}
              />
            </svg>
            <div className="strength">없음</div>
            {/* <div className="text">고소한 향</div> */}
          </div>
          <div className="chart">
            <svg viexBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="orange"
                strokeWidth="15"
                strokeDasharray={`${2 * Math.PI * 40 * 0.65} ${
                  2 * Math.PI * 40 * 0.35
                }`}
                strokeDashoffset={2 * Math.PI * 40 * 0.25}
              />
            </svg>
            <div className="strength">강함</div>
            {/* <div className="text">화사한 향</div> */}
          </div>
          <div className="chart">
            <svg viexBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="orange"
                strokeWidth="15"
                strokeDasharray={`${2 * Math.PI * 40 * 0.65} ${
                  2 * Math.PI * 40 * 0.35
                }`}
                strokeDashoffset={2 * Math.PI * 40 * 0.25}
              />
            </svg>
            <div className="strength">강함</div>
            {/* <div className="text">맛의 강도</div> */}
          </div>
          <div className="chart">
            <svg viexBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="orange"
                strokeWidth="15"
                strokeDasharray={`${2 * Math.PI * 40 * 0.4} ${
                  2 * Math.PI * 40 * 0.6
                }`}
                strokeDashoffset={2 * Math.PI * 40 * 0.25}
              />
            </svg>
            <div className="strength">약함</div>
            {/* <div className="text">바디감</div> */}
          </div>
          <div className="chart">
            <svg viexBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="orange"
                strokeWidth="15"
                strokeDasharray={`${2 * Math.PI * 40 * 0.3} ${
                  2 * Math.PI * 40 * 0.7
                }`}
                strokeDashoffset={2 * Math.PI * 40 * 0.25}
              />
            </svg>
            <div className="strength">약함</div>
            {/* <div className="text">매운맛</div> */}
          </div>
        </div>
        <div className="textWrapper">
          <div className="text">고소한 향</div>
          <div className="text">화사한 향</div>
          <div className="text">맛의 강도</div>
          <div className="text">바디감</div>
          <div className="text">매운맛</div>
        </div>
      </div>
      <img
        alt="담화배송"
        className="delivery"
        src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/content_images/contents_images-1648191311795-delivery_detail.png"
      />
      <div className="productSpecify">
        <img
          alt="productImg"
          className="productSpecified"
          src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/content_images/contents_images-1637223501436-%EB%A7%A4%EC%8B%A4%EC%9B%90%EC%A3%BC.jpg"
        />
        <img
          alt="productImg"
          className="productSpecified"
          src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/content_images/contents_images-1637223512593-%EB%A7%A4%EC%8B%A4%EC%9B%90%EC%A3%BC-3.jpg"
        />
        <img
          alt="productImg"
          className="productSpecified"
          src="https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/content_images/contents_images-1637223518341-%EB%A7%A4%EC%8B%A4%EC%9B%90%EC%A3%BC-6.jpg"
        />
      </div>
    </div>
  );
};

export default ProductDetail;
