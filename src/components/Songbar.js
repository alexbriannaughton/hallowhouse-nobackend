import React from "react";

function Songbar({handleSongClick, playing}){
    return (
        <button className="music-bar" onClick={handleSongClick}>{playing===true ? "Pause music" : "Play some spooky tunes" }</button>
    )
}

export default Songbar