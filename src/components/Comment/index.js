import React from 'react';
import Post from '../Post';
import './style.css';

export default function Comment({ comment }) {
  return (
    <div id="wrapper">
      <img src={comment.avatar} className="avatar" />
      <div id="comment">
        <strong>{comment.name}</strong> {comment.text}
      </div>
    </div>
  );
}
