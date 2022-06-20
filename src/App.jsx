import React, { useState, useEffect } from "react";
import Buscador from "./Buscador";
import "./App.scss";
import cx from 'classnames';
import Header from "./Header"
import Carrousel from "./Carrousel";
// import useApi from "./service/api";

// generación de componente

function App() {
   
    const carrouselNameRecientes = "Más recientes";
    const carrouselNameVendedoresTop = "De nuestros mejores vendedores";
    return (
        <div className="body-wrapper">
            <Header/>
            <Buscador/>
            <Carrousel name= { carrouselNameRecientes } />
            <Carrousel name= { carrouselNameVendedoresTop } />

            
        </div>
    );
}

export default App;
// Exports
