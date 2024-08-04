import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostList } from "../store/posts-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="post-list">
      <div className="card post-card text-content">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <TiDelete />
          </span>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary mx-1" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
