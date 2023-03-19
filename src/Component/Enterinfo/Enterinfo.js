import React from "react";
import "./style-Enterinfo.css";
const Enterinfo = (props) => {
  return (
    <form onSubmit={props.handleRequest}>
      <input type="text" placeholder="Your City"></input>
      <input type="text" placeholder="Your Country"></input>
      <button>Get Weather</button>
    </form>
  );
};

export default Enterinfo;
