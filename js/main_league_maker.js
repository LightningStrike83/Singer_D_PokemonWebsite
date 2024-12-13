const trainerSelect = document.querySelectorAll(".trainer-select")
const typeSelect = document.querySelectorAll(".type-select")
const baseURL = "http://localhost/Singer_D_PokemonWebsite/lumen/public/"
const modeButton = document.querySelectorAll(".mode-button")
const createButton = document.querySelector("#select-submit")
let mode = "all"

function modeSelect() {
    const modeDisplay = document.querySelector("#mode-display")
    mode = this.dataset.button

    modeDisplay.textContent = this.innerText

    trainerPopulation()
}

function trainerPopulation() {
    trainerSelect.forEach(trainerBox => trainerBox.innerHTML = "")

    trainerSelect.forEach(trainerBox => {
        const defaultOption = document.createElement("option")

        defaultOption.disabled = true
        defaultOption.selected = true
        defaultOption.innerText = "--Select A Trainer--"
        trainerBox.appendChild(defaultOption)
    })

    if (mode === "simple") {
        const gymSelect = document.querySelectorAll(".gym-select")
        const e4Select = document.querySelectorAll(".e4-select")
        const championSelect = document.querySelector("#champion")
        const superbossSelect = document.querySelector("#superboss")

        gymSelect.forEach(gym => {
            fetch(`${baseURL}league-trainers/gym`)
                .then(response => response.json())
                .then(function(response) {
                    response.forEach(trainer => {
                        const option = document.createElement("option")

                        option.setAttribute("data-trainer", `${trainer.id}`)
                        option.innerText = `${trainer.name}`

                        gym.appendChild(option)
                    })
                })
        })

        e4Select.forEach(e4 => {
            fetch(`${baseURL}league-trainers/e4`)
                .then(response => response.json())
                .then(function(response) {
                    response.forEach(trainer => {
                        const option = document.createElement("option")

                        option.setAttribute("data-trainer", `${trainer.id}`)
                        option.innerText = `${trainer.name}`

                        e4.appendChild(option)
                    })
                })
        })

        fetch(`${baseURL}league-trainers/champion`)
        .then(response => response.json())
        .then(function(response) {
            response.forEach(trainer => {
                const option = document.createElement("option")

                option.setAttribute("data-trainer", `${trainer.id}`)
                option.innerText = `${trainer.name}`

                championSelect.appendChild(option)
            })
        })

        fetch(`${baseURL}league-trainers/superboss`)
        .then(response => response.json())
        .then(function(response) {
            response.forEach(trainer => {
                const option = document.createElement("option")

                option.setAttribute("data-trainer", `${trainer.id}`)
                option.innerText = `${trainer.name}`

                superbossSelect.appendChild(option)
            })
        })

    } else if (mode === "all") {
        trainerSelect.forEach(trainerBox => {
            fetch(`${baseURL}league-trainers/${mode}`)
            .then(response => response.json())
            .then(function(response) {
                
                response.forEach(trainer => {
                    const option = document.createElement("option")

                    option.setAttribute("data-trainer", `${trainer.id}`)
                    option.innerText = `${trainer.name}`

                    trainerBox.appendChild(option)
                })
            })
        })
    }
}

trainerPopulation()

function inputTrainerInfomation() {
    const dataLink = this.dataset.link
    const divSelector = document.querySelector(`#${dataLink}`)
    const trainerImage = divSelector.querySelector("div")
    const trainerName = divSelector.querySelector(".trainer-name")

    console.log(trainerImage)

    trainerImage.style.backgroundImage = `url('../images/trainer_images/${this.options[this.selectedIndex].dataset.trainer}.png')`
    trainerName.textContent = this.options[this.selectedIndex].innerText
}

function inputTypeInformation() {
    const dataLink = this.dataset.link
    const divSelector = document.querySelector(`#${dataLink}`)
    const trainerType = divSelector.querySelector(".trainer-type")
    const trainerName = divSelector.querySelector(".trainer-name")
    const trainerImage = divSelector.querySelector("div")
    divClass = divSelector.className

    console.log(divClass)

    trainerType.textContent = `Type: ${this.options[this.selectedIndex].innerText}`
    trainerType.className = `trainer-type ${this.options[this.selectedIndex].value}`
    trainerName.className = `trainer-name ${this.options[this.selectedIndex].value}`
    trainerImage.className = `${this.options[this.selectedIndex].value}-border`
}

function openLeagueBox() {
    const leagueCon = document.querySelector("#league-con")

    leagueCon.style.visibility = "visible"
    leagueCon.style.opacity = "1"
    leagueCon.style.display = "grid"
}

modeButton.forEach(button => button.addEventListener("click", modeSelect))
trainerSelect.forEach(select => select.addEventListener("change", inputTrainerInfomation))
typeSelect.forEach(select => select.addEventListener("change", inputTypeInformation))
createButton.addEventListener("click", openLeagueBox)