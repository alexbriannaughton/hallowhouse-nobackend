import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Songbar from "./Songbar";
// import Songbar from "./Songbar";

function Homepage({ handleSongClick, playing }) {

    const [form, setForm] = useState(false)
    const [inBtn, setInBtn]  =  useState(true)
    const navigate = useNavigate()
    
    function handleAvatar() {
        navigate('/AvatarPage')

    }

    function handleClick(){
        setForm(!form)
        setInBtn(!inBtn)
    }

    return (
        <div className="homePage">
            <h1 style={{margin: "0", textAlign: "center", color: "white", fontSize: "60px" }}>Welcome to Hallow House</h1>
            <button className="homeButton" onClick={handleAvatar} >Click To Choose Your Avatar</button>
            <div>
                {inBtn ?
                <button className="instructBtn" onClick={handleClick}> Click to See Instructions
                </button>
                :
                <button className="instructBtn" onClick={handleClick}> Click to Hide Instructions
                </button>
                }
            </div>
            {form? 
                <div>
                        <ul className="instructList">
                            <p className="instructions">Use left and right arrow buttons to move</p>
                            <p className="instructions">Use your up arrow to enter a house, and your down arrow to exit</p>
                            <p className="instructions">When on a house porch, press spacebar to knock on the door and hopefully get some candy</p>
                            <p className="instructions">Move your character to the edge of the screen to see some more houses</p>
                            <p className="instructions">Click on some candy for more energy</p>
                        </ul>
                </div> 
                : 
                <div></div>
                }
            <div style={{ fontSize: "650px" }}>
                <img alt="" style={{ height: "300px" }} />
                <Songbar
                    handleSongClick={handleSongClick}
                    playing={playing}
                />
            </div>
        </div>
    )
}

export default Homepage