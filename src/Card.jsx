import React from "react";
import "./App.scss";
import CardContent from "./CardContent"
import ToogleButton from "./ToggleButton";
import FrontCard from "./FrontCard"
import logof1 from "./assets/f1-logo-short.png";


const Card = (props) => {
    
    return (
        <div className="card-wrapper">
            <FrontCard />
            <CardContent  />
            <ToogleButton />
        </div>
    );
   
};

export default Card;
