import React from "react";
import Post from "./Post";

function PostList(props) {
  return (
    <div>
      {Object.keys(props.postList).map(postId => {
        var post = props.postList[postId];
        return <Post post={post} key={postId} />;
      })}
      <hr />
    </div>
  );
}

export default PostList;
