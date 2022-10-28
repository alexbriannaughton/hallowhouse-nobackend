
import HouseCard from "./HouseCard"
import EnergyBar from "./EnergyBar"
import CandyBucket from "./CandyBucket"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Songbar from "./Songbar"

function SpookyStreet({
    selectedAvatar,
    houses,
    houseIndex,
    setHouseIndex,
    ghostLoc,
    setGhostLoc,
    width,
    setWidth,
    energy,
    setEnergy,
    candies,
    setCandies,
    setCurrentPorch,
    color,
    setColor,
    handleSongClick,
    playing
}) {


    let start = houseIndex
    let end = houseIndex + 4

    let nextId = 3
    const housePorches = [
        { closed: "https://i.imgur.com/8gKB2e1.jpg", open: "https://i.imgur.com/Gj4rbsx.jpg", tpd: "https://i.imgur.com/n9eJYca.jpg" },
        { closed: "https://i.imgur.com/qykF5SL.jpg", open: "https://i.imgur.com/oSo8nFM.jpg", tpd: "https://i.imgur.com/QCaWumN.jpg" },
        { closed: "https://i.imgur.com/ePkGC0v.jpg", open: "https://i.imgur.com/35Aa1oc.jpg", tpd: "https://i.imgur.com/0fxMY5j.jpg" }
    ]

    function getNewRandomBackground() {
        const index = Math.floor(Math.random() * housePorches.length);
        const porchBackground = { ...housePorches[index] };
        porchBackground.id = nextId;
        nextId++;
        return porchBackground;
    }

    const navigate = useNavigate()

    function renderHouses() {
        const fourHouses = houses.slice(start, end)
        return fourHouses.map(house => <HouseCard key={house.id} house={house}
        />
        )
    }

    useEffect(() => {
        function handleKeyPress(e) {
            if (e.key === 'ArrowRight') {
                setGhostLoc(ghostLoc + 8)
                setWidth((width) => width - 5)
                setEnergy((energy) => energy - 1)

            }
            else if (e.key === 'ArrowLeft') {
                setGhostLoc(ghostLoc - 8)
                setWidth((width) => width - 5)
                setEnergy((energy) => energy - 1)
            }
            else if (e.key === 'ArrowUp') {
                setCurrentPorch(getNewRandomBackground())
                navigate('/porch')
            }
        }


        document.addEventListener('keydown', handleKeyPress)

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyPress)
        }
    })

    useEffect(() => {
        if (width >= 0 & energy >= 75) {
            setColor("green")
        }
        if (width >= 0 & energy > 25 & energy < 75) {
            setColor("orange")
        }
        if (width >= 0 & energy <= 25 & energy >= 1) {
            setColor("red")
        }

        if (ghostLoc > 1000) {
            setGhostLoc(-995)
            setHouseIndex(houseIndex + 4)
        }
        if (ghostLoc < -1000) {
            setGhostLoc(995)
            setHouseIndex(houseIndex - 4)
        }
        if (energy < 1) {
            navigate("/GameOver")
        }


    })




    return (
        <div>
            {/* {direcs1 ? <div className="directions">press the arrow→keys←to→move→←</div> : null}
            {direcs2 ? <div className="directions">press ↑up↑ when u get to a house↑↑↑</div> : null}
            {direcs4 ? <div className="directions">click a piece of candy for more energy</div> : null} */}
            <div className="belt">
                {renderHouses()}
                {/* <button className="more-button" onClick={() => setHouseIndex(houseIndex + 1)}>keep walkin</button> */}
            </div>
            <div alt="road div" className="road-div">
                <img
                    alt="road"
                    src="https://cliparting.com/wp-content/uploads/2016/10/Road-bitumen-clipart-by-megapixl.jpg"
                    style={{ width: "100%", height: "150px", position: "absolute", left: "0%" }}
                />
                <img
                    alt={selectedAvatar.name}
                    src={selectedAvatar}
                    className="avatar"
                    style={{ left: `${ghostLoc}px` }}
                />
            </div>
            <div className="grass" style={{ height: "550px" }}>
                <img alt="grass"/>
            </div>
            <div>
            </div>
            <EnergyBar
                width={width}
                energy={energy}
                color={color}
            />
            <CandyBucket
                width={width}
                setWidth={setWidth}
                energy={energy}
                setEnergy={setEnergy}
                candies={candies}
                setCandies={setCandies}
            />
            <Songbar
                handleSongClick={handleSongClick}
                playing={playing}
            />
        </div>
    )
}

export default SpookyStreet