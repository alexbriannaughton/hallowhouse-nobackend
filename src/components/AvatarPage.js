import React from "react";
import AvatarCard from "./AvatarCard";
import UserForm from "./UserForm";
import Songbar from "./Songbar";

function AvatarPage({avatars, setSelectedAvatar, image, name, setImage, setName, setAvatar, playing, handleSongClick}){

    function handleSubmit(e){
        e.preventDefault()
        const newAvatar={
            name: name,
            image: image
        }
        fetch("http://localhost:3001/avatars", {
            method:"POST",
            headers:{
              "content-Type": "application/json",
            }, 
            body: JSON.stringify(newAvatar),
          })
          .then((r) => r.json())
          .then(setAvatar([...avatars, newAvatar]))
        }
    //handleInput Name for form
    function handleName(e){
        setName(e.target.value)
    }

    //handleInputImage for form
    function handleImage(e){
        setImage(e.target.value)
    }

    //render each Avatar in AvatarCard
    function renderAvatar() {
        return avatars.map(avatar => <AvatarCard key={avatar.id} avatar={avatar} setSelectedAvatar={setSelectedAvatar}/>
        )
    }

    //return JSX
    return(
        <div className="avatarPage">
            <h1 className="avtarPageTitle">Choose Your Avatar</h1>
            {renderAvatar()}
            <UserForm handleSubmit={handleSubmit} handleName={handleName} image={image} name={name} handleImage={handleImage}/>
            <div>
                <img alt="orange background" className="fillImage"/>
            </div>
            <Songbar
            playing={playing}
            handleSongClick={handleSongClick}
            />
        </div>
    )
}

export default AvatarPage;