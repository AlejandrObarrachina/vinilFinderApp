import React from "react";
import "./App.scss";

const CardContent = (props) => {
    
    return (
        <div >
                     
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
            
        </div>
    );
   
};

export default CardContent;
