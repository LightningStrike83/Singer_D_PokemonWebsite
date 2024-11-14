const baseURL = "http://localhost/Singer_D_PokemonWebsite/lumen/public/"
const siteUpdate = document.querySelector("#main-site-updates")

function updatePopulation() {
    fetch(`${baseURL}/updates`)
    .then(response => response.json())
    .then(function(response){
        response.forEach(update => {
            const li = document.createElement("li")
            const heading = document.createElement("h3")
            const text = document.createElement("p")
            const date = document.createElement("p")
            const infoDiv = document.createElement("div")

            heading.textContent = update.title
            text.textContent = update.text
            date.textContent = update.date

            heading.setAttribute("class", "update-title")
            text.setAttribute("class", "update-text")
            date.setAttribute("class", "update-date")
            infoDiv.setAttribute("class", "update-con")

            infoDiv.appendChild(heading)
            infoDiv.appendChild(date)
            li.appendChild(infoDiv)
            li.appendChild(text)
            siteUpdate.appendChild(li)
        })
    })
}

updatePopulation()