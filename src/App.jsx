import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.scss";
import cx from 'classnames';
import { getAllTracks } from "./service/api";
import Header from "./Header"
// import useApi from "./service/api";

// generación de componente

function App() {
    /*const [trackList, setTrack] = useState([]);
    useEffect(() => {
        getAllTracks().then((data) => setTrack(data.gp));
    }, []); 
     const getTracks = () => {
      getAllTracks().then((data) => data.gp);
 };*/

const trackList= [
    {
    track:"Bahrein",
    time:"16:00",
    day:"Thuesday",
    length:"4567m",
    laps:"65",
    turns: "16",
    key:1},
    {
    track:"Portimao",
    time:"12:00",
    day:"Wednesday",
    length:"267m",
    laps:"65",
    turns: "16",
key:2},
    {
    track:"Lukaku",
    time:"13:00",
    day:"Monday",
    length:"3567m",
    laps: "65",
    turns: "16",
    key:3
    
    }
]

    return (
        <div className="body-wrapper">
            <Header />
            {trackList &&
                trackList.map((track) => {
                    return (
                        <Card
                            track={track.track}
                            time={track.time}
                            day={track.day}
                            length={track.length}
                            laps={track.laps}
                            turns={track.turns}
                        />
                    );
                })}
        </div>
    );
}

export default App;
// Exports
