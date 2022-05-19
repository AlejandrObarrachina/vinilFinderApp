import React from "react";
import "./App.scss";

const Header = () =>{
    const headerBg = document.getElementById('header')
    const overMenu1 = () => {
        headerBg.backgroundColor = 'red';

    }
    // const overMenu2 = () =>{
    //     if (headerBg.style.backgroundColor = 'inherit') {
    //         headerBg.style.backgroundColor = 'yellow'
    //     } 

    // }
    // const overMenu3 = () =>{
    //     if (headerBg.style.backgroundColor = 'inherit') {
    //         headerBg.style.backgroundColor = 'green'
    //     } 

    // }
    // const overMenuW = () =>{
    //     if (headerBg.style.backgroundColor = 'inherit') {
    //         headerBg.style.backgroundColor = 'purple'
    //     } 

    // }
    // const overMenuPC = () =>{
    //     if (headerBg.style.backgroundColor = 'inherit') {
    //         headerBg.style.backgroundColor = 'purple'
    //     } 

    // }
   
    return(
        <header id="header">
                <div className="title-header">
                    <h1>FORMULA CALENDAR</h1>
                </div>
                <div className="buttons-menu">
                    <a onMouseOver={overMenu1} href="#">Formula 1</a>
                    {/* <a onMouseOver={overMenu2} href="#">Formula 2</a>
                    <a onMouseOver={overMenu3} href="#">Formula 3</a>
                    <a onMouseOver={overMenuW} href="#">Formula Women</a>
                    <a onMouseOver={overMenuPC} href="#">Porsche Cup</a> */}
                </div>
            </header>
    )
}

export default Header;