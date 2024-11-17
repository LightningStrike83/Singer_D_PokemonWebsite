const baseURL = "http://localhost/Singer_D_PokemonWebsite/lumen/public/"
const generateButton = document.querySelector("#generate-button")
const openListButton = document.querySelector("#open-list")
const promptSubmit = document.querySelector("#prompt-submit")
const lbForm = document.querySelector("#lb-form")

function displayLength() {
    const promptCount = document.querySelector("#prompt-count")

    fetch(`${baseURL}/prompts/all`)
    .then(response => response.json())
    .then(function(response){
        promptCount.textContent = `There is currently ${response.length} prompts in the database.`
    })
    .catch(error => {
        promptCount.textContent = `Sorry, something went wrong. Please refresh and try again. ${error}`
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

            rDiv.innerHTML = '<p id="redirect">Need a way to randomize your choices? Use the randomizer from <a target="_blank" class="outsource" href="https://randompokemon.com/">Random Pokemon!</a></p>'

            promptGenerate.appendChild(rDiv)
        }
    })
    .catch(error => {
        const promptGenerate = document.querySelector("#prompt-generate")
        const p = document.createElement("p")

        p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        promptGenerate.appendChild(p)
    })
}

function openAllPrompts() {
    fetch(`${baseURL}/prompts/all`)
    .then(response => response.json())
    .then(function(response){
        const list = document.querySelector("#full-list-home")
        const listHome = document.querySelector("#full-list-popup-con")

        list.innerHTML = ""

        listHome.style.display = "grid"
        listHome.style.visibility = "visible"
        listHome.style.opacity = "1"
        scrollTo(0,0)

        response.forEach(prompt => {
            const div = document.createElement("div")
            const title = document.createElement("h3")
            const desc = document.createElement("p")
            const credit = document.createElement("p")
            const hideDiv = document.createElement("div")
            
            title.textContent = `${prompt.id}. ${prompt.prompt}`
            desc.innerHTML = prompt.description
            credit.textContent = `Credit: ${prompt.credit}`

            div.setAttribute("class", "lb-prompt-home")
            hideDiv.setAttribute("class", "extra-prompt-detail")
            hideDiv.style.display = "none"
            credit.setAttribute("class", "lb-credit")
            title.setAttribute("class", "lb-prompt")

            div.appendChild(title)
            hideDiv.appendChild(desc)
            hideDiv.appendChild(credit)
            div.appendChild(hideDiv)

            div.addEventListener("click", openFullDetails)

            list.appendChild(div)
        })
    })
    .catch(error => {
        const list = document.querySelector("#full-list-home")
        const p = document.createElement("p")

        p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        list.appendChild(p)
    })
}

function openFullDetails() {
    const extraDetail = this.querySelector(".extra-prompt-detail")
    const prompt = this.querySelector(".lb-prompt")
    
    if (extraDetail.style.display === "none") {
        extraDetail.style.display = "block"
        prompt.style.marginBottom = "10px"
    } else {
        extraDetail.style.display = "none"
        prompt.style.marginBottom = "0"
    }
}

function openSubmissionBox() {
    const lbSubmit = document.querySelector("#prompt-submission")
    lbSubmit.style.display = "grid"
    lbSubmit.style.visibility = "visible"
    lbSubmit.style.opacity = "1"
    scrollTo(0,0)
}

function sendSubmission(event) {
    event.preventDefault();
    console.log("hi");

    const formData = {
        prompt: this.elements.prompt.value,
        description: this.elements.description.value,
        submitter: this.elements.submitter.value
    };

    console.log(formData)

    fetch(`${baseURL}prompts/submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(function(response) {
        const submitConfirm = document.querySelector("#submit-confirm")
        const lbField = document.querySelectorAll(".lb-prompt-field")
        console.log(response)

        submitConfirm.textContent = "Thank you the suggestion! It has been submitted successfully!"

        lbField.forEach(field => {
            field.value = ""
        })
    })
    .catch(function(error) {
        const submitConfirm = document.querySelector("#submit-confirm")

        submitConfirm.textContent = `Sorry, something went wrong. Please refresh and try again. ${error}`
    });
}


generateButton.addEventListener("click", generatePrompt)
openListButton.addEventListener("click", openAllPrompts)
promptSubmit.addEventListener("click", openSubmissionBox)
lbForm.addEventListener("submit", sendSubmission)