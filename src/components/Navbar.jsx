import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="logo">JobPortal</div>

      <div className="nav-links">
        <Link to="/">Jobs</Link>
        <Link to="/">Explore</Link>
        <Link to="/">Companies</Link>
        <Link to="/">About</Link>
      </div>

      <div className="nav-right">
        <button className="upload-btn">Post Job</button>
        <Link to="/login" className="profile-btn">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;