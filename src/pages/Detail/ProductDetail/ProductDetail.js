import React from 'react';
import CircleTable from '../CircleTable/CircleTable';
import CommentList from '../CommentList/CommentList';
import './ProductDetail.scss';

function ProductDetail({
  addComment,
  setAddComment,
  inputContent,
  setInputContent,
}) {
  const postComment = e => {
    e.preventDefault();
    let copyComment = [...addComment];
    if (inputContent) {
      copyComment.unshift({
        id: '8',
        nickname: '에베레베',
        products: '샴푸',
        created_at: '언제든',
        content: inputContent,
      });
      setAddComment(copyComment);
      setInputContent('');
    }
  };

  // const deleteComment = id => {
  //   setAddComment(addComment.filter(x => x.id !== id));
  // };
  return (
    <div className="productDetail">
      <div className="detailDescription">
        <div className="detailCard">
          <img
            alt="productImage"
            className="productImg"
            src="/images/위코드1.jpg"
          />
        </div>
        <div className="detailedProduct">
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
          <div className="productInfoElement">주종: 리큐르</div>
          <div className="productInfoElement">도수: 13.0%</div>
          <div className="productInfoElement">용량: 500ml</div>
          <div className="productAdditional">
            <div className="productAdditionalElement">
              배송기간: 2일이내 배송
            </div>
            <div className="productAdditionalElement">
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
        <div className="twoPoint">
          <div className="pointEach">
            <div className="pointTitle">맛</div>
            <div className="chartList">
              <CircleTable />
              <CircleTable />
              <CircleTable />
              <CircleTable />
              <CircleTable />
            </div>
          </div>
          <div className="pointEach">
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
          </div>
        </div>
      </div>
      <form>
        <textarea
          placeholder="댓글을 입력하세요"
          value={inputContent}
          onChange={e => setInputContent(e.target.value)}
        />
        <div className="submitInfo">엔터키는 안먹힐걸요</div>
        <button
          onClick={e => {
            postComment(e);
          }}
        >
          여기를 눌러서 댓글을 작성하세요!
        </button>
      </form>
      <CommentList addComment={addComment} setAddComment={setAddComment} />
    </div>
  );
}

export default ProductDetail;
