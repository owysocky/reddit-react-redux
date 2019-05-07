import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

import { createStore } from "redux";
import postListReducer from "./reducers/post-list-reducer";
import { Provider } from "react-redux";

const store = createStore(postListReducer);
let unsubscribe = store.subscribe(() => console.log(store.getState()));
const render = Component => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>,

    document.getElementById("react-app-root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
