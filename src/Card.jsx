import React from "react";
import "./App.scss";
import CardContent from "./CardContent"
import logof1 from "./assets/f1-logo-short.png";
import ToogleButton from "./ToggleButton";

const Card = (props) => {
    
    return (
        <div className="card-wrapper">
            <div id="base" className="base">
                <p>RACE: {props.time}</p>
                <p>{props.day}</p>
                <div className="title">
                    <img className="logo" src={logof1} alt="logo f1" />
                    <h2>{props.track}</h2>
                </div>
            </div>
            <CardContent />
            <ToogleButton/>
        </div>
    );
   
};

export default Card;
