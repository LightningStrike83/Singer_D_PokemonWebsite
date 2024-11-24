const shinyBank = document.querySelector("#shiny-bank")
const shinyList = document.querySelector("#shiny-collection")
const activeHunt = document.querySelector("#active-hunt")
const baseURL = "http://localhost/Singer_D_PokemonWebsite/lumen/public/"
const huntIndicator = document.querySelector("#hunt-indicator")
const saveButton = document.querySelector("#shiny-save")
const collectionName = document.querySelector("#collection-name-form")
const nameForm = document.querySelector("#download-name-con")
let finalName = ""

function shinyPopulation() {
    fetch(`${baseURL}shinies/all`)
    .then(response => response.json())
    .then(function(response){
        shinyBank.innerHTML = ""
        
        response.forEach(shiny => {
            const div = document.createElement("div")
            const img = document.createElement("img")
            const p = document.createElement("p")
            const buttonDiv = document.createElement("div")
            const collectionButton = document.createElement("button")
            const huntButton = document.createElement("button")

            div.setAttribute("class", "shiny-div")
            div.setAttribute("data-div", shiny.id)

            img.src = `images/pokemon_images/shiny_forms/${shiny.number}.png`
            img.setAttribute("class", "shiny-image")
            img.setAttribute("alt", `Image of Shiny ${shiny.name}`)

            p.textContent = `${shiny.name}`
            p.setAttribute("class", "shiny-name")

            huntButton.innerText = "Add to Hunting"
            huntButton.setAttribute("class", "hunt-button")
            collectionButton.innerText = "Add to Collection"
            collectionButton.setAttribute("class", "collection-button")

            buttonDiv.setAttribute("class", "button-div")

            collectionButton.addEventListener("click", addToCollection)
            huntButton.addEventListener("click", addToHunt)

            div.appendChild(img)
            div.appendChild(p)
            buttonDiv.appendChild(collectionButton)
            buttonDiv.appendChild(huntButton)
            div.appendChild(buttonDiv)
            shinyBank.appendChild(div)

            if (shiny.number >= 1000) {
                div.style.order = "2"
            }

            if ((shiny.number === "1017c") || (shiny.number === "1017w") || (shiny.number === "1017h")) {
                div.style.order = "2"
            }
        })
    })
}

function addToCollection() {
    let n = this.parentNode.parentNode.dataset.div
    const bankImage = this.parentNode.parentNode.querySelector("img")
    const bankDiv = this.parentNode.parentNode
    const shinyCollection = document.querySelector("#shiny-collection")

    fetch(`${baseURL}shinies/${n}`)
    .then(response => response.json())
    .then(function(response){
        const div = document.createElement("div")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const removeButton = document.createElement("button")
        const amount = document.createElement("p")
        const minusButton = document.createElement("button")
        const plusButton = document.createElement("button")
        const countButtonDiv = document.createElement("div")

        if (bankImage.style.opacity !== "0.4") {
            bankImage.style.opacity = "40%"
            bankDiv.style.backgroundColor = "black"

            div.setAttribute("class", "shiny-div")
            div.setAttribute("data-div", response.id)
            div.setAttribute("data-sort", response.number)

            img.src = `images/pokemon_images/shiny_forms/${response.number}.png`
            img.setAttribute("class", "shiny-image")
            img.setAttribute("alt", `Image of Shiny ${response.name}`)

            p.textContent = `${response.name}`
            p.setAttribute("class", "shiny-name")

            amount.innerHTML = 'Amount: <span class="shiny-count">1</span>'

            removeButton.setAttribute("class", "remove-button")
            removeButton.innerText = "Remove from Collection"

            plusButton.innerText = "+"
            plusButton.setAttribute("class", "plus-button")
            minusButton.innerText = "-"
            minusButton.setAttribute("class", "minus-button")

            countButtonDiv.setAttribute("class", "count-button-con")

            countButtonDiv.appendChild(minusButton)
            countButtonDiv.appendChild(plusButton)

            div.appendChild(amount)
            div.appendChild(img)
            div.appendChild(p)
            div.appendChild(removeButton)
            div.appendChild(countButtonDiv)
            shinyCollection.appendChild(div)

            if (response.number >= 1000) {
                div.style.order = "2"
            }
        
            if ((response.number === "1017c") || (response.number === "1017w") || (response.number === "1017h")) {
                div.style.order = "2"
            }

            plusButton.addEventListener("click", increaseCount)
            minusButton.addEventListener("click", decreaseCount)
            removeButton.addEventListener("click", removePokemon)

            sortNodes()

            saveState()
        }
    })
}

function sortNodes() {
    const shinyCollection = document.querySelector("#shiny-collection")
    const shinyArray = Array.from(shinyCollection.childNodes)

    shinyArray.sort((a, b) => a.dataset.sort.trim().localeCompare(b.dataset.sort.trim()))

    shinyArray.forEach(div => shinyCollection.appendChild(div))

    saveState()
}

function increaseCount() {
    const shinyCollection = document.querySelector("#shiny-collection")
    let plus = this.parentNode.parentNode.querySelector(".shiny-count");
    let n = parseInt(plus.textContent, 10);

    plus.textContent = ++n;

    saveState()
}

function decreaseCount() {
    const shinyCollection = document.querySelector("#shiny-collection")
    let minus = this.parentNode.parentNode.querySelector(".shiny-count");
    let n = parseInt(minus.textContent, 10);

    if (n > 1) {
        minus.textContent = --n;
    }

    saveState()
}

function removePokemon() {
    const shinyCollection = document.querySelector("#shiny-collection")
    const thisDiv = this.parentNode
    const originalDiv = shinyBank.querySelectorAll(".shiny-div")

    originalDiv.forEach(original => {
        if (original.dataset.div === thisDiv.dataset.div) {
            const originalImage = original.querySelector("img")
            originalImage.style.opacity = "100%"
            original.style.backgroundColor = "white"
        }
    })

    thisDiv.remove()

    saveState()
}

function addToHunt() {
    let n = this.parentNode.parentNode.dataset.div
    const activeHunt = document.querySelector("#active-hunt")
    const indicator = document.querySelector("#hunt-indicator")

    fetch(`${baseURL}shinies/${n}`)
    .then(response => response.json())
    .then(function(response){
        const div = document.createElement("div")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const removeButton = document.createElement("button")
        const amount = document.createElement("p")
        const minusButton = document.createElement("button")
        const plusButton = document.createElement("button")
        const countButtonDiv = document.createElement("div")

        div.setAttribute("class", "hunt-div")

        img.src = `images/pokemon_images/shiny_forms/${response.number}.png`
        img.setAttribute("class", "shiny-image")
        img.setAttribute("alt", `Image of Shiny ${response.name}`)

        p.textContent = `${response.name}`
        p.setAttribute("class", "hunt-name")

        amount.innerHTML = 'Tracker: <span class="hunt-count">1</span>'

        removeButton.setAttribute("class", "hunt-remove-button")
        removeButton.innerText = "Remove from Active Hunt"

        plusButton.innerText = "+"
        plusButton.setAttribute("class", "hunt-plus-button")
        minusButton.innerText = "-"
        minusButton.setAttribute("class", "hunt-minus-button")

        countButtonDiv.setAttribute("class", "hunt-count-button-con")

        countButtonDiv.appendChild(minusButton)
        countButtonDiv.appendChild(plusButton)

        div.appendChild(amount)
        div.appendChild(img)
        div.appendChild(p)
        div.appendChild(removeButton)
        div.appendChild(countButtonDiv)
        activeHunt.appendChild(div)

        plusButton.addEventListener("click", increaseHunt)
        minusButton.addEventListener("click", decreaseHunt)
        removeButton.addEventListener("click", removeHunt)

        saveState()
    })

    indicator.textContent = `1 active hunt`

    if (activeHunt.hasChildNodes()) {
        if (activeHunt.childNodes.length >= 1) {
            indicator.textContent = `${activeHunt.childNodes.length +1} active hunts`;
        }
    }
}

function increaseHunt() {
    const activeHunt = document.querySelector("#active-hunt")
    let plus = this.parentNode.parentNode.querySelector(".hunt-count");
    let n = parseInt(plus.textContent, 10);

    plus.textContent = ++n;

    saveState()
}

function decreaseHunt() {
    const activeHunt = document.querySelector("#active-hunt")
    let minus = this.parentNode.parentNode.querySelector(".hunt-count");
    let n = parseInt(minus.textContent, 10);

    if (n > 1) {
        minus.textContent = --n;
    }

    saveState()
}

function removeHunt() {
    const thisDiv = this.parentNode
    const activeHunt = document.querySelector("#active-hunt")
    const indicator = document.querySelector("#hunt-indicator")

    thisDiv.remove()

    if (activeHunt.hasChildNodes()) {
        if (activeHunt.childNodes.length >= 1) {
            indicator.textContent = `${activeHunt.childNodes.length} active hunts`;
        } else {
            indicator.textContent = `1 active hunt`;
        }
    } else if (!activeHunt.hasChildNodes()) {
        indicator.textContent = "-No Active Hunts-";
    }

    saveState()
}

function saveState() {
    const bankString = shinyBank.innerHTML;
    const listString = shinyList.innerHTML;
    const huntString = activeHunt.innerHTML;
    const huntText = huntIndicator.textContent;

    const bankCompressed = LZString.compress(bankString);
    const listCompressed = LZString.compress(listString);
    const huntCompressed = LZString.compress(huntString);
    const huntTextCompressed = LZString.compress(huntText)

    localStorage.setItem('bank', bankCompressed);
    localStorage.setItem('list', listCompressed);
    localStorage.setItem('hunt', huntCompressed);
    localStorage.setItem('text', huntTextCompressed)
}


function loadState() {
    const bankString = localStorage.getItem('bank')
    const listString = localStorage.getItem('list')
    const huntString = localStorage.getItem('hunt')
    const textString = localStorage.getItem('text')

    if (bankString) {
        const decompressedBank = LZString.decompress(bankString)

        shinyBank.innerHTML = decompressedBank;
        reattachListeners()
    } else {
        shinyPopulation()
    }

    if (listString) {
        const decompressedList = LZString.decompress(listString)

        shinyList.innerHTML = decompressedList;
        reattachListeners()
    }

    if (huntString) {
        const decompressedHunt = LZString.decompress(huntString)

        activeHunt.innerHTML = decompressedHunt;
        reattachListeners()
    }

    if (textString) {
        const decompressedText = LZString.decompress(textString)

        huntIndicator.textContent = decompressedText
    }
}

function reattachListeners() {
    const removeButton = document.querySelectorAll(".remove-button")
    const huntremoveButton = document.querySelectorAll(".hunt-remove-button")
    const huntButton = document.querySelectorAll(".hunt-button")
    const collectionButton = document.querySelectorAll(".collection-button")
    const huntPlusButton = document.querySelectorAll(".hunt-plus-button")
    const huntMinusButton = document.querySelectorAll(".hunt-minus-button")
    const plusButton = document.querySelectorAll(".plus-button")
    const minusButton = document.querySelectorAll(".minus-button")

    removeButton.forEach(button => {
        button.addEventListener("click", removePokemon)
    })

    huntremoveButton.forEach(button => {
        button.addEventListener("click", removeHunt)
    })

    huntButton.forEach(button => 
        button.addEventListener("click", addToHunt)
    )

    collectionButton.forEach(button => {
        button.addEventListener("click", addToCollection)
    })

    huntPlusButton.forEach(button => {
        button.addEventListener("click", increaseHunt)
    })

    huntMinusButton.forEach(button => {
        button.addEventListener("click", decreaseHunt)
    })

    plusButton.forEach(button => {
        button.addEventListener("click", increaseCount)
    })
    
    minusButton.forEach(button => {
        button.addEventListener("click", decreaseCount)
    })
}

function downloadCollection(event) {
    const removeButton = document.querySelectorAll(".remove-button")
    const buttonCon = document.querySelectorAll(".count-button-con")
    const collectionList = document.querySelector("#collection-list")
    const shinyDivs = shinyList.querySelectorAll(".shiny-div")
    const p = document.createElement("p")
    const title = document.createElement("h3")
    const form = document.querySelector("#collection-name")
    let formName = form.value

    event.preventDefault()

    finalName = formName

    removeButton.forEach(button => button.remove())
    buttonCon.forEach(con => con.remove())

    collectionList.classList.remove("m-col-span-6")

    p.textContent = "Create your own at littlerootdreams.com"
    p.setAttribute("id", "shiny-credit")

    title.textContent = `${finalName}`
    title.setAttribute("id", "my-collection-title")

    shinyList.appendChild(title)
    shinyList.appendChild(p)

    shinyDivs.forEach(div => {
        div.style.border = "2px solid black"
        div.style.width = "10%"
        div.style.marginBottom = "0"
    })

    html2canvas(shinyList).then((canvas) => {
        const dataUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "my-collection.png"; 
        link.click();
    });
    
    collectionList.classList.add("m-col-span-6")

    shinyDivs.forEach(div => {
        const newButtonCon = document.createElement("div")
        const newPlus = document.createElement("button")
        const newMinus = document.createElement("button")
        const newRemove = document.createElement("button")

        div.style.border = "none"
        div.style.width = "20%"
        div.style.marginBottom = "10px"

        newRemove.setAttribute("class", "remove-button")
        newRemove.innerText = "Remove from Collection"

        newButtonCon.setAttribute("class", "count-button-con")

        newPlus.innerText = "+"
        newPlus.setAttribute("class", "plus-button")
        newMinus.innerText = "-"
        newMinus.setAttribute("class", "minus-button")

        newPlus.addEventListener("click", increaseCount)
        newMinus.addEventListener("click", decreaseCount)
        newRemove.addEventListener("click", removePokemon)

        newButtonCon.appendChild(newMinus)
        newButtonCon.appendChild(newPlus)

        div.appendChild(newRemove)
        div.appendChild(newButtonCon)
    })
    
    form.value = ""
    nameForm.style.visibility = "hidden"
    nameForm.style.opacity = "0"

    clearText()
}

function clearText() {
    const shinyCredit = document.querySelector("#shiny-credit")
    const collectionTitle = document.querySelector("#my-collection-title")

    shinyCredit.remove()
    collectionTitle.remove()
}

function openNameForm() {
    nameForm.style.visibility = "visible"
    nameForm.style.opacity = "1"
}

window.addEventListener('load', loadState);
saveButton.addEventListener("click", openNameForm)
collectionName.addEventListener("submit", downloadCollection)