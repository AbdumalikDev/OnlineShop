import React from 'react';
import Rating from './Rating';

const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      <div>
        <h4> {comment.fullName} </h4>
        <div className='rating'>
          <Rating rating={comment.rating} />
        </div>
      </div>
      <div>
        <h3>Hello</h3>
        <p>{comment.comment}</p>
      </div>
      <div>
        <div className='data'> {comment.data} </div>
        <div className='likes'>
          <div>
            <i className='fa fa-thumbs-up'></i>
            <span> {comment.likes} </span>
          </div>
          <div>
            <i className='fa fa-thumbs-down'></i>
            <span> {comment.dislikes} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
