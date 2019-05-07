import postListReducer from "./../src/reducers/post-list-reducer";

describe("test postListReducer", () => {
  test("returns empty object when not defined", () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
});
