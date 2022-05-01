import React from 'react';
import CircleTable from '../CircleTable/CircleTable';
import CommentList from '../CommentList/CommentList';
import './ProductDetail.scss';

const ProductDetail = ({
  addComment,
  setAddComment,
  inputContent,
  setInputContent,
  count,
  setCount,
  products,
}) => {
  setAddComment(products.comment);
  const postComment = e => {
    e.preventDefault();
    let copyComment = [...addComment];
    let copyCount = count;
    copyCount += 1;
    if (inputContent) {
      copyComment.unshift({
        id: count,
        nickname: '에베레베',
        products: '샴푸',
        created_at: '언제든',
        content: inputContent,
      });
      setAddComment(copyComment);
      setInputContent('');
      setCount(copyCount);
    }
  };
  return products.map(el => {
    return (
      <div className="productDetail" key={el.id}>
        <div className="detailDescription">
          <div className="detailCard">
            <img
              alt="productImage"
              className="productImg"
              src={el.product_image}
            />
          </div>
          <div className="detailedProduct">
            <div className="productTitletoRating">
              <h1 className="productTitle">{el.name}</h1>
              <br />
              <div className="productElement">{el.description_detail}</div>
              <div className="productOrangecolor">{el.description_tag}</div>
              <div className="productRating">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
            </div>
            <div className="productInfoElement">주종: {el.category}</div>
            <div className="productInfoElement">
              도수: {el.alcohol_percentage}%
            </div>
            <div className="productInfoElement">용량: {el.size}ml</div>
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
              <div className="productValue">{el.price}원</div>
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
                <CircleTable taste={el.taste} />
                <CircleTable taste={el.taste} />
                <CircleTable taste={el.taste} />
                <CircleTable taste={el.taste} />
                <CircleTable taste={el.taste} />
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
                    {el.finger_food[0]}
                  </div>
                  <div className="andrewPicture">
                    <img
                      alt="golbang-e"
                      className="foodPicture"
                      src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg"
                    />
                    {el.finger_food[1]}
                  </div>
                  <div className="andrewPicture">
                    <img
                      alt="golbang-e"
                      className="foodPicture"
                      src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg"
                    />
                    {el.finger_food[2]}
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
  });
};

export default ProductDetail;
