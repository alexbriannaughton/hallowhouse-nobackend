import { useState } from "react"

function Instructions() {
    const [form, setForm] = useState(false)
    const [inBtn, setInBtn] = useState(true)

    function handleClick() {
        setForm(!form)
        setInBtn(!inBtn)
    }

    return (
        <>
            <div>
                {inBtn ?
                    <button className="instructBtn-in-game" onClick={handleClick}> Click to See Instructions
                    </button>
                    :
                    <button className="instructBtn-in-game" onClick={handleClick}> Click to Hide Instructions
                    </button>
                }
            </div>
            {form ?
                <div>
                    <div className="instructList-in-game"> 
                        <p className="instructions">Use left and right arrow buttons to move</p>
                        <p className="instructions">Use your up arrow to enter a house, and your down arrow to exit</p>
                        <p className="instructions">When on a house porch, press spacebar to knock on the door and hopefully get some candy</p>
                        <p className="instructions">Move your character to the edge of the screen to see some more houses</p>
                        <p className="instructions">Click on some candy for more energy</p>
                    </div>
                </div>
                :
                <div></div>
            }
        </>
    )
}

export default Instructions