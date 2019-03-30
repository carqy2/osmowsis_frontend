import React, { Component } from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="input-group">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile04"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile04">
            Upload file
          </label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
