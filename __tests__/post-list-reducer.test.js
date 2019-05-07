import postListReducer from "./../src/reducers/post-list-reducer";
import Moment from "moment";

describe("test postListReducer", () => {
  let action;
  let testPost = {
    title: "Gentle doggo",
    post: "Doggo was taught to be gentle when taking treats",
    id: 0,
    vote: 23,
    timeCreated: Moment()
  };
  test("returns empty object when not defined", () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test("add new post", () => {
    const { title, post, id, timeCreated } = testPost;
    action = {
      type: "NEW_POST",
      title: title,
      post: post,
      id: id,
      timeCreated: timeCreated
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        post: post,
        vote: 0,
        id: id,
        timeCreated: timeCreated
      }
    });
  });

  test("upvote post", () => {
    const { title, post, id, timeCreated, vote } = testPost;
    let existingPost = {
      [id]: {
        title: title,
        post: post,
        vote: vote,
        id: id,
        timeCreated: timeCreated
      }
    };

    let newPost = {
      [id]: {
        title: title,
        post: post,
        vote: vote + 1,
        id: id,
        timeCreated: timeCreated
      }
    };

    action = { type: "UPVOTE", id: id };
    expect(postListReducer(existingPost, action)).toEqual(newPost);
  });
});
