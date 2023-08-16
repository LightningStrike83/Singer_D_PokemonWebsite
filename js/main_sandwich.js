console.log('Welcome to the world of Pokemon!');

let grassy = document.querySelector('#grassy');
let watery = document.querySelector('#watery');
let caves = document.querySelector('#caves');
let rocky = document.querySelector('#rocky');
let underground = document.querySelector('#underground');
let hidden = document.querySelector('#hidden');
let legendArea = document.querySelector('#legend_click');
var grassyCheckbox = document.querySelector('#grassy_checkbox');
var wateryCheckbox = document.querySelector('#watery_checkbox');
var cavesCheckbox = document.querySelector('#caves_checkbox');
var rockyCheckbox = document.querySelector('#rocky_checkbox');
var undergroundCheckbox = document.querySelector('#underground_checkbox');
var hiddenCheckbox = document.querySelector('#hidden_checkbox');

function grassyPokemon() {
    var girafarig = document.querySelectorAll('.girafarig');
    var farigiraf = document.querySelectorAll('.farigiraf');
    var venomoth = document.querySelectorAll('.venomoth');
    var corviknight = document.querySelectorAll('.corviknight');
    var jumpluff = document.querySelectorAll('.jumpluff');
    var pawmi = document.querySelectorAll('.pawmi');
    var pawmo = document.querySelectorAll('.pawmo');
    var braviary = document.querySelectorAll('.braviary');
    var raichu = document.querySelectorAll('.raichu');
    var floette = document.querySelectorAll('.floette');
    var volcarona = document.querySelectorAll('.volcarona');
    var meditite = document.querySelectorAll('.meditite');
    var medicham = document.querySelectorAll('.medicham');
    var espeon = document.querySelectorAll('.espeon');
    var slitherWing = document.querySelectorAll('.slither_wing');
    var screamTail = document.querySelectorAll('.scream_tail');
    var bruteBonnet = document.querySelectorAll('.brute_bonnet');
    var ironBundle = document.querySelectorAll('.iron_bundle');
    var ironHands = document.querySelectorAll('.iron_hands');
    var ironMoth = document.querySelectorAll('.iron_moth');
    grassyCheckbox.checked = !grassyCheckbox.checked;

    girafarig.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    farigiraf.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

   corviknight.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    jumpluff.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    venomoth.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    pawmi.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    pawmo.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    braviary.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    raichu.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    floette.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    volcarona.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    meditite.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    medicham.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    espeon.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    slitherWing.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    screamTail.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    bruteBonnet.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    ironBundle.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    ironHands.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });

    ironMoth.forEach(function(element) {
        element.classList.toggle("grassy_show");
    });
}

function wateryPokemon() {
    var buizel = document.querySelectorAll('.buizel');
    var floatzel = document.querySelectorAll('.floatzel');
    var flamigo = document.querySelectorAll('.flamigo');
    var golduck = document.querySelectorAll('.golduck');
    var swablu = document.querySelectorAll('.swablu');
    var altaria = document.querySelectorAll('.altaria');
    var vaporeon = document.querySelectorAll('.vaporeon');
    var masquerain = document.querySelectorAll('.masquerain');
    var bisharp = document.querySelectorAll('.bisharp');
    var tadbulb = document.querySelectorAll('.tadbulb');
    var bellibolt = document.querySelectorAll('.bellibolt');
    var dreepy = document.querySelectorAll('.dreepy');
    var drakloak = document.querySelectorAll('.drakloak');

    wateryCheckbox.checked = !wateryCheckbox.checked;

    buizel.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    floatzel.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    flamigo.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    golduck.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    swablu.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    altaria.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    vaporeon.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    masquerain.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    bisharp.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    tadbulb.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    bellibolt.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    dreepy.forEach(function(element) {
        element.classList.toggle("watery_show");
    });

    drakloak.forEach(function(element) {
        element.classList.toggle("watery_show");
    });
}

function cavesPokemon() {
    var pawmi = document.querySelectorAll('.pawmi');
    var pawmo = document.querySelectorAll('.pawmo');
    var golduck = document.querySelectorAll('.golduck');
    var sneasel = document.querySelectorAll('.sneasel');
    var lycanrocM = document.querySelectorAll('.lycanroc_m');
    var chansey = document.querySelectorAll('.chansey');
    var espeon = document.querySelectorAll('.espeon');
    var sableye = document.querySelectorAll('.sableye');
    var zweilous = document.querySelectorAll('.zweilous');

    cavesCheckbox.checked = !cavesCheckbox.checked;

    pawmi.forEach(function(element) {
        element.classList.toggle("caves_show");
    });

    pawmo.forEach(function(element) {
        element.classList.toggle("caves_show");
    });

    golduck.forEach(function(element) {
        element.classList.toggle("caves_show");
    });

    sneasel.forEach(function(element) {
        element.classList.toggle("caves_show");
    });

    lycanrocM.forEach(function(element) {
        element.classList.toggle("caves_show");
    });

    chansey.forEach(function(element) {
        element.classList.toggle("caves_show");
    });

    espeon.forEach(function(element) {
        element.classList.toggle("caves_show");
    });

    sableye.forEach(function(element) {
        element.classList.toggle("caves_show");
    });

    zweilous.forEach(function(element) {
        element.classList.toggle("caves_show");
    });
}

function rockyPokemon() {
    var nacli = document.querySelectorAll('.nacli');
    var naclstack = document.querySelectorAll('.naclstack');
    var garganacl = document.querySelectorAll('.garganacl');
    var lycanroc = document.querySelectorAll('.lycanroc');
    var phanpy = document.querySelectorAll('.phanpy');
    var donphan = document.querySelectorAll('.donphan');
    var cufant = document.querySelectorAll('.cufant');
    var copperajah = document.querySelectorAll('.copperajah');
    var hawlucha = document.querySelectorAll('.hawlucha');
    var murkrow = document.querySelectorAll('.murkrow');
    var honchkrow = document.querySelectorAll('.honchkrow');
    var gogoat = document.querySelectorAll('.gogoat');
    var talonflame = document.querySelectorAll('.talonflame');
    var lokix = document.querySelectorAll('.lokix');
    var sandyShocks = document.querySelectorAll('.sandy_shocks');
    var ironThorns = document.querySelectorAll('.iron_thorns');

    rockyCheckbox.checked = !rockyCheckbox.checked;

    nacli.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    naclstack.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    garganacl.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    lycanroc.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    phanpy.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    donphan.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    cufant.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    copperajah.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    hawlucha.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    murkrow.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    honchkrow.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    gogoat.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    talonflame.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    lokix.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    sandyShocks.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });

    ironThorns.forEach(function(element) {
        element.classList.toggle("rocky_show");
    });
}

function undergroundPokemon() {
    var dunsparce = document.querySelectorAll('.dunsparce');
    var dudunsparce = document.querySelectorAll('.dudunsparce');
    var garganacl = document.querySelectorAll('.garganacl');
    var espathra = document.querySelectorAll('.espathra');
    var gible = document.querySelectorAll('.gible');
    var gabite = document.querySelectorAll('.gabite');
    var dugtrio = document.querySelectorAll('.dugtrio');
    var glimmet = document.querySelectorAll('.glimmet');
    var glimmora = document.querySelectorAll('.glimmora');
    var zweilous = document.querySelectorAll('.zweilous');
    var greatTusk = document.querySelectorAll('.great_tusk')
    var screamTail = document.querySelectorAll('.scream_tail');
    var bruteBonnet = document.querySelectorAll('.brute_bonnet');
    var flutterMane = document.querySelectorAll('.flutter_mane');
    var dreepy = document.querySelectorAll('.dreepy');
    var drakloak = document.querySelectorAll('.drakloak');
    var ironTreads = document.querySelectorAll('.iron_treads');
    var ironBundle = document.querySelectorAll('.iron_bundle');
    var ironHands = document.querySelectorAll('.iron_hands');
    var ironJugulis = document.querySelectorAll('.iron_jugulis');

    undergroundCheckbox.checked = !undergroundCheckbox.checked;

    dunsparce.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    dudunsparce.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    garganacl.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    espathra.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    gible.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    gabite.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    dugtrio.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    glimmet.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    glimmora.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    zweilous.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    greatTusk.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    screamTail.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    bruteBonnet.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    flutterMane.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    dreepy.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    drakloak.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    ironTreads.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    ironBundle.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    ironHands.forEach(function(element) {
        element.classList.toggle("underground_show");
    });

    ironJugulis.forEach(function(element) {
        element.classList.toggle("underground_show");
    });
}

function hiddenPokemon() {
    var greavard = document.querySelectorAll('.greavard');
    var houndstone = document.querySelectorAll('.houndstone');
    var gible = document.querySelectorAll('.gible');
    var gabite = document.querySelectorAll('.gabite');
    var chansey = document.querySelectorAll('.chansey');
    var dugtrio = document.querySelectorAll('.dugtrio');
    var lycanrocM = document.querySelectorAll('.lycanroc_m');
    var espeon = document.querySelectorAll('.espeon');
    var sneasel = document.querySelectorAll('.sneasel');
    var weavile = document.querySelectorAll('.weavile');
    var golduck = document.querySelectorAll('.golduck');
    var umbreon = document.querySelectorAll('.umbreon');
    var buizel = document.querySelectorAll('.buizel');
    var floatzel = document.querySelectorAll('.floatzel');
    var pawmi = document.querySelectorAll('.pawmi');
    var pawmo = document.querySelectorAll('.pawmo');
    var zweilous = document.querySelectorAll('.zweilous');
    var flutterMane = document.querySelectorAll('.flutter_mane');
    var roaringMoon = document.querySelectorAll('.roaring_moon');
    var ironJugulis = document.querySelectorAll('.iron_jugulis');
    var ironValiant = document.querySelectorAll('.iron_valiant');

    hiddenCheckbox.checked = !hiddenCheckbox.checked;

    greavard.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    houndstone.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    gible.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    gabite.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    chansey.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    dugtrio.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    lycanrocM.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    espeon.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    sneasel.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    weavile.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });
    
    golduck.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    umbreon.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    buizel.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    floatzel.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    pawmi.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    pawmo.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    zweilous.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    flutterMane.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    roaringMoon.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    ironJugulis.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });

    ironValiant.forEach(function(element) {
        element.classList.toggle("hidden_show");
    });
}

function grassyCheckboxClicked(event) {
    grassyCheckbox.checked = !grassyCheckbox.checked;
    grassyPokemon();
    event.stopPropagation();
}

function rockyCheckboxClicked(event) {
    rockyCheckbox.checked = !rockyCheckbox.checked;
    rockyPokemon();
    event.stopPropagation();
}

function wateryCheckboxClicked(event) {
    wateryCheckbox.checked = !wateryCheckbox.checked;
    wateryPokemon();
    event.stopPropagation();
}

function cavesCheckboxClicked(event) {
    cavesCheckbox.checked = !cavesCheckbox.checked;
    cavesPokemon();
    event.stopPropagation();
}

function undergroundCheckboxClicked(event) {
    undergroundCheckbox.checked = !undergroundCheckbox.checked;
    undergroundPokemon();
    event.stopPropagation();
}

function hiddenCheckboxClicked(event) {
    hiddenCheckbox.checked = !hiddenCheckbox.checked;
    hiddenPokemon();
    event.stopPropagation();
}

function legendDisplay() {
    let legendInfo = document.querySelector('#legend_info');
    legendInfo.style.display = (legendInfo.style.display === 'block') ? 'none' : 'block';
}

grassy.addEventListener('click', grassyPokemon);
grassyCheckbox.addEventListener('click', grassyCheckboxClicked);
watery.addEventListener('click', wateryPokemon);
wateryCheckbox.addEventListener('click', wateryCheckboxClicked);
caves.addEventListener('click', cavesPokemon);
cavesCheckbox.addEventListener('click', cavesCheckboxClicked);
rocky.addEventListener('click', rockyPokemon);
rockyCheckbox.addEventListener('click', rockyCheckboxClicked);
underground.addEventListener('click', undergroundPokemon);
undergroundCheckbox.addEventListener('click', undergroundCheckboxClicked);
hidden.addEventListener('click', hiddenPokemon);
hiddenCheckbox.addEventListener('click', hiddenCheckboxClicked);
legendArea.addEventListener('click', legendDisplay);