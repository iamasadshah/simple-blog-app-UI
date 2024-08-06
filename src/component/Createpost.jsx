import React, { useContext, useRef } from "react";
import { PostList } from "../store/posts-list-store";
import { useNavigate } from "react-router-dom";
const Createpost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault;
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <div className="create-post">
      <form className="create-psot" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter You user-Id
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
            maxLength={"120"}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Add Title
          </label>
          <input
            ref={postTitleElement}
            type="text"
            className="form-control"
            id="title"
            maxLength={"120"}
          />
        </div>
        <div className="mb-3 floating-label-container">
          What do You want to write...
          <textarea
            ref={postBodyElement}
            rows={"5"}
            type="text"
            className="form-control"
            id="article"
            placeholder="Start writing..."
          />
          <label htmlFor="article" className="floating-label"></label>
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Total Number of Reactions
          </label>
          <input
            ref={reactionsElement}
            type="number"
            className="form-control"
            id="reactions"
            maxLength={"120"}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter Your Tags here...
          </label>
          <input
            ref={tagsElement}
            placeholder="Enter tags using Space..."
            type="text"
            className="form-control"
            id="tags"
            maxLength={"120"}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Createpost;
