import React from 'react';
import Comment from '../Comment';

import './style.css';

export default function Post({ post }) {
  return (
    <div id="post">
      <div id="head">
        <img className="avatar" src={post.avatar} />
        <div id="personal">
          <div id="name">{post.name}</div>
          <div id="date">{post.date}</div>
        </div>
      </div>

      <div id="text">{post.text}</div>

      {post.comments && <div className="divider" />}

      {post.comments &&
        post.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
    </div>
  );
}
