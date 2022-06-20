import React from "react";
import "./App.scss";

const Carrousel = (props) => {
    
    return (
        
    <div className="carrousel-mas-recientes">
        <h3> { props.name } </h3>
        <div className="carrousel-container">
            <div className="vinil-card-carrousel">
                <a href="#">
                    <img src="" alt="" />
                </a>
            </div>
            <div className="vinil-card-carrousel">
                <a href="#">
                    <img src="" alt="" />
                </a>
            </div>
            <div className="vinil-card-carrousel">
                <a href="#">
                    <img src="" alt="" />
                </a>
            </div>
            <div className="vinil-card-carrousel">
                <a href="#">
                    <img src="" alt="" />
                </a>
            </div>
            <div className="vinil-card-carrousel">
                <a href="#">
                    <img src="" alt="" />
                </a>
            </div>
        </div>
    </div>
           
        
    );
   
};

export default Carrousel;
