export default (state = {}, action) => {
  let newState;
  let newPost;
  switch (action.type) {
    case "NEW_POST":
      const { id, title, post, timeCreated } = action;
      newState = Object.assign({}, state, {
        [id]: {
          id: id,
          title: title,
          post: post,
          vote: 0,
          timeCreated: timeCreated
        }
      });
      return newState;

    case "UPVOTE":
      let newVote = state[action.id].vote + 1;
      newPost = Object.assign({}, state[action.id], { vote: newVote });
      newState = Object.assign({}, state, { [action.id]: newPost });
      return newState;

    case "DOWNVOTE":
      newPost = Object.assign({}, state[action.id]);
      newPost.vote--;
      newState = Object.assign({}, state, { [action.id]: newPost });
      return newState;
    default:
      return state;
  }
};
