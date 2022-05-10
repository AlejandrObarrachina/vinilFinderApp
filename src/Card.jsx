import React from "react";
import "./App.scss";
import logof1 from "./assets/f1-logo.png";

const Card = (props) => {
    return (
        <div className="card-wrapper">
            <div className="title">
                <img className="logo" src={logof1} alt="logo f1" />
                <h2>{props.track}</h2>
            </div>
            <p>RACE: {props.time}</p>
            <p>{props.day}</p>
            <a href="#">+</a>
        </div>
    );
};

export default Card;
