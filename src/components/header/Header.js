import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ backgroundColor: "transparent", padding: "10px" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <NavLink
            to="/"
            style={{ color: "gold", textDecoration: "none", fontSize: "24px" }}
          >
            Yelp
          </NavLink>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
            Home
          </NavLink>
          <NavLink
            to="/business"
            style={{ color: "black", textDecoration: "none" }}
          >
            Business List
          </NavLink>
          <NavLink
            to="/review"
            style={{ color: "black", textDecoration: "none" }}
          >
            Review
          </NavLink>
          <NavLink
            to="/user"
            style={{ color: "black", textDecoration: "none" }}
          >
            User
          </NavLink>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "5px 10px",
              backgroundColor: "black",
              border: "1px solid lightblue",
              color: "lightblue",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          <button
            style={{
              padding: "5px 10px",
              backgroundColor: "black",
              border: "1px solid lightblue",
              color: "lightblue",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
