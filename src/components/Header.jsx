import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Forum</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/newpost">Create Post</Link>
      <br />

      <Link to="/wrongpage">to non existing page</Link>
    </div>
  );
}

export default Header;
