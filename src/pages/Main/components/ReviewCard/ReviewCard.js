import React, { useState } from 'react';
import './ReviewCard.scss';

const ReviewCard = () => {
  return (
    <div className="reviewBoxContent">
      <img
        alt="userProduct"
        src="/images/Main/april.png"
        className="reviewBoxImg"
      />
      <div className="mainReviewScore">⭐ ⭐ ⭐ ⭐ ⭐</div>
      <div className="reviewInfo">
        <div className="mainReviewComment">맛있어요</div>
      </div>
    </div>
  );
};

export default ReviewCard;
