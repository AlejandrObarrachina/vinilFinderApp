import React from "react";
import "./App.scss";
import logof1 from "./assets/f1-logo-short.png";

const FrontCard = (props) => {
    
    return (
        
            <div id="base" className="base">
                <p>RACE: {props.time}</p>
                <p>{props.day}</p>
                <div className="title">
                    <img className="logo" src={logof1} alt="logo f1" />
                    <h2>{props.track}</h2>
                </div>
            </div>
           
        
    );
   
};

export default FrontCard;
