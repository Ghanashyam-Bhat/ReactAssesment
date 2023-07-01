import React, { useState, useEffect } from 'react';
import './CommentList.css';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment('');
      const dataString = JSON.stringify(updatedComments);
      localStorage.setItem('comments', dataString);
    }
  };
  

  useEffect(() => {
    const storedDataString = localStorage.getItem('comments');
  
    if (storedDataString) {
      const storedData = JSON.parse(storedDataString);
      setComments([...comments, ...storedData]);
    }
  }, []);

  return (
    <div className="comment-container">
      <div className="comment-form-container">
        <form id="commentForm" className="comment-form">
          <input
            type="text"
            id="comment"
            className="comment-input"
            placeholder="Enter your comment"
            value={newComment}
            onChange={handleCommentChange}
          />
          <input
            type="button"
            id="postComment"
            value="Post"
            className="comment-button"
            onClick={handlePostComment}
          />
        </form>
      </div>
      <div className="comment-list-container">
        <ul id="commentList" className="comment-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentList;
