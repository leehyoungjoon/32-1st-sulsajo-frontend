import React from 'react';
import './Comment.scss';

const Comment = ({ nickname, products, createdAt, content, deleteComment }) => {
  return (
    <div className="comment">
      <div className="infoContainer">
        <div className="userId">{nickname}</div>
        <div className="elseInfo">
          <div className="product">{products}</div>
          <div className="starRating">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <div className="commentTime">{createdAt}</div>
          <button onClick={deleteComment}>X</button>
        </div>
      </div>
      <div className="showComment">
        <div className="commentBox">{content}</div>
      </div>
    </div>
  );
};

export default Comment;
