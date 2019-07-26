import React from "react";
import "./Nav.css";

const Nav = props => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
            <a className="navbar-brand" href="/">Click That Rick!</a>
            <div>{ props.navMessage }</div>
            <div>
                Score: { props.score } <span className="pipe">|</span>  High Score: { props.highScore }
            </div>
        </nav>
    </>
);

export default Nav;