import React from "react";
import "./App.scss";

const CarrouselItem = (props) => {
    
    return (
        
    <div className="vinil-card-carrousel">
        <a >
            <div className="data-cnt">
                <h3> { props.vinilTitle } </h3>
                <p> { props.vinilAuthor} </p>
                <img src={ props.vinilPic } alt="foto del vinilo" />
                <p className="vinil-category"> { props.vinilContent } </p>
            </div>
            
            
        </a>
    </div>
           
    );
};

export default CarrouselItem;
