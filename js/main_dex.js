console.log('Welcome to the world of Pokemon!');

const tips = document.querySelector("#tips_click");
const pokemonSprites = document.querySelector("#pokemon_sprites");
const spriteArea = document.querySelector("#sprite_area")
const dragImages = document.querySelectorAll(".sprite_item img");
const submitbutton = document.querySelector("#pd-submit-button")
const downloadButton = document.querySelector("#pd-download")
const baseURL = "http://localhost/Singer_D_PokemonWebsite/lumen/public/"
const errorHandle = document.querySelector("#error-handle")
let count = 0

function openTips() {
  const tipsBox = document.querySelector("#tips_box")

  if (tipsBox.style.visibility === "visible") {
    tipsBox.style.opacity = "0",
    tipsBox.style.visibility = "hidden"
  } else (
      tipsBox.style.opacity = "1",
      tipsBox.style.visibility = "visible"
  )
}

function populateBoxArea() {
  const pokedexBoxArea = document.querySelector("#pokedex_display")
  const input = document.querySelector("#pd-input")
  let inputValue = parseInt(input.value)
  const box = document.querySelectorAll(".pokedex_box")

  if (inputValue < count) {
    const boxesToRemove = count - inputValue;
    
    for (let i = 0; i < boxesToRemove; i++) {
      const lastBox = pokedexBoxArea.lastChild;
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
    const mobileList = document.createElement("select")
    const blankOption = document.createElement("option")
    const allOption = document.createElement("option")
    const regionalOption = document.createElement("option")

    div.setAttribute("class", "pokedex_box")
    p.setAttribute("class", "pokedex_number")
    p.textContent = n

    div.appendChild(p)
    pokedexBoxArea.appendChild(div)

    div.addEventListener("dragover", dragOver);
    div.addEventListener("dragenter", dragEnter);
    div.addEventListener("dragleave", dragLeave);
    div.addEventListener("drop", drop);

    allOption.disabled = true
    regionalOption.disabled = true
    allOption.selected = true

    allOption.innerHTML = "--Select A Pokemon--"
    regionalOption.innerHTML = "--Regional Forms--"

    mobileList.setAttribute("class", "mobile_select")

    Promise.all([
      fetch(`${baseURL}gen/all-no-alt/dex`)
      .then(response => response.json()),
      fetch(`${baseURL}custom/regional`)
      .then(response => response.json())
    ]).then(([allData, regionalData]) => {
      errorHandle.textContent = ""

      mobileList.appendChild(allOption)

      allData.forEach(pokemon => {
          const mobileBaseOption = document.createElement("option");
          mobileBaseOption.textContent = pokemon.name;
          mobileBaseOption.value = pokemon.number;

          mobileList.appendChild(mobileBaseOption);
      });

      mobileList.appendChild(blankOption)
      mobileList.appendChild(regionalOption)

      regionalData.forEach(pokemon => {
          const mobileRegionalOption = document.createElement("option");
          mobileRegionalOption.textContent = pokemon.name;
          mobileRegionalOption.value = pokemon.number;
          mobileList.appendChild(mobileRegionalOption);
      });

      div.appendChild(mobileList);

      mobileList.addEventListener("change", addPokemonImage);
      })
      .catch(error => {
        const p = document.createElement("p")

        p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

        errorHandle.appendChild(p)
      });
  }

  count = inputValue;
}

function addPokemonImage(){
  const box = this.parentNode
  const img = document.createElement("img")
  const source = this.value
  let imgCheck = box.querySelector("img")

  if (imgCheck) {
    imgCheck.src = `images/custom_pokedex/${source}.png`
  } else {
    img.src = `images/custom_pokedex/${source}.png`
    box.appendChild(img)
    img.setAttribute("class", "mobile_image")
    img.setAttribute("alt", `Image of Pokemon ${source}`)
  }
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

dragImages.forEach(function (image) {
  image.addEventListener("dragstart", dragStart);
  image.addEventListener("dragend", dragEnd);
});

function exportDivToImage() {
  const divExport = document.querySelector("#pokedex_display");
  const mobileSelect = document.querySelectorAll(".mobile_select")
  const pokedexBox = document.querySelectorAll(".pokedex_box")
  const mobileImage = document.querySelectorAll(".mobile_image")

  mobileSelect.forEach(list => list.remove())
  mobileImage.forEach(image => image.style.marginBottom = "0")

  html2canvas(divExport).then((canvas) => {
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "my-pokedex.png"; 
    link.click();
  });

  pokedexBox.forEach(box => {
    const mobileList = document.createElement("select")
    const blankOption = document.createElement("option")
    const allOption = document.createElement("option")
    const regionalOption = document.createElement("option")

    allOption.disabled = true
    regionalOption.disabled = true
    allOption.selected = true

    allOption.innerHTML = "--Select A Pokemon--"
    regionalOption.innerHTML = "--Regional Forms--"

    mobileList.setAttribute("class", "mobile_select")

    Promise.all([
      fetch(`${baseURL}gen/all-no-alt/dex`)
      .then(response => response.json()),
      fetch(`${baseURL}custom/regional`)
      .then(response => response.json())
    ]).then(([allData, regionalData]) => {
      errorHandle.textContent = ""

      mobileList.appendChild(allOption)

      allData.forEach(pokemon => {
          const mobileBaseOption = document.createElement("option");
          mobileBaseOption.textContent = pokemon.name;
          mobileBaseOption.value = pokemon.number;

          mobileList.appendChild(mobileBaseOption);
      });

      mobileList.appendChild(blankOption)
      mobileList.appendChild(regionalOption)

      regionalData.forEach(pokemon => {
          const mobileRegionalOption = document.createElement("option");
          mobileRegionalOption.textContent = pokemon.name;
          mobileRegionalOption.value = pokemon.number;
          mobileList.appendChild(mobileRegionalOption);
      });

      box.appendChild(mobileList);

      mobileList.addEventListener("change", addPokemonImage)
    })
    .catch(error => {
      const p = document.createElement("p")

      p.textContent = `Sorry, something went wrong. Please refresh the page and try again. ${error}`

      errorHandle.appendChild(p)
    })

  mobileImage.forEach(image => image.style.marginBottom = "20px")
  })


}

spriteArea.addEventListener("dragover", dragOver);
spriteArea.addEventListener("dragenter", dragEnter);
spriteArea.addEventListener("dragleave", dragLeave);
spriteArea.addEventListener("drop", returnToOriginalPosition);
submitbutton.addEventListener("click", populateBoxArea)
downloadButton.addEventListener("click", exportDivToImage)
tips.addEventListener("click", openTips)