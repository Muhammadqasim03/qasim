// BlogPost.js

import React, { useEffect } from 'react';
import './Blog.css';

const BlogPost = ({ blog }) => {
  return (
    <div>
      {blog ? <div className="blog-post">
        <h2>{blog.title}</h2>
        <p className="date">{blog.date}</p>
        <div className="content">{blog.content}</div>
      </div> : null}
    </div>

  );
};
export default BlogPost;
