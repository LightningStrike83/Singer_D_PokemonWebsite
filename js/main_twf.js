const baseURL = "http://localhost/Singer_D_PokemonWebsite/lumen/public/"
const generateButton = document.querySelector("#generate-button")

function displayLength() {
    const promptCount = document.querySelector("#prompt-count")

    fetch(`${baseURL}/prompts/all`)
    .then(response => response.json())
    .then(function(response){
        promptCount.textContent = `There is currently ${response.length} prompts in the database.`
    })
}

displayLength()

function generatePrompt() {
    fetch(`${baseURL}/prompts/all`)
    .then(response => response.json())
    .then(function(response){
        const promptGenerate = document.querySelector("#prompt-generate")
        const randomPrompt = Math.floor(Math.random() * response.length)
        const h3 = document.createElement("h3")
        const div = document.createElement("div")
        const p = document.createElement("p")

        promptGenerate.innerHTML = ""

        h3.textContent = response[randomPrompt].prompt
        div.innerHTML = response[randomPrompt].description
        p.textContent = `Credit: ${response[randomPrompt].credit}`

        h3.setAttribute("class", "prompt-title")
        p.setAttribute("class", "prompt-credit")

        promptGenerate.appendChild(h3)
        promptGenerate.appendChild(div)
        promptGenerate.appendChild(p)

        if (response[randomPrompt].random === "y") {
            const rDiv = document.createElement("div")

            rDiv.innerHTML = '<p id="redirect">Need a way to randomize your choices? Use the randomizer from <a class="outsource" href="https://randompokemon.com/">Random Pokemon!</a></p>'

            promptGenerate.appendChild(rDiv)
        }
    })
}

generateButton.addEventListener("click", generatePrompt)