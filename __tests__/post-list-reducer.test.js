import postListReducer from "./../src/reducers/post-list-reducer";
import Moment from "moment";

describe("test postListReducer", () => {
  let action;
  let testData = {
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
    const { title, post, id, timeCreated } = testData;
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

  test("downvote post", () => {
    const { title, post, id, vote, timeCreated } = testData;
    action = {
      type: "DOWNVOTE",
      id: id
    };
    let oldPost = {
      [id]: {
        title: title,
        post: post,
        vote: vote,
        timeCreated: timeCreated,
        id: id
      }
    };
    let newPost = {
      [id]: {
        title: title,
        post: post,
        vote: vote - 1,
        timeCreated: timeCreated,
        id: id
      }
    };
    expect(postListReducer(oldPost, action)).toEqual(newPost);
  });
});
