import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.scss";
import { getAllTracks } from "./service/api";
// import useApi from "./service/api";

// generación de componente

function App() {
    const [trackList, setTrack] = useState([]);
    useEffect(() => {
        getAllTracks().then((data) => setTrack(data.gp));
    }, []);
    // const getTracks = () => {
    //     getAllTracks().then((data) => data.gp);
    // };

    return (
        <div className="body-wrapper">
            {trackList &&
                trackList.map((track) => {
                    return (
                        <Card
                            track={track.track}
                            time={track.time}
                            day={track.day}
                        />
                    );
                })}
        </div>
    );
}

export default App;
// Exports
