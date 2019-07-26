import React from "react";
import "./Container.css";
import Character from "../Character";

const Container = props => (
    <div className={ 
        props.shake
            ? "container d-flex flex-wrap justify-content-center shake my-4" 
            : "container d-flex flex-wrap justify-content-center my-5"
        }
    >
        { props.characters.map((a, i) => <Character name={a} key={i} clickEvent={props.clickEvent} />) }
    </div>
);

export default Container;