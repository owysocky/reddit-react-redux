import React from "react";
import { connect } from "react-redux";

function Post(props) {
  function handleDislike() {
    const { dispatch } = props;
    const action = {
      type: "DOWNVOTE",
      id: props.post.id
    };
    dispatch(action);
    //props.dispatch({type: "DOWNVOTE", id: props.post.id});
  }

  let { post } = props;
  return (
    <div>
      <h3>{post.title}</h3>
      <h4>{post.post}</h4>
      <h4>Likes: {post.votes}</h4>
      <p>{post.timeCreated}</p>
      <button
        onClick={() => {
          props.dispatch({ type: "UPVOTE", id: props.post.id });
        }}
      >
        Like
      </button>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );
}

export default connect()(Post);
