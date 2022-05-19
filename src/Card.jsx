import React from "react";
import "./App.scss";
import logof1 from "./assets/f1-logo-short.png";

const Card = (props) => {
    const clickMore = () =>{
        const base = document.getElementById("base")
        const data = document.getElementById("data")
        if (base.style.display == "inherit" && data.style.display == "none") {
            base.style.display = "none";
            data.style.display= "flex"
        } else{
            base.style.display = "inherit";
            data.style.display= "none"
        }
    }
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
                
           
            <div id="data" className="data">
                <div className="mapa">
                    <img src="https://a.espncdn.com/i/venues/f1/circuit-info/254.svg" alt="" />
                    <p>Circuit Length: <b>{props.length}</b></p>
                    <p>Laps: <b>{props.laps} </b></p>
                    <p>Turns: <b>{props.turns} </b></p>
                </div>
                <div className="horarios">
                    <div>
                        <h4>Practice</h4>
                        <p>16:00</p>
                    </div>
                    <div>
                        <h4>Qualy</h4>
                        <p>15:00</p>
                    </div>
                    <div>
                        <h3>RACE</h3>
                        <p>16:00</p>
                    </div>
                </div>
            </div>
            <a onClick={clickMore} >more</a>
        </div>
    );
   
};

export default Card;
