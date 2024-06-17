const hamMenu = document.querySelector("#hamburger-menu")
const infoMenu = document.querySelector("#game-info-menu")
const activityMenu = document.querySelector("#activity-menu")
const infoButton = document.querySelector("#game-info-button")
const activityButton = document.querySelector("#activity-button")

function openHamMenu() {
    var navMenu = document.querySelector("#nav-menu")

    if (navMenu.style.display === "grid") {
        navMenu.style.display = "none"
        hamMenu.style.marginBottom = "0"
    } else {
        navMenu.style.display = "grid"
        hamMenu.style.marginBottom = "20px"
    }
}

function openInfoMenu() {
    if (infoMenu.style.display === "none") {
        infoMenu.style.display = "flex"
    } else (
        infoMenu.style.display = "none"
    )

    if (activityMenu.style.display = "flex") {
        activityMenu.style.display = "none"
    }
}

function openActivityMenu() {
    if (activityMenu.style.display === "none") {
        activityMenu.style.display = "flex"
    } else (
        activityMenu.style.display = "none"
    )

    if (infoMenu.style.display = "flex") {
        infoMenu.style.display = "none"
    }
}

function setDefault() {
    activityMenu.style.display = "none"
    infoMenu.style.display = "none"
}

setDefault()

hamMenu.addEventListener("click", openHamMenu)
infoButton.addEventListener("click", openInfoMenu)
activityButton.addEventListener("click", openActivityMenu)