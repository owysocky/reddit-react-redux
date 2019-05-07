import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import NewPostForm from "./NewPostForm";
import Error404 from "./Error404";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostList from "./PostList";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PostList postList={this.props.masterPostList} />}
          />
          <Route path="/newpost" render={() => <NewPostForm />} />

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList: state
  };
};

App.propTypes = {
  masterPostList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
