import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import laugh from "../evil-laugh.mp3"

function GameOver(){
    const navigate = useNavigate()
    
    const laughSound = new Audio(laugh)

    useEffect(()=>{
        laughSound.play()
    })

    function handleClick(){
        navigate('/')
        window.location.href=window.location.href
    }


    return(
    <div>
        <div>
            <img alt="gameover clown" className="sewerClown" src="https://i.pinimg.com/originals/bb/2b/f0/bb2bf0a0bc00292a0ebec3cefc495b05.jpg"
            style={{ height: "700px"}}
            />
        </div>
        <button className="gameoverBtn" onClick={handleClick} >DARE TO START OVER</button>
    </div>
    )
}


export default GameOver;