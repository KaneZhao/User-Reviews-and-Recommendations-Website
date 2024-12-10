import { Outlet } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "./header/Header";

const Layout = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://s3-media0.fl.yelpcdn.com/educatorphoto/T3U8OES-w0Pat6ijyqf8pg/o.jpg"
  );

  const changeBackground = (image) => {
    setBackgroundImage(image);
  };

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Full screen height
    width: "100vw", // Full screen width
    display: "flex",
    flexDirection: "column",
  };

  const buttonStyle = {
    appearance: "none", // Corrected syntax
    border: "0",
    boxShadow: "none",
    color: "rgba(0,118,146,1)",
    cursor: "pointer",
    fontSize: "inherit",
    padding: "0px",
    margin: "0px",
    textAlign: "left",
    background: "#ffffff80",
    borderRadius: "5px",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    width: "10px",
    zIndex: "0",
  };

  const spanStyle = {
    cursor: "pointer",
    margin: "0",
    padding: "0",
    border: "0",
    font: "inherit",
    verticalAlign: "baseline",
    fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: "inherit",
    letterSpacing: "0px",
    lineHeight: "inherit",
    color: "inherit",
    textAlign: "left",
    fontWeight: 600,
    background: "#fff",
    borderRadius: "5px",
    display: "block",
    height: "100%",
    left: "0",
    position: "absolute",
    width: "100%",
    top: "0",
  };

  const buttonContainer = {
    margin: "0",
    padding: "0",
    border: "0",
    font: "inherit",
    verticalAlign: "baseline",
    borderColor: "rgba(240,240,240,1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    gridArea: "slide-selection",
    height: "288px",
  };

  return (
    <main style={divStyle}>
      <Outlet />
      <Header />
      <h1>Change the Background</h1>
      <div style={buttonContainer}>
        {/* Buttons to change the background */}
        <button
          style={buttonStyle}
          onClick={() =>
            changeBackground(
              "https://s3-media0.fl.yelpcdn.com/educatorphoto/T3U8OES-w0Pat6ijyqf8pg/o.jpg"
            )
          }
        >
          <span style={spanStyle}></span>
        </button>
        <button
          style={buttonStyle}
          onClick={() =>
            changeBackground(
              "https://s3-media0.fl.yelpcdn.com/educatorphoto/G0VqnNYvHYpeG1HqrOVE3g/o.jpg"
            )
          }
        >
          <span style={spanStyle}></span>
        </button>
        <button
          style={buttonStyle}
          onClick={() =>
            changeBackground(
              "https://s3-media0.fl.yelpcdn.com/educatorphoto/GTlezQc8dVGQxb_l0KhTYQ/o.jpg"
            )
          }
        >
          <span style={spanStyle}></span>
        </button>
        {/* <button
          onClick={() =>
            changeBackground(
              "https://s3-media0.fl.yelpcdn.com/educatorphoto/T3U8OES-w0Pat6ijyqf8pg/o.jpg"
            )
          }
        >
          Background 1
        </button>
        <button
          onClick={() =>
            changeBackground(
              "https://s3-media0.fl.yelpcdn.com/educatorphoto/G0VqnNYvHYpeG1HqrOVE3g/o.jpg"
            )
          }
        >
          Background 2
        </button>
        <button
          onClick={() =>
            changeBackground(
              "https://s3-media0.fl.yelpcdn.com/educatorphoto/GTlezQc8dVGQxb_l0KhTYQ/o.jpg"
            )
          }
        >
          Background 3
        </button> */}
      </div>
    </main>
  );
};

export default Layout;
