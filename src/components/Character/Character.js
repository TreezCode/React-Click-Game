import React from "react";
import "./Character.css";

// Define onClick funtion as cb so clicked element value can be passed to props.clickEvent to check if clicked or not
const Character = props => (
    <>
        <div className="card p-0" onClick={event => props.clickEvent(event.target.src)}>
            <img className="img-fluid image" src={props.name} alt="Rick"/>
        </div>
    </>
);

export default Character;