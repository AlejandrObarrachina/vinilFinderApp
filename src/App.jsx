import React from "react";
import Card from "./Card";
import "./App.scss";

// generación de componente

const App = () => {
    return (
        <div className="body-wrapper">
            <Card track={"Sakhir"} time={"16:00"} day={"20/04"} />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default App;
// Exports
