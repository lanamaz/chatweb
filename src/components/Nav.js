import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
// import { Navigate, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="containerLink">
        <ul>
          <Link to="/home"> Home </Link>
          <Link to="/Chat">Chat </Link>
          <Link to="/login"> login </Link>
          <Link to="/Chat/:from/:to"> </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
