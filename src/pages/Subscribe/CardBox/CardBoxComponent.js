import React from 'react';
import './CardBoxComponent.scss';

const CardBoxComponent = ({
  id,
  title,
  img,
  price,
  description,
  startDate,
  endDate,
  openModalFn,
}) => {
  return (
    <div className="cell">
      <img className="image" src={img} alt="이미지" />
      <div className="comment">
        <div className="topbox">
          <div className="header">
            <span className="box">{title}</span>
            <span className="price">{price}</span>
          </div>
          <div className="boxComment">{description}</div>
          <div className="hipoon" />
        </div>
        <div className="date">
          <div className="buyDate">{startDate}</div>
          <div className="arriveDay">{endDate}</div>
        </div>
        <button
          className="modalOpenBtn"
          type="button"
          onClick={() => openModalFn(id)}
        >
          힌트공개
        </button>
        <div className="hintBox" />
      </div>
    </div>
  );
};

export default CardBoxComponent;
