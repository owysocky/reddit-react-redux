import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Help Queue!</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/newticket">Create Ticket</Link>
      <br />
      <Link to="/admin">Admin</Link>
      <br />
      <Link to="/wrongpage">to non existing page</Link>
    </div>
  );
}

export default Header;
