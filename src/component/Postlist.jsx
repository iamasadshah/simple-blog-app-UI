import React, { useContext } from "react";
import Post from "./Post";
import { PostList as postListDate } from "../store/posts-list-store";
import WelcomeMessage from "./WelcomeMessage";

const Postlist = () => {
  const { postList } = useContext(postListDate);
  console.log(postList);
  return (
    <div id="blogs">
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Postlist;
