const baseURL = "http://localhost/Singer_D_PokemonWebsite/lumen/public/"

function linePopulation() {
    fetch(`${baseURL}lines`)
    .then(response => response.json())
    .then(function(response){
        const lineSelect = document.querySelector("#line-selection")
        response.forEach(line => {
            const li = document.createElement("li")

            li.textContent = line.species
            li.setAttribute("data-line", `${line.id}`)
            li.setAttribute("class", "pokemon-line")
            li.addEventListener("click", displayTrainers)
            lineSelect.appendChild(li)
        })
    })
}

function displayTrainers(e) {
    const lineNumber = this.dataset.line

    fetch(`${baseURL}trainer-lines/${lineNumber}`)
    .then(response => response.json())
    .then(function(response){
        console.log(e.target.textContent)
        const displayUsage = document.querySelector("#display-usage")
        const ul = document.createElement("ul")
        const usageTitle = document.querySelector("#usage-title")
        const lineName = e.target.textContent

        displayUsage.innerHTML = ""
        usageTitle.textContent = `The ${lineName} has been used ${response.length} times`

        response.forEach(trainer => {
            const li = document.createElement("li")

            li.textContent = trainer.name
            ul.appendChild(li)
        })

        displayUsage.appendChild(ul)
    })
}

linePopulation()