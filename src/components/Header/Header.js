import React from "react";
import "./Header.css";

const Header = props => (
    <div id="headerContainer" className="container">
        <div id="title">MLB Baseball Teams</div>
        <div id="directions">Don't click the same image twice!</div>
        <div id="scoreDiv">Score: {props.score}</div>
    </div>
);
export default Header;