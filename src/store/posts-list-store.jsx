import { act, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST_LIST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispachPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispachPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispachPostList({
      type: "DELETE_POST_LIST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Hello this is first title",
    body: "This is the body of the first post",
    reaction: 100,
    userId: "98",
    tags: ["hh", "dd", "vv"],
  },
  {
    id: "2",
    title: "Hello this is 2nd title",
    body: "This is the body of the 2nd post",
    reaction: 100,
    userId: "99",
    tags: ["hh", "dd", "vv"],
  },
];
export default PostListProvider;
