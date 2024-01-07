const hamMenu = document.querySelector("#hamburger-menu")

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

hamMenu.addEventListener("click", openHamMenu)