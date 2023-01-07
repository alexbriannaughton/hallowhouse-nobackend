import React from 'react';
// import './App.css';
import SpookyStreet from './SpookyStreet'
import HousePorch from './HousePorch'
import Homepage from './Homepage'
import GameOver from './GameOver'
import AvatarPage from './AvatarPage';
import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react";
import music from "../WAC.wav"


function App() {
  const [houses, setHouses] = useState([])
  const [houseIndex, setHouseIndex] = useState(0)
  const [ghostLoc, setGhostLoc] = useState(0)
  const [avatars, setAvatar] = useState([])
  const [selectedAvatar, setSelectedAvatar] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [width, setWidth] = useState("500")
  const [energy, setEnergy] = useState("100")
  const [candies, setCandies] = useState([])
  const [currentPorch, setCurrentPorch] = useState({})
  const [playing, isPlaying] = useState(false)
  const [color, setColor] = useState("green")

  useEffect(() => {
    setHouses(
      [
        {
          "id": 1,
          "image": "https://i.imgur.com/nQY1VK2.png"
        },
        {
          "id": 2,
          "image": "https://i.imgur.com/ycIYC36.png"
        },
        {
          "id": 3,
          "image": "https://i.imgur.com/AD7EP2w.png"
        },
        {
          "id": 4,
          "image": "https://i.imgur.com/BB76G1Y.png"
        },
        {
          "id": 5,
          "image": "https://i.imgur.com/BebAUom.png"
        },
        {
          "id": 6,
          "image": "https://i.imgur.com/HabH9V8.png"
        },
        {
          "id": 7,
          "image": "https://i.imgur.com/9K8jUGB.png"
        },
        {
          "id": 8,
          "image": "https://i.imgur.com/tlR09kQ.png"
        },
        {
          "id": 9,
          "image": "https://i.imgur.com/Tm20GqW.png"
        }
      ]
    )
  }, [])


  useEffect(() => {
    setAvatar(
      [
        {
          "id": 1,
          "name": "Aang",
          "image": "https://www.pngmart.com/files/2/Aang-PNG-File.png"
        },
        {
          "id": 2,
          "name": "Goku",
          "image": "https://www.pngmart.com/files/2/Goku-PNG-Photo.png"
        },
        {
          "id": 3,
          "name": "Pikachu",
          "image": "https://www.pngplay.com/wp-content/uploads/12/Naruto-PNG-Photo-Image.png"
        },
        {
          "id": 4,
          "name": "Spooky",
          "image": "https://www.pngplay.com/wp-content/uploads/1/Ghost-PNG-Download-Image.png"
        }
      ]
    )
  }, [])

  const [song] = useState(new Audio(music))

  function handleSongClick(e) {
    if (playing === false) {
      song.play()
      isPlaying(true)
    }
    else if (playing === true) {
      song.pause()
      isPlaying(false)
    }
  }

  return (
    <div className="App">

      <Routes>
        <Route
          path="/"
          element={<Homepage
            handleSongClick={handleSongClick}
            playing={playing}
          />}
        />
        <Route
          path="spookystreet"
          element={<SpookyStreet
            selectedAvatar={selectedAvatar}
            houses={houses}
            setHouses={setHouses}
            houseIndex={houseIndex}
            setHouseIndex={setHouseIndex}
            ghostLoc={ghostLoc}
            setGhostLoc={setGhostLoc}
            width={width}
            setWidth={setWidth}
            energy={energy}
            setEnergy={setEnergy}
            candies={candies}
            setCandies={setCandies}
            setCurrentPorch={setCurrentPorch}
            color={color}
            setColor={setColor}
            playing={playing}
            handleSongClick={handleSongClick}
          />}
        />

        <Route
          path="/porch"
          element={<HousePorch
            width={width}
            setWidth={setWidth}
            energy={energy}
            setEnergy={setEnergy}
            candies={candies}
            setCandies={setCandies}
            currentPorch={currentPorch}
            color={color}
            setColor={setColor}
            playing={playing}
            handleSongClick={handleSongClick}
          />}
        />
        <Route path="/porch" element={<HousePorch />} />
        <Route path="/GameOver" element={<GameOver />} />
        <Route path="/GameOver" element={<GameOver />} />
        <Route path="/AvatarPage"
          element={<AvatarPage
            avatars={avatars}
            setSelectedAvatar={setSelectedAvatar}
            setName={setName}
            setImage={setImage}
            name={name}
            image={image}
            setAvatar={setAvatar}
            playing={playing}
            handleSongClick={handleSongClick}
          />
          } />
      </Routes>
    </div>
  );
}

export default App;