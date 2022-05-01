import React from 'react';
import './CommentList.scss';
import Comment from '../Comment/Comment';

const CommentList = ({ addComment, setAddComment }) => {
  const deleteComment = id => {
    setAddComment(addComment.filter(x => x.id !== id));
  };

  return addComment.map(el => {
    return (
      <div key={el.id}>
        <Comment
          id={el.id}
          nickname={el.nickname}
          products={el.products}
          createdAt={el.created_at}
          content={el.content}
          deleteComment={deleteComment}
        />
      </div>
    );
  });
};

export default CommentList;
