console.log('Welcome to the world of Pokemon!');

let tips = document.querySelector("#tips_click");
let classicDex = document.querySelector("#classic");
let legendsDex = document.querySelector("#legends");
let modernDex = document.querySelector("#modern");
let pokemonSprites = document.querySelector("#pokemon_sprites");


const dragImages = document.querySelectorAll(".sprite_item img");
const dropAreas = document.querySelectorAll(".pokedex_box");

function openTips() {
  var tipsBox = document.querySelector("#tips_box");
  tipsBox.style.display = (tipsBox.style.display === 'block') ? 'none' : 'block';
}

function openClassicDex() {
  var classicDex = document.querySelector("#pokedex_display_classic");
  var legendsDex = document.querySelector("#pokedex_display_legends");
  var modernDex = document.querySelector("#pokedex_display_modern");

  classicDex.style.display = classicDex.classList.contains("open") ? "none" : "flex";
  legendsDex.style.display = "none";
  modernDex.style.display = "none";
}

function openLegendsDex() {
  var legendsDex = document.querySelector("#pokedex_display_legends");
  var classicDex = document.querySelector("#pokedex_display_classic");
  var modernDex = document.querySelector("#pokedex_display_modern");

  legendsDex.style.display = legendsDex.classList.contains("open") ? "none" : "flex";
  classicDex.style.display = "none";
  modernDex.style.display = "none";
}

function openModernDex() {
  var modernDex = document.querySelector("#pokedex_display_modern");
  var classicDex = document.querySelector("#pokedex_display_classic");
  var legendsDex = document.querySelector("#pokedex_display_legends");

  modernDex.style.display = modernDex.classList.contains("open") ? "none" : "flex";
  classicDex.style.display = "none";
  legendsDex.style.display = "none";
}


function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.src);
    event.target.classList.add("dragging");
    const div = event.target.closest(".sprite_item");
    const dataKey = Date.now();
    div.dataset.key = dataKey;
    event.target.dataset.key = dataKey;
  }

function dragEnd(event) {
  event.target.classList.remove("dragging");
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.target.classList.add("drag-enter");
}

function dragLeave(event) {
  event.target.classList.remove("drag-enter");
}

function drop(event) {
    event.preventDefault();
    const targetDropArea = event.target.closest(".pokedex_box");
    const draggedPokemon = document.querySelector(".dragging");
  
    if (!targetDropArea) {
      return;
    }
  
    if (draggedPokemon) {
      const currentDropArea = draggedPokemon.parentNode;
  
      if (currentDropArea !== targetDropArea) {
        const existingImage = targetDropArea.querySelector("img");
        
        if (existingImage) {
          return;
        }

        currentDropArea.removeChild(draggedPokemon);
        targetDropArea.appendChild(draggedPokemon);
      }
      draggedPokemon.classList.remove("dragging");
    }
  
    event.target.classList.remove("drag-enter");
  }

function returnToOriginalPosition(event) {
    event.preventDefault();
    const draggedPokemon = document.querySelector(".dragging");
    const originalPositionKey = draggedPokemon.dataset.key;
    const originalPosition = document.querySelector(`.sprite_item[data-key="${originalPositionKey}"]`);
  
    if (draggedPokemon && originalPosition) {
      const currentDropArea = draggedPokemon.parentNode;
      currentDropArea.removeChild(draggedPokemon);
      originalPosition.appendChild(draggedPokemon);
      draggedPokemon.classList.remove("dragging");
    }
  }

tips.addEventListener("click", openTips);
classicDex.addEventListener("click", openClassicDex);
legendsDex.addEventListener("click", openLegendsDex);
modernDex.addEventListener("click", openModernDex);

dragImages.forEach(function (image) {
  image.addEventListener("dragstart", dragStart);
  image.addEventListener("dragend", dragEnd);
});

dropAreas.forEach((area) => {
  area.addEventListener("dragover", dragOver);
  area.addEventListener("dragenter", dragEnter);
  area.addEventListener("dragleave", dragLeave);
  area.addEventListener("drop", drop);
});

pokemonSprites.addEventListener("dragover", dragOver);
pokemonSprites.addEventListener("dragenter", dragEnter);
pokemonSprites.addEventListener("dragleave", dragLeave);
pokemonSprites.addEventListener("drop", returnToOriginalPosition);