console.log('Welcome to the world of Pokemon!');

const tips = document.querySelector("#tips_click");
const pokemonSprites = document.querySelector("#pokemon_sprites");
const dragImages = document.querySelectorAll(".sprite_item img");
const submitbutton = document.querySelector("#pd-submit-button")
const downloadButton = document.querySelector("#pd-download")
let count = 0

function openTips() {
  var tipsBox = document.querySelector("#tips_box");
  tipsBox.style.display = (tipsBox.style.display === 'flex') ? 'none' : 'flex';
}

function populateBoxArea() {
  const pokedexBoxArea = document.querySelector("#pokedex_display")
  const input = document.querySelector("#pd-input")
  let inputValue = parseInt(input.value)
  const box = document.querySelectorAll(".pokedex_box")

  if (inputValue < count) {
    const boxesToRemove = count - inputValue;
    
    for (let i = 0; i < boxesToRemove; i++) {
      const lastBox = pokedexBoxArea.lastChild; // Get the last child
      if (lastBox) {
        if(lastBox.hasChildNodes()) {
          if (lastBox.childNodes.length > 1) {
            lastBox.childNodes[1].classList.add("dragging")

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
        }
        pokedexBoxArea.removeChild(lastBox); // Remove the last child
      }
    }
    count = inputValue; 
    return;
  }
  
  for (let n = count + 1; n <= inputValue; n++) {
    const div = document.createElement("div")
    const p = document.createElement("p")

    div.setAttribute("class", "pokedex_box")
    p.setAttribute("class", "pokedex_number")
    p.textContent = n

    div.appendChild(p)
    pokedexBoxArea.appendChild(div)

    div.addEventListener("dragover", dragOver);
    div.addEventListener("dragenter", dragEnter);
    div.addEventListener("dragleave", dragLeave);
    div.addEventListener("drop", drop);
  }

  count = inputValue

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

dragImages.forEach(function (image) {
  image.addEventListener("dragstart", dragStart);
  image.addEventListener("dragend", dragEnd);
});

function exportDivToImage() {
  const divExport = document.querySelector("#pokedex_display");
  console.log(divExport)

  html2canvas(divExport).then((canvas) => {
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "my-pokedex.png"; 
    link.click();
  });
}

pokemonSprites.addEventListener("dragover", dragOver);
pokemonSprites.addEventListener("dragenter", dragEnter);
pokemonSprites.addEventListener("dragleave", dragLeave);
pokemonSprites.addEventListener("drop", returnToOriginalPosition);
submitbutton.addEventListener("click", populateBoxArea)
downloadButton.addEventListener("click", exportDivToImage)