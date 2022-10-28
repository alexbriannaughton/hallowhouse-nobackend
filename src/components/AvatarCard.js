import React from "react";
import { useNavigate } from "react-router-dom";


function AvatarCard({avatar, setSelectedAvatar}){
    const navigate=useNavigate()

    function handleClick(avatar){
        setSelectedAvatar(avatar.image)
        navigate("/spookystreet")
    }
    return(
        <div className="card">
            <h1 style={{fontSize: "30px"}}>{avatar.name}</h1>
            <img 
            className="avatarImage"
            alt={avatar.name}
            onClick={() => handleClick(avatar)}
            src={avatar.image}
            />
        </div>
    )
}

export default AvatarCard;