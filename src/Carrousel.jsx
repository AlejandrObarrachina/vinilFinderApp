import React from "react";
import "./App.scss";
import CarrouselItem from "./CarrouselItem";

const Carrousel = (props) => {
    
    const vinilData = [
        {vinilName: "S16", content: "Alternative, Mechanical", author: "Woodkid", image: "https://www.mondosonoro.com/wp-content/uploads/2020/10/Woodkid-S16-disco.jpg", genero: "pop-español"},
        {vinilName: "Hurry Up!", content: "Alternative, BSO", author: "M83", image: "https://m.media-amazon.com/images/I/81tEvdYVSPL._AC_SL1417_.jpg", genero: "pop-american"},
        {vinilName: "Interstellar ", content: "Epic, BSO", author: "Hans Zimmer", image: "https://m.media-amazon.com/images/I/A1smtRIAUvL._SL1500_.jpg", genero: "rock"}
    ]
    return (
        
    <div className="carrousel-mas-recientes">
        <h3> { props.name } </h3>
        <div className="carrousel-container">

            {vinilData.map((vinil) => 
            <CarrouselItem vinilTitle = { vinil.vinilName } vinilContent= { vinil.content } vinilAuthor= { vinil.author } vinilPic= {vinil.image} />)}

        </div>
    </div>
);
   
};

export default Carrousel;
