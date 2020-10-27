import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light p-1">
      <img
        src={require("../images.png")}
        width="35"
        height="35"
        className="d-inline-block align-top "
        alt=""
      />
      Simple Counter-Web-App{}
      <span className="badge badge-pill badge-secondary ">{totalCounters}</span>
    </nav>
  );
};

export default NavBar;
