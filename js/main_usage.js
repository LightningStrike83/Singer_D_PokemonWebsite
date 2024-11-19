const baseURL = "http://localhost/Singer_D_PokemonWebsite/lumen/public/"
const usageSelect = document.querySelector("#usage-select")
let request = usageSelect.value
let savedVariable = ""
let savedText = ""

function linePopulation() {
    fetch(`${baseURL}lines`)
    .then(response => response.json())
    .then(function(response){
        const lineSelect = document.querySelector("#line-selection")

        lineSelect.innerHTML = ""

        response.forEach(line => {
            const li = document.createElement("li")

            li.textContent = line.species
            li.setAttribute("data-line", `${line.id}`)
            li.setAttribute("class", "pokemon-line")
            li.addEventListener("click", displayTrainers)
            lineSelect.appendChild(li)
        })
    })
    .catch(error => {
        const lineSelect = document.querySelector("#line-selection")
        const p = document.createElement("p")

        p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        lineSelect.appendChild(p)
    })
}

function displayTrainers(e) {
    const lineNumber = e?.currentTarget?.dataset?.line || savedVariable;

    fetch(`${baseURL}trainer-lines/${request}/${lineNumber}`)
        .then(response => response.json())
        .then(function (response) {
            const displayUsage = document.querySelector("#display-usage");
            const ul = document.createElement("ul");
            const usageTitle = document.querySelector("#usage-title");
            const lineName = e?.target?.textContent || savedText;
            const icon = document.querySelector("#usage-icon");

            icon.src = `images/usage/${lineNumber}.png`; 

            displayUsage.innerHTML = "";
            usageTitle.textContent = `The ${lineName} has been used ${response.length} times`;

            response.forEach(trainer => {
                const li = document.createElement("li");
                li.setAttribute("class", "usage-trainer-name");
                li.textContent = trainer.name;
                ul.appendChild(li);
            });

            displayUsage.setAttribute("class", "populated")
            displayUsage.appendChild(ul);
            savedText = lineName
        })
        .catch(error => {
            const usageTitle = document.querySelector("#usage-title");
            usageTitle.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`;
        });

    savedVariable = lineNumber
}

function newValue() {
    const displayUsage = document.querySelector("#display-usage");
    request = usageSelect.value;

    if (displayUsage.classList.contains("populated")) {
        const eventStub = { currentTarget: { dataset: { line: savedVariable } } };
        displayTrainers(eventStub);
    }
}

linePopulation()

usageSelect.addEventListener("change", newValue)