import React, { useState, useEffect } from "react";
import Buscador from "./Buscador";
import "./App.scss";
import cx from 'classnames';
import Header from "./Header"
import Carrousel from "./Carrousel";
// import useApi from "./service/api";

// generación de componente

function App() {
   

    return (
        <div className="body-wrapper">
            <Header/>
            <Buscador/>
            <Carrousel/>
            <Carrousel/>

            
        </div>
    );
}

export default App;
// Exports
