let nextId = 7
const newCandy = [
    { name: "reeses", image: "https://i.imgur.com/043Xw2w.png" },
    { name: "milkyway", image: "https://i.imgur.com/dChVOLh.png" },
    { name: "skittles", image: "https://i.imgur.com/isYGa3l.png" },
    { name: "kitkat", image: "https://i.imgur.com/UkElcBv.png" },
    { name: "snickers", image: "https://i.imgur.com/nXh6Xbf.png" },
    { name: "lollipop", image: "https://i.imgur.com/eKxWOXq.png" },
    { name: "candy", image: "https://i.imgur.com/IMhchCb.png" },
]
function getNewRandomCandy() {
    const index = Math.floor(Math.random() * newCandy.length);
    const newCandies = { ...newCandy[index] };
    newCandies.id = nextId;
    nextId++;
    return newCandies;
}
function handleRandomCandy() {
    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    // }
    function getRandomInt(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
    let randomNum = getRandomInt([0,0,1,2,3,4,5])
    console.log(randomNum)
    let candiesArray = []
    for (let i = randomNum; i >= 0; i--) {
        if (i > 0) {
            candiesArray.push(getNewRandomCandy())
        } else {

            return candiesArray
        }
    }
}

export default handleRandomCandy