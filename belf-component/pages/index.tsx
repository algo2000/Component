import React from 'react';
import PostList from '../components/post-list';
import posts from '../data/posts.json';

const IndexPage = () => (
  <div className="container">
    <PostList posts={posts} />
  </div>
)

export default IndexPage
