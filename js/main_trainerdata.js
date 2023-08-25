console.log('Welcome to the world of Pokemon!')

let rbgGame = document.querySelector("#rbg");
let yGame = document.querySelector("#y");
let gscGame = document.querySelector("#gsc");
let rsGame = document.querySelector("#rs");
let frlgGame = document.querySelector("#frlg");
let eGame = document.querySelector("#e");
let dpGame = document.querySelector("#dp");
let hgssGame = document.querySelector("#hgss");
let ptGame = document.querySelector("#pt");
let bwGame = document.querySelector("#bw");
let b2w2Game = document.querySelector("#b2w2");
let b2w2CGame = document.querySelector("#b2w2c");
let xyGame = document.querySelector("#xy");
let orasGame = document.querySelector("#oras");
let smGame = document.querySelector("#sm");
let usumGame = document.querySelector("#usum");
let lgpeGame = document.querySelector("#lgpe");
let swshGame = document.querySelector("#swsh");
let bdspGame = document.querySelector("#bdsp");
let svGame = document.querySelector("#sv");

const characterDivs = document.querySelectorAll('.character_name');
const gameDivs = document.querySelectorAll('.game')

let currentTrainerId = null
let lastCheckedContainer = null

function toggleDisplay(element) {
    if (!element.style.display || element.style.display === "none") {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  }

function hideOtherCharacters(activeChars, otherCharsArray) {
  if (activeChars.style.display === "flex") {
      otherCharsArray.forEach(characters => {
          characters.style.display = "none";
      });
  }
}

function toggleAndHide(charsId) {
  const activeChars = document.getElementById(charsId);
  const allCharacters = document.querySelectorAll('.characters');
  
  toggleDisplay(activeChars);
  hideOtherCharacters(activeChars, Array.from(allCharacters).filter(chars => chars !== activeChars));
}

function openRBG() {
  toggleAndHide("rbg_chars");
}

function openY() {
  toggleAndHide("y_chars");
}

function openGSC() {
    toggleAndHide("gsc_chars");
}

function openRS() {
    toggleAndHide("rs_chars");
}

function openFRLG() {
    toggleAndHide("frlg_chars");
}

function openE() {
    toggleAndHide("e_chars");
}

function openDP() {
    toggleAndHide("dp_chars");
}

function openHGSS() {
    toggleAndHide("hgss_chars");
}

function openPT() {
    toggleAndHide("pt_chars");
}

function openBW() {
    toggleAndHide("bw_chars");
}

function openB2W2() {
    toggleAndHide("b2w2_chars");
}

function openB2W2C() {
  toggleAndHide("b2w2c_chars");
}

function openXY() {
    toggleAndHide("xy_chars");
}

function openORAS() {
    toggleAndHide("oras_chars");
}

function openSM() {
    toggleAndHide("sm_chars");
}

function openUSUM() {
    toggleAndHide("usum_chars");
}

function openLGPE() {
    toggleAndHide("lgpe_chars");
}

function openSWSH() {
    toggleAndHide("swsh_chars");
}

function openBDSP() {
    toggleAndHide("bdsp_chars");
}

function openSV() {
    toggleAndHide("sv_chars");
}

function toggleCheckbox(checkbox) {
  checkbox.checked = !checkbox.checked;
}

function uncheckAllCheckboxes() {
  characterDivs.forEach(div => {
    const checkbox = div.querySelector('.custom_checkbox');
    checkbox.checked = false;
  });
}

function uncheckAllGameCheckboxes() {
    gameDivs.forEach(div => { // Use gameDivs instead of characterDivs
        const checkbox = div.querySelector('.game_checkbox');
        if (checkbox) {
            checkbox.checked = false;
        }
    });
}


rbgGame.addEventListener('click', openRBG);
yGame.addEventListener('click', openY);
gscGame.addEventListener('click', openGSC);
rsGame.addEventListener('click', openRS);
frlgGame.addEventListener('click', openFRLG);
eGame.addEventListener('click', openE);
dpGame.addEventListener('click', openDP);
hgssGame.addEventListener('click', openHGSS);
ptGame.addEventListener('click', openPT);
bwGame.addEventListener('click', openBW);
b2w2Game.addEventListener('click', openB2W2);
b2w2CGame.addEventListener('click', openB2W2C);
xyGame.addEventListener('click', openXY);
orasGame.addEventListener('click', openORAS);
smGame.addEventListener('click', openSM);
usumGame.addEventListener('click', openUSUM);
lgpeGame.addEventListener('click', openLGPE);
swshGame.addEventListener('click', openSWSH);
bdspGame.addEventListener('click', openBDSP);
svGame.addEventListener('click', openSV);

characterDivs.forEach(div => {
    div.addEventListener('click', function() {
      const checkbox = this.querySelector('.custom_checkbox');
      uncheckAllCheckboxes();
      toggleCheckbox(checkbox);
    });
  });

  gameDivs.forEach(div => {
    div.addEventListener('click', function() {
        const checkbox = this.querySelector('.game_checkbox');
        uncheckAllGameCheckboxes();
      toggleCheckbox(checkbox);
    });
  });