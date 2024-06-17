const baseURL = "http://localhost/Singer_D_PokemonWebsite/lumen/public/"
const generateButton = document.querySelector("#gw-generate")
const boardPiece = document.querySelectorAll(".board-piece")
const loadButton = document.querySelector("#gw-submit")
const yourName = document.querySelector("#gw-pokemon-name")

function generateBoard() {
    fetch(`${baseURL}species`)
    .then(response => response.json())
    .then(function(response){
        console.log(response)

        boardPiece.forEach(piece => {
            piece.innerHTML = ""

            piece.style.opacity = "1"

            let img = document.createElement("img")
            let name = document.createElement("p")
            let key = document.createElement("p")
            const number = Math.floor(Math.random() * response.length)

            img.setAttribute("class", "gw-image")
            name.setAttribute("class", "gw-name")
            key.setAttribute("class", "gw-key")

            img.src = `images/custom_pokedex/${response[number].number}.png`
            name.textContent = response[number].name
            key.textContent = response[number].number

            piece.appendChild(img)
            piece.appendChild(name)
            piece.appendChild(key)
        })

        saveGame()
        selectList()
    })
    .catch(error => {
        console.log("boo")
        const gameToken = document.querySelector("#gw-token")

        gameToken.innerHTML = ""

        let errortext = document.createElement("p")
        errortext.textContent = `Sorry, something went wrong. Please refresh the page or double check the content requested, then try again. ${error}`

        gameToken.appendChild(errortext)
    })
}

function selectList() {
    yourName.innerHTML = ""
    const piece = document.querySelectorAll(".board-piece")
    const defaultVar = document.createElement("option")

    defaultVar.textContent = "Please Select A Pokemon"
    yourName.appendChild(defaultVar)

    piece.forEach(piece => {
        let name = piece.querySelector(".gw-name")
        let number = piece.querySelector(".gw-key")
        let option = document.createElement("option")
        option.textContent = name.textContent
        option.id = number.textContent
        option.value = number.textContent
        yourName.appendChild(option)
    })
}

function imageSelect() {
    const selectImage = document.querySelector("#select-image")
    const selectedValue = yourName.value
    
    selectImage.src = `images/custom_pokedex/${selectedValue}.png`
}

function saveGame() {
    const number = document.querySelectorAll(".gw-key")

    const gameData = {
        pokemon1: number[0].innerHTML,
        pokemon2: number[1].innerHTML,
        pokemon3: number[2].innerHTML,
        pokemon4: number[3].innerHTML,
        pokemon5: number[4].innerHTML,
        pokemon6: number[5].innerHTML,
        pokemon7: number[6].innerHTML,
        pokemon8: number[7].innerHTML,
        pokemon9: number[8].innerHTML,
        pokemon10: number[9].innerHTML,
        pokemon11: number[10].innerHTML,
        pokemon12: number[11].innerHTML,
        pokemon13: number[12].innerHTML,
        pokemon14: number[13].innerHTML,
        pokemon15: number[14].innerHTML,
        pokemon16: number[15].innerHTML,
        pokemon17: number[16].innerHTML,
        pokemon18: number[17].innerHTML,
        pokemon19: number[18].innerHTML,
        pokemon20: number[19].innerHTML,
        pokemon21: number[20].innerHTML,
        pokemon22: number[21].innerHTML,
        pokemon23: number[22].innerHTML,
        pokemon24: number[23].innerHTML,
        pokemon25: number[24].innerHTML,
    }

    fetch (`${baseURL}guess-who/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(gameData) 
    })

    .then(response => response.json())
    .then(function(response) {
        const gameToken = document.querySelector("#gw-token")
        const p = document.createElement("p")

        gameToken.innerHTML = ""

        p.textContent = `Your game id is ${response.id}`

        gameToken.appendChild(p)
    })
    .catch(error => {
        console.log("boo")
        const gameToken = document.querySelector("#gw-token")

        gameToken.innerHTML = ""

        let errortext = document.createElement("p")
        errortext.textContent = `Sorry, something went wrong. Please refresh the page or double check the content requested, then try again. ${error}`

        gameToken.appendChild(errortext)
    })
}

function deselectPiece() {
    if (this.style.opacity === "1") {
        this.style.opacity = "0.3"
    } else {
        this.style.opacity = "1"
    }
}

function loadGame(){
    const game = document.querySelector("#gw-input")
    const gameNumber = game.value

    fetch(`${baseURL}guess-who/${gameNumber}`)
    .then(response => response.json())
    .then(function(response) {
        console.log(response)
        const gameToken = document.querySelector("#gw-token")
        loadMessage = document.createElement("p")

        gameToken.innerHTML = ""
        loadMessage.textContent = `Your game id is ${gameNumber}`
        
        gameToken.appendChild(loadMessage)

        i = 0

        boardPiece.forEach(piece => {
            piece.innerHTML = ""

            let img = document.createElement("img")
            let name = document.createElement("p")
            let key = document.createElement("p")

            img.setAttribute("class", "gw-image")
            name.setAttribute("class", "gw-name")
            key.setAttribute("class", "gw-key")

            img.src = `images/custom_pokedex/${response[i].number}.png`
            name.textContent = response[i].name
            key.textContent = response[i].number

            piece.appendChild(img)
            piece.appendChild(name)
            piece.appendChild(key)

            i++
        })

        selectList()
    })
    .catch(error => {
        console.log("boo")
        const gameToken = document.querySelector("#gw-token")

        gameToken.innerHTML = ""

        let errortext = document.createElement("p")
        errortext.textContent = `Sorry, something went wrong. Please refresh the page or double check the content requested, then try again. ${error}`

        gameToken.appendChild(errortext)
    })
}

generateButton.addEventListener("click", generateBoard)
boardPiece.forEach(piece => piece.addEventListener("click", deselectPiece))
loadButton.addEventListener("click", loadGame)
yourName.addEventListener("change", imageSelect)