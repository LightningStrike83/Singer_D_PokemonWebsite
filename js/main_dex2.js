const dexTemplate = document.querySelector("#dex-template");
const customDexArea = document.querySelector("#cd-area");
const classic = document.querySelector("#classic");
const legends = document.querySelector("#legends")
const modern = document.querySelector("#modern")
let count = 1; 

function dexCheck() {
    customDexArea.innerHTML = ""
    
    if (this.id === "classic") {
        createClassicDex()
    } else if (this.id === "legends") {
        createLegendsDex()
    } else if (this.id === "modern") {
        createModernDex()
    }

    count = 1
}

function createClassicDex() {
    while (count <= 151) {
        const clone = dexTemplate.content.cloneNode(true);
        const dexNumber = clone.querySelector(".dex-number");
        dexNumber.textContent = count; 
        customDexArea.appendChild(clone);
        count++; 
        createClassicDex()
    }
}

function createLegendsDex() {
    while (count <= 242) {
        const clone = dexTemplate.content.cloneNode(true);
        const dexNumber = clone.querySelector(".dex-number");
        dexNumber.textContent = count; 
        customDexArea.appendChild(clone);
        count++; 
        createLegendsDex()
    }
}

function createModernDex() {
    while (count <= 400) {
        const clone = dexTemplate.content.cloneNode(true);
        const dexNumber = clone.querySelector(".dex-number");
        dexNumber.textContent = count; 
        customDexArea.appendChild(clone);
        count++; 
        createModernDex()
    }
}

classic.addEventListener("click", dexCheck);
legends.addEventListener("click", dexCheck)
modern.addEventListener("click",dexCheck)