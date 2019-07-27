import React from "react";
import "./Nav.css";
import reactLogo from "../../images/reactLogo.svg";

const Nav = props => (
    <>
        <nav className="navbar navbar-expand-lg justify-content-between fixed-top py-0">
            <div className="navbar-brand" href="/">Click That Rick</div>
            <div className="d-flex align-items-center text-center">
                <img className="react-logo" src={reactLogo} alt="logo"/>
                <div className={"nav-msg mx-2 " + props.navMsgColor}>{ props.navMessage }</div>
                <img className="react-logo" src={reactLogo} alt="logo"/>
            </div>
            <div className="score">Score: {props.score} <span className="pipe">|</span>High Score: {props.highScore}</div>
        </nav>
    </>
);

export default Nav;