const baseURL = "http://localhost/Singer_D_PokemonWebsite/lumen/public/"
const generateButton = document.querySelector("#gw-generate")
const boardPiece = document.querySelectorAll(".board-piece")

function generateBoard() {
    fetch(`${baseURL}species`)
    .then(response => response.json())
    .then(function(response){
        console.log(response)

        boardPiece.forEach(piece => {
            piece.innerHTML = ""

            let img = document.createElement("img")
            let name = document.createElement("p")
            const number = Math.floor(Math.random() * response.length)

            img.setAttribute("class", "gw-image")
            name.setAttribute("class", "gw-name")

            img.src = `images/custom_pokedex/${response[number].number}.png`
            name.textContent = response[number].name

            piece.appendChild(img)
            piece.appendChild(name)
        })
    })
}

function deselectPiece() {
    if (this.style.opacity === "1") {
        this.style.opacity = "0.3"
    } else {
        this.style.opacity = "1"
    }
}

generateButton.addEventListener("click", generateBoard)
boardPiece.forEach(piece => piece.addEventListener("click", deselectPiece))