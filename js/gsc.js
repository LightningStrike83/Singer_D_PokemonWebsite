let falknerGSC = document.querySelector ("#falkner1");
let bugsyGSC = document.querySelector ("#bugsy1");
let whitneyGSC = document.querySelector ("#whitney1");
let mortyGSC = document.querySelector ("#morty1");
let chuckGSC = document.querySelector ("#chuck1");
let jasmineGSC = document.querySelector ("#jasmine1");
let pryceGSC = document.querySelector ("#pryce1");
let clairGSC = document.querySelector ("#clair1");
let willGSC = document.querySelector ("#will1");
let kogaGSC = document.querySelector ("#koga3");
let brunoGSC = document.querySelector ("#bruno3");
let karenGSC = document.querySelector ("#karen1");
let lanceGSC = document.querySelector ("#lance3");
let brockGSC = document.querySelector ("#brock3");
let mistyGSC = document.querySelector ("#misty3");
let ltsurgeGSC = document.querySelector ("#ltsurge3");
let erikaGSC = document.querySelector ("#erika3");
let janineGSC = document.querySelector ("#janine1");
let sabrinaGSC = document.querySelector ("#sabrina3");
let blaineGSC = document.querySelector ("#blaine3");
let blueGSC = document.querySelector ("#blue3");
let redGSC = document.querySelector ("#red1");

let gsc_trainers = [
    {
        namea : "Pidgey",
        levela : "LV: 7",
        typea : "Type: Normal/Flying",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 24",
        atka : "Atk: 12",
        defa : "Def: 12",
        spatka : "Sp. Atk: 10",
        spdefa : "Sp. Def: 10",
        spda : "Spd: 13",
        move1a : "-Tackle",
        move2a : "-Mud-Slap",
        move3a : "",
        move4a : "",

        nameb : "Pidgeotto",
        levelb : "LV: 9",
        typeb : "Type: Normal/Flying",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 32",
        atkb : "Atk: 17",
        defb : "Def: 16",
        spatkb : "Sp. Atk: 15",
        spdefb : "Sp. Def: 15",
        spdb : "Spd: 19",
        move1b : "-Tackle",
        move2b : "-Mud-Slap",
        move3b : "-Gust",
        move4b : "",
    },

    {
        namea : "Metapod",
        levela : "LV: 14",
        typea : "Type: Bug",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 40",
        atka : "Atk: 13",
        defa : "Def: 22",
        spatka : "Sp. Atk: 14",
        spdefa : "Sp. Def: 14",
        spda : "Spd: 15",
        move1a : "-Tackle",
        move2a : "-String Shot",
        move3a : "-Harden",
        move4a : "",

        nameb : "Kakuna",
        levelb : "LV: 14",
        typeb : "Type: Bug/Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 38",
        atkb : "Atk: 14",
        defb : "Def: 21",
        spatkb : "Sp. Atk: 14",
        spdefb : "Sp. Def: 14",
        spdb : "Spd: 17",
        move1b : "-Poison Sting",
        move2b : "-String Shot",
        move3b : "-Harden",
        move4b : "",

        namec : "Scyther",
        levelc : "LV: 16",
        typec : "Type: Bug/Flying",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 50",
        atkc : "Atk: 43",
        defc : "Def: 33",
        spatkc : "Sp. Atk: 25",
        spdefc : "Sp. Def: 33",
        spdc : "Spd: 41",
        move1c : "-Fury Cutter",
        move2c : "-Quick Attack",
        move3c : "-Leer",
        move4c : "",
    },

    {
        namea : "Clefairy",
        levela : "LV: 18",
        typea : "Type: Normal",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 53",
        atka : "Atk: 24",
        defa : "Def: 25",
        spatka : "Sp. Atk: 29",
        spdefa : "Sp. Def: 31",
        spda : "Spd: 20",
        move1a : "-Encore",
        move2a : "-Mimic",
        move3a : "-Double Slap",
        move4a : "-Metronome",

        nameb : "Miltank",
        levelb : "LV: 20",
        typeb : "Type: Normal",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 68",
        atkb : "Atk: 40",
        defb : "Def: 50",
        spatkb : "Sp. Atk: 24",
        spdefb : "Sp. Def: 36",
        spdb : "Spd: 48",
        move1b : "-Stomp",
        move2b : "-Attract",
        move3b : "-Milk Drink",
        move4b : "-Rollout",
    },

    {
        namea : "Gastly",
        levela : "LV: 21",
        typea : "Type: Ghost/Poison",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 46",
        atka : "Atk: 23",
        defa : "Def: 20",
        spatka : "Sp. Atk: 50",
        spdefa : "Sp. Def: 23",
        spda : "Spd: 41",
        move1a : "-Lick",
        move2a : "-Spite",
        move3a : "-Mean Look",
        move4a : "-Curse",

        nameb : "Haunter",
        levelb : "LV: 21",
        typeb : "Type: Ghost/Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 53",
        atkb : "Atk: 29",
        defb : "Def: 27",
        spatkb : "Sp. Atk: 56",
        spdefb : "Sp. Def: 31",
        spdb : "Spd: 38",
        move1b : "-Hypnosis",
        move2b : "-Curse",
        move3b : "-Mimic",
        move4b : "-Night Shade",

        namec : "Gengar",
        levelc : "LV: 25",
        typec : "Type: Ghost/Poison",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 69",
        atkc : "Atk: 42",
        defc : "Def: 39",
        spatkc : "Sp. Atk: 74",
        spdefc : "Sp. Def: 46",
        spdc : "Spd: 64",
        move1c : "-Hypnosis",
        move2c : "-Mean Look",
        move3c : "-Shadow Ball",
        move4c : "-Dream Eater",

        named : "Haunter",
        leveld : "LV: 23",
        typed : "Type: Ghost/Poison",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 57",
        atkd : "Atk: 32",
        defd : "Def: 29",
        spatkd : "Sp. Atk: 61",
        spdefd : "Sp. Def: 33",
        spdd : "Spd: 52",
        move1d : "-Spite",
        move2d : "-Mimic",
        move3d : "-Mean Look",
        move4d : "-Night Shade",
    },

    {
        namea : "Primeape",
        levela : "LV: 27",
        typea : "Type: Fighting",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 76",
        atka : "Atk: 66",
        defa : "Def: 41",
        spatka : "Sp. Atk: 41",
        spdefa : "Sp. Def: 47",
        spda : "Spd: 60",
        move1a : "-Leer",
        move2a : "-Rage",
        move3a : "-Karate Chop",
        move4a : "-Fury Swipes",

        nameb : "Poliwrath",
        levelb : "LV: 30",
        typeb : "Type: Water/Fighting",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 98",
        atkb : "Atk: 61",
        defb : "Def: 66",
        spatkb : "Sp. Atk: 51",
        spdefb : "Sp. Def: 63",
        spdb : "Spd: 51",
        move1b : "-Hypnosis",
        move2b : "-Surf",
        move3b : "-Mind Reader",
        move4b : "-Dynamic Punch",
    },

    {
        namea : "Magnemite",
        levela : "LV: 30",
        typea : "Type: Electric/Steel",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 59",
        atka : "Atk: 31",
        defa : "Def: 50",
        spatka : "Sp. Atk: 66",
        spdefa : "Sp. Def: 42",
        spda : "Spd: 36",
        move1a : "-Thunderbolt",
        move2a : "-Supersonic",
        move3a : "-Sonic Boom",
        move4a : "-Thunder Wave",

        nameb : "Magnemite",
        levelb : "LV: 30",
        typeb : "Type: Electric/Steel",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 59",
        atkb : "Atk: 31",
        defb : "Def: 50",
        spatkb : "Sp. Atk: 66",
        spdefb : "Sp. Def: 42",
        spdb : "Spd: 36",
        move1b : "-Thunderbolt",
        move2b : "-Supersonic",
        move3b : "-Sonic Boom",
        move4b : "-Thunder Wave",

        namec : "Steelix",
        levelc : "LV: 35",
        typec : "Type: Steel/Ground",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 103",
        atkc : "Atk: 70",
        defc : "Def: 150",
        spatkc : "Sp. Atk: 49",
        spdefc : "Sp. Def: 56",
        spdc : "Spd: 31",
        move1c : "-Iron Tail",
        move2c : "-Rock Throw",
        move3c : "-Screech",
        move4c : "-Sunny Day",
    },

    {
        namea : "Seel",
        levela : "LV: 27",
        typea : "Type: Water/Ice",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 76",
        atka : "Atk: 34",
        defa : "Def: 39",
        spatka : "Sp. Atk: 33",
        spdefa : "Sp. Def: 47",
        spda : "Spd: 33",
        move1a : "-Icy Wind",
        move2a : "-Rest",
        move3a : "-Aurora Beam",
        move4a : "-Headbutt",

        nameb : "Dewgong",
        levelb : "LV: 29",
        typeb : "Type: Water/Ice",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 95",
        atkb : "Atk: 50",
        defb : "Def: 56",
        spatkb : "Sp. Atk: 50",
        spdefb : "Sp. Def: 64",
        spdb : "Spd: 50",
        move1b : "-Aurora Beam",
        move2b : "-Rest",
        move3b : "-Headbutt",
        move4b : "-Icy Wind",

        namec : "Piloswine",
        levelc : "LV: 31",
        typec : "Type: Ice/Ground",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 107",
        atkc : "Atk: 72",
        defc : "Def: 59",
        spatkc : "Sp. Atk: 47",
        spdefc : "Sp. Def: 47",
        spdc : "Spd: 40",
        move1c : "-Blizzard",
        move2c : "-Fury Attack",
        move3c : "-Mist",
        move4c : "-Icy Wind",
    },

    {
        namea : "Dragonair",
        levela : "LV: 37",
        typea : "Type: Dragon",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 100",
        atka : "Atk: 72",
        defa : "Def: 61",
        spatka : "Sp. Atk: 66",
        spdefa : "Sp. Def: 66",
        spda : "Spd: 66",
        move1a : "-Surf",
        move2a : "-Dragon Breath",
        move3a : "-Slam",
        move4a : "-Thunder Wave",

        nameb : "Dragonair",
        levelb : "LV: 37",
        typeb : "Type: Dragon",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 100",
        atkb : "Atk: 72",
        defb : "Def: 61",
        spatkb : "Sp. Atk: 66",
        spdefb : "Sp. Def: 66",
        spdb : "Spd: 66",
        move1b : "-Thunderbolt",
        move2b : "-Dragon Breath",
        move3b : "-Slam",
        move4b : "-Thunder Wave",

        namec : "Dragonair",
        levelc : "LV: 37",
        typec : "Type: Dragon",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 100",
        atkc : "Atk: 72",
        defc : "Def: 61",
        spatkc : "Sp. Atk: 66",
        spdefc : "Sp. Def: 66",
        spdc : "Spd: 66",
        move1c : "-Ice Beam",
        move2c : "-Dragon Breath",
        move3c : "-Slam",
        move4c : "-Thunder Wave",

        named : "Kingdra",
        leveld : "LV: 40",
        typed : "Type: Water/Dragon",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 118",
        atkd : "Atk: 86",
        defd : "Def: 90",
        spatkd : "Sp. Atk: 91",
        spdefd : "Sp. Def: 91",
        spdd : "Spd: 83",
        move1d : "-Surf",
        move2d : "-Dragon Breath",
        move3d : "-Smokescreen",
        move4d : "-Hyper Beam",
    },

    {
        namea : "Xatu",
        levela : "LV: 40",
        typea : "Type: Psychic/Flying",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 110",
        atka : "Atk: 75",
        defa : "Def: 70",
        spatka : "Sp. Atk: 91",
        spdefa : "Sp. Def: 71",
        spda : "Spd: 91",
        move1a : "-Quick Attack",
        move2a : "-Future Sight",
        move3a : "-Confuse Ray",
        move4a : "-Psychic",

        nameb : "Exeggutor",
        levelb : "LV: 41",
        typeb : "Type: Grass/Psychic",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 137",
        atkb : "Atk: 93",
        defb : "Def: 84",
        spatkb : "Sp. Atk: 118",
        spdefb : "Sp. Def: 68",
        spdb : "Spd: 60",
        move1b : "-Reflect",
        move2b : "-Egg Bomb",
        move3b : "-Psychic",
        move4b : "-Leech Seed",

        namec : "Slowbro",
        levelc : "LV: 41",
        typec : "Type: Water/Psychic",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 137",
        atkc : "Atk: 77",
        defc : "Def: 105",
        spatkc : "Sp. Atk: 97",
        spdefc : "Sp. Def: 81",
        spdc : "Spd: 40",
        move1c : "-Curse",
        move2c : "-Amnesia",
        move3c : "-Body Slam",
        move4c : "-Psychic",

        named : "Jynx",
        leveld : "LV: 41",
        typed : "Type: Ice/Psychic",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 113",
        atkd : "Atk: 56",
        defd : "Def: 43",
        spatkd : "Sp. Atk: 109",
        spdefd : "Sp. Def: 93",
        spdd : "Spd: 93",
        move1d : "-Lovely Kiss",
        move2d : "-Double Slap",
        move3d : "-Ice Punch",
        move4d : "-Psychic",

        namee : "Xatu",
        levele : "LV: 42",
        typee : "Type: Psychic/Flying",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 115",
        atke : "Atk: 78",
        defe : "Def: 73",
        spatke : "Sp. Atk: 95",
        spdefe : "Sp. Def: 74",
        spde : "Spd: 95",
        move1e : "-Quick Attack",
        move2e : "-Future Sight",
        move3e : "-Confuse Ray",
        move4e : "-Psychic",
    },

    {
        namea : "Ariados",
        levela : "LV: 40",
        typea : "Type: Bug/Poison",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 114",
        atka : "Atk: 87",
        defa : "Def: 70",
        spatka : "Sp. Atk: 63",
        spdefa : "Sp. Def: 63",
        spda : "Spd: 47",
        move1a : "-Spider Web",
        move2a : "-Baton Pass",
        move3a : "-Giga Drain",
        move4a : "-Double Team",

        nameb : "Venomoth",
        levelb : "LV: 41",
        typeb : "Type: Bug/Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 117",
        atkb : "Atk: 68",
        defb : "Def: 64",
        spatkb : "Sp. Atk: 89",
        spdefb : "Sp. Def: 78",
        spdb : "Spd: 89",
        move1b : "-Psychic",
        move2b : "-Gust",
        move3b : "-Supersonic",
        move4b : "-Toxic",

        namec : "Forretress",
        levelc : "LV: 43",
        typec : "Type: Bug/Steel",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 126",
        atkc : "Atk: 93",
        defc : "Def: 135",
        spatkc : "Sp. Atk: 67",
        spdefc : "Sp. Def: 67",
        spdc : "Spd: 50",
        move1c : "-Protect",
        move2c : "-Swift",
        move3c : "-Spikes",
        move4c : "-Explosion",

        named : "Muk",
        leveld : "LV: 42",
        typed : "Type: Poison",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 149",
        atkd : "Atk: 104",
        defd : "Def: 78",
        spatkd : "Sp. Atk: 70",
        spdefd : "Sp. Def: 99",
        spdd : "Spd: 57",
        move1d : "-Sludge Bomb",
        move2d : "-Acid Armor",
        move3d : "-Minimize",
        move4d : "-Toxic",

        namee : "Crobat",
        levele : "LV: 44",
        typee : "Type: Poison/Flying",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 138",
        atke : "Atk: 95",
        defe : "Def: 85",
        spatke : "Sp. Atk: 78",
        spdefe : "Sp. Def: 86",
        spde : "Spd: 130",
        move1e : "-Wing Attack",
        move2e : "-Quick Attack",
        move3e : "-Double Team",
        move4e : "-Toxic",
    },

    {
        namea : "Hitmontop",
        levela : "LV: 42",
        typea : "Type: Fighting",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 103",
        atka : "Atk: 95",
        defa : "Def: 94",
        spatka : "Sp. Atk: 45",
        spdefa : "Sp. Def: 108",
        spda : "Spd: 74",
        move1a : "-Detect",
        move2a : "-Pursuit",
        move3a : "-Dig",
        move4a : "-Quick Attack",

        nameb : "Hitmonlee",
        levelb : "LV: 42",
        typeb : "Type: Fighting",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 103",
        atkb : "Atk: 116",
        defb : "Def: 59",
        spatkb : "Sp. Atk: 45",
        spdefb : "Sp. Def: 108",
        spdb : "Spd: 89",
        move1b : "-High Jump Kick",
        move2b : "-Swagger",
        move3b : "-Double Kick",
        move4b : "-Foresight",

        namec : "Hitmonchan",
        levelc : "LV: 42",
        typec : "Type: Fighting",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 103",
        atkc : "Atk: 103",
        defc : "Def: 104",
        spatkc : "Sp. Atk: 45",
        spdefc : "Sp. Def: 108",
        spdc : "Spd: 79",
        move1c : "-Thunder Punch",
        move2c : "-Ice Punch",
        move3c : "-Fire Punch",
        move4c : "-Mach Punch",

        named : "Onix",
        leveld : "LV: 43",
        typed : "Type: Rock/Ground",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 92",
        atkd : "Atk: 54",
        defd : "Def: 152",
        spatkd : "Sp. Atk: 41",
        spdefd : "Sp. Def: 54",
        spdd : "Spd: 76",
        move1d : "-Sandstorm",
        move2d : "-Rock Slide",
        move3d : "-Earthquake",
        move4d : "-Bind",

        namee : "Machamp",
        levele : "LV: 46",
        typee : "Type: Fighting",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 148",
        atke : "Atk: 136",
        defe : "Def: 89",
        spatke : "Sp. Atk: 76",
        spdefe : "Sp. Def: 95",
        spde : "Spd: 67",
        move1e : "-Rock Slide",
        move2e : "-Foresight",
        move3e : "-Cross Chop",
        move4e : "-Vital Throw",
    },

    {
        namea : "Umbreon",
        levela : "LV: 42",
        typea : "Type: Dark",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 144",
        atka : "Atk: 65",
        defa : "Def: 110",
        spatka : "Sp. Atk: 68",
        spdefa : "Sp. Def: 125",
        spda : "Spd: 70",
        move1a : "-Feint Attack",
        move2a : "-Confuse Ray",
        move3a : "-Mean Look",
        move4a : "-Sand Attack",

        nameb : "Vileplume",
        levelb : "LV: 42",
        typeb : "Type: Grass/Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 127",
        atkb : "Atk: 78",
        defb : "Def: 89",
        spatkb : "Sp. Atk: 101",
        spdefb : "Sp. Def: 93",
        spdb : "Spd: 57",
        move1b : "-Stun Spore",
        move2b : "-Acid",
        move3b : "-Petal Dance",
        move4b : "-Moonlight",

        namec : "Murkrow",
        levelc : "LV: 44",
        typec : "Type: Dark/Flying",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 120",
        atkc : "Atk: 85",
        defc : "Def: 55",
        spatkc : "Sp. Atk: 93",
        spdefc : "Sp. Def: 55",
        spdc : "Spd: 96",
        move1c : "-Feint Attack",
        move2c : "-Whirlwind",
        move3c : "-Pursuit",
        move4c : "-Quick Attack",

        named : "Gengar",
        leveld : "LV: 45",
        typed : "Type: Ghost/Poison",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 122",
        atkd : "Atk: 69",
        defd : "Def: 72",
        spatkd : "Sp. Atk: 135",
        spdefd : "Sp. Def: 86",
        spdd : "Spd: 115",
        move1d : "-Lick",
        move2d : "-Spite",
        move3d : "-Destiny Bond",
        move4d : "-Curse",

        namee : "Houndoom",
        levele : "LV: 47",
        typee : "Type: Dark/Fire",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 141",
        atke : "Atk: 96",
        defe : "Def: 66",
        spatke : "Sp. Atk: 122",
        spdefe : "Sp. Def: 94",
        spde : "Spd: 106",
        move1e : "-Pursuit",
        move2e : "-Flamethrower",
        move3e : "-Crunch",
        move4e : "-Roar",
    },

    {
        namea : "Gyarados",
        levela : "LV: 44",
        typea : "Type: Water/Flying",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 147",
        atka : "Atk: 126",
        defa : "Def: 85",
        spatka : "Sp. Atk: 69",
        spdefa : "Sp. Def: 104",
        spda : "Spd: 87",
        move1a : "-Rain Dance",
        move2a : "-Surf",
        move3a : "-Flail",
        move4a : "-Hyper Beam",

        nameb : "Dragonite",
        levelb : "LV: 47",
        typeb : "Type: Dragon/Flying",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 152",
        atkb : "Atk: 143",
        defb : "Def: 105",
        spatkb : "Sp. Atk: 111",
        spdefb : "Sp. Def: 111",
        spdb : "Spd: 92",
        move1b : "-Twister",
        move2b : "-Thunder Wave",
        move3b : "-Blizzard",
        move4b : "-Hyper Beam",

        namec : "Charizard",
        levelc : "LV: 46",
        typec : "Type: Fire/Flying",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 137",
        atkc : "Atk: 94",
        defc : "Def: 87",
        spatkc : "Sp. Atk: 117",
        spdefc : "Sp. Def: 95",
        spdc : "Spd: 108",
        move1c : "-Flamethrower",
        move2c : "-Wing Attack",
        move3c : "-Slash",
        move4c : "-Hyper Beam",

        named : "Aerodactyl",
        leveld : "LV: 46",
        typed : "Type: Rock/Flying",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 139",
        atkd : "Atk: 113",
        defd : "Def: 75",
        spatkd : "Sp. Atk: 72",
        spdefd : "Sp. Def: 85",
        spdd : "Spd: 136",
        move1d : "-Rock Slide",
        move2d : "-Ancient Power",
        move3d : "-Wing Attack",
        move4d : "-Hyper Beam",

        namee : "Dragonite",
        levele : "LV: 47",
        typee : "Type: Dragon/Flying",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 152",
        atke : "Atk: 143",
        defe : "Def: 105",
        spatke : "Sp. Atk: 111",
        spdefe : "Sp. Def: 111",
        spde : "Spd: 92",
        move1e : "-Twister",
        move2e : "-Thunder Wave",
        move3e : "-Thunder",
        move4e : "-Hyper Beam",

        namef : "Dragonite",
        levelf : "LV: 50",
        typef : "Type: Dragon/Flying",
        abilityf: "",
        itemf : "Item: None",
        hpf : "HP: 162",
        atkf : "Atk: 152",
        deff : "Def: 112",
        spatkf : "Sp. Atk: 118",
        spdeff : "Sp. Def: 118",
        spdf : "Spd: 98",
        move1f : "-Outrage",
        move2f : "-Safeguard",
        move3f : "-Fire Blast",
        move4f : "-Hyper Beam",
    },

    {
        namea : "Graveler",
        levela : "LV: 41",
        typea : "Type: Rock/Ground",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 102",
        atka : "Atk: 90",
        defa : "Def: 105",
        spatka : "Sp. Atk: 48",
        spdefa : "Sp. Def: 48",
        spda : "Spd: 40",
        move1a : "-Defense Curl",
        move2a : "-Rollout",
        move3a : "-Rock Slide",
        move4a : "-Earthquake",

        nameb : "Rhyhorn",
        levelb : "LV: 41",
        typeb : "Type: Ground/Rock",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 123",
        atkb : "Atk: 82",
        defb : "Def: 89",
        spatkb : "Sp. Atk: 36",
        spdefb : "Sp. Def: 36",
        spdb : "Spd: 32",
        move1b : "-Fury Attack",
        move2b : "-Scary Face",
        move3b : "-Earthquake",
        move4b : "-Horn Drill",

        namec : "Omastar",
        levelc : "LV: 42",
        typec : "Type: Rock/Water",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 117",
        atkc : "Atk: 62",
        defc : "Def: 116",
        spatkc : "Sp. Atk: 108",
        spdefc : "Sp. Def: 70",
        spdc : "Spd: 57",
        move1c : "-Bite",
        move2c : "-Surf",
        move3c : "-Spike Cannon",
        move4c : "-Protect",

        named : "Kabutops",
        leveld : "LV: 42",
        typed : "Type: Rock/Water",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 109",
        atkd : "Atk: 109",
        defd : "Def: 99",
        spatkd : "Sp. Atk: 66",
        spdefd : "Sp. Def: 70",
        spdd : "Spd: 78",
        move1d : "-Slash",
        move2d : "-Surf",
        move3d : "-Giga Drain",
        move4d : "-Endure",

        namee : "Onix",
        levele : "LV: 44",
        typee : "Type: Rock/Ground",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 91",
        atke : "Atk: 52",
        defe : "Def: 152",
        spatke : "Sp. Atk: 38",
        spdefe : "Sp. Def: 51",
        spde : "Spd: 73",
        move1e : "-Sandstorm",
        move2e : "-Rock Slide",
        move3e : "-Bind",
        move4e : "-Bide",
    },

    {
        namea : "Golduck",
        levela : "LV: 42",
        typea : "Type: Water",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 125",
        atka : "Atk: 79",
        defa : "Def: 77",
        spatka : "Sp. Atk: 91",
        spdefa : "Sp. Def: 78",
        spda : "Spd: 83",
        move1a : "-Surf",
        move2a : "-Disable",
        move3a : "-Psych Up",
        move4a : "-Psychic",

        nameb : "Quagsire",
        levelb : "LV: 42",
        typeb : "Type: Water/Ground",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 138",
        atkb : "Atk: 82",
        defb : "Def: 83",
        spatkb : "Sp. Atk: 66",
        spdefb : "Sp. Def: 66",
        spdb : "Spd: 41",
        move1b : "-Surf",
        move2b : "-Amnesia",
        move3b : "-Earthquake",
        move4b : "-Rain Dance",

        namec : "Lapras",
        levelc : "LV: 44",
        typec : "Type: Water/Ice",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 175",
        atkc : "Atk: 85",
        defc : "Def: 82",
        spatkc : "Sp. Atk: 86",
        spdefc : "Sp. Def: 95",
        spdc : "Spd: 64",
        move1c : "-Surf",
        move2c : "-Perish Song",
        move3c : "-Blizzard",
        move4c : "-Rain Dance",

        named : "Starmie",
        leveld : "LV: 47",
        typed : "Type: Water/Psychic",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 120",
        atkd : "Atk: 82",
        defd : "Def: 92",
        spatkd : "Sp. Atk: 106",
        spdefd : "Sp. Def: 92",
        spdd : "Spd: 120",
        move1d : "-Surf",
        move2d : "-Confuse Ray",
        move3d : "-Recover",
        move4d : "-Ice Beam",
    },

    {
        namea : "Raichu",
        levela : "LV: 44",
        typea : "Type: Electric",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 113",
        atka : "Atk: 92",
        defa : "Def: 60",
        spatka : "Sp. Atk: 91",
        spdefa : "Sp. Def: 82",
        spda : "Spd: 100",
        move1a : "-Thunder Wave",
        move2a : "-Quick Attack",
        move3a : "-Thunderbolt",
        move4a : "-Thunder",

        nameb : "Electrode",
        levelb : "LV: 40",
        typeb : "Type: Electric",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 104",
        atkb : "Atk: 52",
        defb : "Def: 67",
        spatkb : "Sp. Atk: 75",
        spdefb : "Sp. Def: 75",
        spdb : "Spd: 123",
        move1b : "-Screech",
        move2b : "-Double Team",
        move3b : "-Swift",
        move4b : "-Explosion",

        namec : "Electrode",
        levelc : "LV: 40",
        typec : "Type: Electric",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 104",
        atkc : "Atk: 52",
        defc : "Def: 67",
        spatkc : "Sp. Atk: 75",
        spdefc : "Sp. Def: 75",
        spdc : "Spd: 123",
        move1c : "-Screech",
        move2c : "-Double Team",
        move3c : "-Swift",
        move4c : "-Explosion",

        named : "Magneton",
        leveld : "LV: 40",
        typed : "Type: Electric/Steel",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 96",
        atkd : "Atk: 60",
        defd : "Def: 87",
        spatkd : "Sp. Atk: 107",
        spdefd : "Sp. Def: 67",
        spdd : "Spd: 67",
        move1d : "-Zap Cannon",
        move2d : "-Double Team",
        move3d : "-Lock-On",
        move4d : "-Swift",

        namee : "Electabuzz",
        levele : "LV: 46",
        typee : "Type: Electric",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 123",
        atke : "Atk: 89",
        defe : "Def: 64",
        spatke : "Sp. Atk: 99",
        spdefe : "Sp. Def: 90",
        spde : "Spd: 108",
        move1e : "-Quick Attack",
        move2e : "-Light Screen",
        move3e : "-Thunder Punch",
        move4e : "-Thunder",
    },

    {
        namea : "Tangela",
        levela : "LV: 42",
        typea : "Type: Grass",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 113",
        atka : "Atk: 57",
        defa : "Def: 108",
        spatka : "Sp. Atk: 84",
        spdefa : "Sp. Def: 45",
        spda : "Spd: 62",
        move1a : "-Vine Whip",
        move2a : "-Bind",
        move3a : "-Sleep Powder",
        move4a : "-Giga Drain",

        nameb : "Victreebel",
        levelb : "LV: 46",
        typeb : "Type: Grass/Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 136",
        atkb : "Atk: 108",
        defb : "Def: 72",
        spatkb : "Sp. Atk: 104",
        spdefb : "Sp. Def: 67",
        spdb : "Spd: 76",
        move1b : "-Sunny Day",
        move2b : "-Razor Leaf",
        move3b : "-Acid",
        move4b : "-Synthesis",

        namec : "Jumpluff",
        levelc : "LV: 41",
        typec : "Type: Grass/Flying",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 119",
        atkc : "Atk: 55",
        defc : "Def: 68",
        spatkc : "Sp. Atk: 56",
        spdefc : "Sp. Def: 81",
        spdc : "Spd: 101",
        move1c : "-Leech Seed",
        move2c : "-Mega Drain",
        move3c : "-Giga Drain",
        move4c : "-Cotton Spore",

        named : "Bellossom",
        leveld : "LV: 46",
        typed : "Type: Grass",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 132",
        atkd : "Atk: 85",
        defd : "Def: 90",
        spatkd : "Sp. Atk: 95",
        spdefd : "Sp. Def: 104",
        spdd : "Spd: 58",
        move1d : "-Sunny Day",
        move2d : "-Solar Beam",
        move3d : "-Synthesis",
        move4d : "-Petal Dance",
    },

    {
        namea : "Crobat",
        levela : "LV: 36",
        typea : "Type: Poison/Flying",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 112",
        atka : "Atk: 76",
        defa : "Def: 68",
        spatka : "Sp. Atk: 61",
        spdefa : "Sp. Def: 68",
        spda : "Spd: 104",
        move1a : "-Wing Attack",
        move2a : "-Confuse Ray",
        move3a : "-Supersonic",
        move4a : "-Screech",

        nameb : "Weezing",
        levelb : "LV: 36",
        typeb : "Type: Poison",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 98",
        atkb : "Atk: 76",
        defb : "Def: 97",
        spatkb : "Sp. Atk: 71",
        spdefb : "Sp. Def: 61",
        spdb : "Spd: 53",
        move1b : "-Sludge Bomb",
        move2b : "-Toxic",
        move3b : "-Explosion",
        move4b : "-Smog",

        namec : "Weezing",
        levelc : "LV: 36",
        typec : "Type: Poison",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 98",
        atkc : "Atk: 76",
        defc : "Def: 97",
        spatkc : "Sp. Atk: 71",
        spdefc : "Sp. Def: 61",
        spdc : "Spd: 53",
        move1c : "-Sludge Bomb",
        move2c : "-Toxic",
        move3c : "-Explosion",
        move4c : "-Smog",

        named : "Ariados",
        leveld : "LV: 33",
        typed : "Type: Bug/Poison",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 94",
        atkd : "Atk: 70",
        defd : "Def: 56",
        spatkd : "Sp. Atk: 49",
        spdefd : "Sp. Def: 49",
        spdd : "Spd: 36",
        move1d : "-String Shot",
        move2d : "-Night Shade",
        move3d : "-Scary Face",
        move4d : "-Giga Drain",

        namee : "Venomoth",
        levele : "LV: 39",
        typee : "Type: Bug/Poison",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 109",
        atke : "Atk: 62",
        defe : "Def: 58",
        spatke : "Sp. Atk: 81",
        spdefe : "Sp. Def: 69",
        spde : "Spd: 81",
        move1e : "-Toxic",
        move2e : "-Double Team",
        move3e : "-Psychic",
        move4e : "-Supersonic",
    },

    {
        namea : "Espeon",
        levela : "LV: 46",
        typea : "Type: Psychic",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 127",
        atka : "Atk: 71",
        defa : "Def: 72",
        spatka : "Sp. Atk: 131",
        spdefa : "Sp. Def: 98",
        spda : "Spd: 113",
        move1a : "-Psychic",
        move2a : "-Sand Attack",
        move3a : "-Quick Attack",
        move4a : "-Swift",

        nameb : "Mr. Mime",
        levelb : "LV: 46",
        typeb : "Type: Psychic",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 104",
        atkb : "Atk: 52",
        defb : "Def: 76",
        spatkb : "Sp. Atk: 103",
        spdefb : "Sp. Def: 121",
        spdb : "Spd: 95",
        move1b : "-Psychic",
        move2b : "-Barrier",
        move3b : "-Reflect",
        move4b : "-Baton Pass",

        namec : "Alakazam",
        levelc : "LV: 48",
        typec : "Type: Psychic",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 123",
        atkc : "Atk: 59",
        defc : "Def: 60",
        spatkc : "Sp. Atk: 141",
        spdefc : "Sp. Def: 93",
        spdc : "Spd: 127",
        move1c : "-Psychic",
        move2c : "-Reflect",
        move3c : "-Recover",
        move4c : "-Future Sight",
    },

    {
        namea : "Magcargo",
        levela : "LV: 45",
        typea : "Type: Fire/Rock",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 107",
        atka : "Atk: 58",
        defa : "Def: 120",
        spatka : "Sp. Atk: 84",
        spdefa : "Sp. Def: 84",
        spda : "Spd: 39",
        move1a : "-Flamethrower",
        move2a : "-Curse",
        move3a : "-Smog",
        move4a : "-Rock Slide",

        nameb : "Magmar",
        levelb : "LV: 45",
        typeb : "Type: Fire",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 120",
        atkb : "Atk: 98",
        defb : "Def: 63",
        spatkb : "Sp. Atk: 102",
        spdefb : "Sp. Def: 88",
        spdb : "Spd: 95",
        move1b : "-Fire Punch",
        move2b : "-Confuse Ray",
        move3b : "-Thunder Punch",
        move4b : "-Sunny Day",

        namec : "Rapidash",
        levelc : "LV: 50",
        typec : "Type: Fire",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 133",
        atkc : "Atk: 114",
        defc : "Def: 83",
        spatkc : "Sp. Atk: 93",
        spdefc : "Sp. Def: 93",
        spdc : "Spd: 118",
        move1c : "-Quick Attack",
        move2c : "-Fire Spin",
        move3c : "-Fury Attack",
        move4c : "-Fire Blast",
    },

    {
        namea : "Pidgeot",
        levela : "LV: 56",
        typea : "Type: Normal/Flying",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 175",
        atka : "Atk: 104",
        defa : "Def: 103",
        spatka : "Sp. Atk: 97",
        spdefa : "Sp. Def: 97",
        spda : "Spd: 121",
        move1a : "-Quick Attack",
        move2a : "-Whirlwind",
        move3a : "-Wing Attack",
        move4a : "-Mirror Move",

        nameb : "Alakazam",
        levelb : "LV: 54",
        typeb : "Type: Psychic",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 139",
        atkb : "Atk: 68",
        defb : "Def: 67",
        spatkb : "Sp. Atk: 164",
        spdefb : "Sp. Def: 110",
        spdb : "Spd: 148",
        move1b : "-Psychic",
        move2b : "-Recover",
        move3b : "-Disable",
        move4b : "-Reflect",

        namec : "Rhydon",
        levelc : "LV: 56",
        typec : "Type: Ground/Rock",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 200",
        atkc : "Atk: 160",
        defc : "Def: 153",
        spatkc : "Sp. Atk: 69",
        spdefc : "Sp. Def: 69",
        spdc : "Spd: 64",
        move1c : "-Rock Slide",
        move2c : "-Earthquake",
        move3c : "-Sandstorm",
        move4c : "-Fury Attack",

        named : "Gyarados",
        leveld : "LV: 58",
        typed : "Type: Water/Flying",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 195",
        atkd : "Atk: 160",
        defd : "Def: 111",
        spatkd : "Sp. Atk: 89",
        spdefd : "Sp. Def: 136",
        spdd : "Spd: 114",
        move1d : "-Rain Dance",
        move2d : "-Hydro Pump",
        move3d : "-Twister",
        move4d : "-Hyper Beam",

        namee : "Exeggutor",
        levele : "LV: 58",
        typee : "Type: Grass/Psychic",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 195",
        atke : "Atk: 125",
        defe : "Def: 118",
        spatke : "Sp. Atk: 165",
        spdefe : "Sp. Def: 95",
        spde : "Spd: 83",
        move1e : "-Sunny Day",
        move2e : "-Solar Beam",
        move3e : "-Leech Seed",
        move4e : "-Egg Bomb",

        namef : "Arcanine",
        levelf : "LV: 58",
        typef : "Type: Fire",
        abilityf: "",
        itemf : "Item: None",
        hpf : "HP: 189",
        atkf : "Atk: 143",
        deff : "Def: 112",
        spatkf : "Sp. Atk: 136",
        spdeff : "Sp. Def: 112",
        spdf : "Spd: 130",
        move1f : "-Flamethrower",
        move2f : "-Swift",
        move3f : "-Extreme Speed",
        move4f : "-Roar",
    },

    {
        namea : "Pikachu",
        levela : "LV: 81",
        typea : "Type: Electric",
        abilitya: "",
        itema : "Item: None",
        hpa : "HP: 170",
        atka : "Atk: 118",
        defa : "Def: 74",
        spatka : "Sp. Atk: 118",
        spdefa : "Sp. Def: 92",
        spda : "Spd: 171",
        move1a : "-Quick Attack",
        move2a : "-Thunderbolt",
        move3a : "-Thunder",
        move4a : "-Charm",

        nameb : "Espeon",
        levelb : "LV: 73",
        typeb : "Type: Psychic",
        abilityb: "",
        itemb : "Item: None",
        hpb : "HP: 198",
        atkb : "Atk: 121",
        defb : "Def: 111",
        spatkb : "Sp. Atk: 215",
        spdefb : "Sp. Def: 164",
        spdb : "Spd: 184",
        move1b : "-Psychic",
        move2b : "-Reflect",
        move3b : "-Swift",
        move4b : "-Mud-Slap",

        namec : "Snorlax",
        levelc : "LV: 75",
        typec : "Type: Normal",
        abilityc: "",
        itemc : "Item: None",
        hpc : "HP: 346",
        atkc : "Atk: 192",
        defc : "Def: 122",
        spatkc : "Sp. Atk: 123",
        spdefc : "Sp. Def: 191",
        spdc : "Spd: 69",
        move1c : "-Rest",
        move2c : "-Snore",
        move3c : "-Body Slam",
        move4c : "-Amnesia",

        named : "Venusaur",
        leveld : "LV: 77",
        typed : "Type: Grass/Poison",
        abilityd: "",
        itemd : "Item: None",
        hpd : "HP: 231",
        atkd : "Atk: 154",
        defd : "Def: 152",
        spatkd : "Sp. Atk: 180",
        spdefd : "Sp. Def: 180",
        spdd : "Spd: 148",
        move1d : "-Giga Drain",
        move2d : "-Sunny Day",
        move3d : "-Solar Beam",
        move4d : "-Synthesis",

        namee : "Charizard",
        levele : "LV: 77",
        typee : "Type: Fire/Flying",
        abilitye: "",
        iteme : "Item: None",
        hpe : "HP: 228",
        atke : "Atk: 157",
        defe : "Def: 145",
        spatke : "Sp. Atk: 194",
        spdefe : "Sp. Def: 157",
        spde : "Spd: 179",
        move1e : "-Flamethrower",
        move2e : "-Fire Spin",
        move3e : "-Wing Attack",
        move4e : "-Slash",

        namef : "Blastoise",
        levelf : "LV: 77",
        typef : "Type: Water",
        abilityf: "",
        itemf : "Item: None",
        hpf : "HP: 230",
        atkf : "Atk: 155",
        deff : "Def: 179",
        spatkf : "Sp. Atk: 157",
        spdeff : "Sp. Def: 188",
        spdf : "Spd: 145",
        move1f : "-Surf",
        move2f : "-Blizzard",
        move3f : "-Whirlpool",
        move4f : "-Rain Dance",
    }
]

function displayGSCTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showGSCImages(newTrainerId);
        showPokemonGSCImages(newTrainerId);
    }


    let gscTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = gsc_trainers [gscTrainer].namea;
    document.querySelector('#level1').textContent = gsc_trainers [gscTrainer].levela;
    document.querySelector('#type1').textContent = gsc_trainers [gscTrainer].typea;
    document.querySelector('#ability1').textContent= gsc_trainers [gscTrainer].abilitya;
    document.querySelector('#item1').textContent = gsc_trainers [gscTrainer].itema;
    document.querySelector('#hp1').textContent = gsc_trainers [gscTrainer].hpa;
    document.querySelector('#atk1').textContent = gsc_trainers [gscTrainer].atka;
    document.querySelector('#def1').textContent = gsc_trainers [gscTrainer].defa;
    document.querySelector('#spatk1').textContent = gsc_trainers [gscTrainer].spatka;
    document.querySelector('#spdef1').textContent = gsc_trainers [gscTrainer].spdefa;
    document.querySelector('#spd1').textContent = gsc_trainers [gscTrainer].spda;
    document.querySelector('#move1_1').textContent = gsc_trainers [gscTrainer].move1a;
    document.querySelector('#move2_1').textContent = gsc_trainers [gscTrainer].move2a;
    document.querySelector('#move3_1').textContent = gsc_trainers [gscTrainer].move3a;
    document.querySelector('#move4_1').textContent = gsc_trainers [gscTrainer].move4a;

    
    document.querySelector('#name2').textContent = gsc_trainers [gscTrainer].nameb;
    document.querySelector('#level2').textContent = gsc_trainers [gscTrainer].levelb;
    document.querySelector('#type2').textContent = gsc_trainers [gscTrainer].typeb;
    document.querySelector('#ability2').textContent= gsc_trainers [gscTrainer].abilityb;
    document.querySelector('#item2').textContent = gsc_trainers [gscTrainer].itemb;
    document.querySelector('#hp2').textContent = gsc_trainers [gscTrainer].hpb;
    document.querySelector('#atk2').textContent = gsc_trainers [gscTrainer].atkb;
    document.querySelector('#def2').textContent = gsc_trainers [gscTrainer].defb;
    document.querySelector('#spatk2').textContent = gsc_trainers [gscTrainer].spatkb;
    document.querySelector('#spdef2').textContent = gsc_trainers [gscTrainer].spdefb;
    document.querySelector('#spd2').textContent = gsc_trainers [gscTrainer].spdb;
    document.querySelector('#move1_2').textContent = gsc_trainers [gscTrainer].move1b;
    document.querySelector('#move2_2').textContent = gsc_trainers [gscTrainer].move2b;
    document.querySelector('#move3_2').textContent = gsc_trainers [gscTrainer].move3b;
    document.querySelector('#move4_2').textContent = gsc_trainers [gscTrainer].move4b;

    document.querySelector('#name3').textContent = gsc_trainers [gscTrainer].namec;
    document.querySelector('#level3').textContent = gsc_trainers [gscTrainer].levelc;
    document.querySelector('#type3').textContent = gsc_trainers [gscTrainer].typec;
    document.querySelector('#ability3').textContent= gsc_trainers [gscTrainer].abilityc;
    document.querySelector('#item3').textContent = gsc_trainers [gscTrainer].itemc;
    document.querySelector('#hp3').textContent = gsc_trainers [gscTrainer].hpc;
    document.querySelector('#atk3').textContent = gsc_trainers [gscTrainer].atkc;
    document.querySelector('#def3').textContent = gsc_trainers [gscTrainer].defc;
    document.querySelector('#spatk3').textContent = gsc_trainers [gscTrainer].spatkc;
    document.querySelector('#spdef3').textContent = gsc_trainers [gscTrainer].spdefc;
    document.querySelector('#spd3').textContent = gsc_trainers [gscTrainer].spdc;
    document.querySelector('#move1_3').textContent = gsc_trainers [gscTrainer].move1c;
    document.querySelector('#move2_3').textContent = gsc_trainers [gscTrainer].move2c;
    document.querySelector('#move3_3').textContent = gsc_trainers [gscTrainer].move3c;
    document.querySelector('#move4_3').textContent = gsc_trainers [gscTrainer].move4c;

    document.querySelector('#name4').textContent = gsc_trainers [gscTrainer].named;
    document.querySelector('#level4').textContent = gsc_trainers [gscTrainer].leveld;
    document.querySelector('#type4').textContent = gsc_trainers [gscTrainer].typed;
    document.querySelector('#ability4').textContent= gsc_trainers [gscTrainer].abilityd;
    document.querySelector('#item4').textContent = gsc_trainers [gscTrainer].itemd;
    document.querySelector('#hp4').textContent = gsc_trainers [gscTrainer].hpd;
    document.querySelector('#atk4').textContent = gsc_trainers [gscTrainer].atkd;
    document.querySelector('#def4').textContent = gsc_trainers [gscTrainer].defd;
    document.querySelector('#spatk4').textContent = gsc_trainers [gscTrainer].spatkd;
    document.querySelector('#spdef4').textContent = gsc_trainers [gscTrainer].spdefd;
    document.querySelector('#spd4').textContent = gsc_trainers [gscTrainer].spdd;
    document.querySelector('#move1_4').textContent = gsc_trainers [gscTrainer].move1d;
    document.querySelector('#move2_4').textContent = gsc_trainers [gscTrainer].move2d;
    document.querySelector('#move3_4').textContent = gsc_trainers [gscTrainer].move3d;
    document.querySelector('#move4_4').textContent = gsc_trainers [gscTrainer].move4d;

    document.querySelector('#name5').textContent = gsc_trainers [gscTrainer].namee;
    document.querySelector('#level5').textContent = gsc_trainers [gscTrainer].levele;
    document.querySelector('#type5').textContent = gsc_trainers [gscTrainer].typee;
    document.querySelector('#ability5').textContent= gsc_trainers [gscTrainer].abilitye;
    document.querySelector('#item5').textContent = gsc_trainers [gscTrainer].iteme;
    document.querySelector('#hp5').textContent = gsc_trainers [gscTrainer].hpe;
    document.querySelector('#atk5').textContent = gsc_trainers [gscTrainer].atke;
    document.querySelector('#def5').textContent = gsc_trainers [gscTrainer].defe;
    document.querySelector('#spatk5').textContent = gsc_trainers [gscTrainer].spatke;
    document.querySelector('#spdef5').textContent = gsc_trainers [gscTrainer].spdefe;
    document.querySelector('#spd5').textContent = gsc_trainers [gscTrainer].spde;
    document.querySelector('#move1_5').textContent = gsc_trainers [gscTrainer].move1e;
    document.querySelector('#move2_5').textContent = gsc_trainers [gscTrainer].move2e;
    document.querySelector('#move3_5').textContent = gsc_trainers [gscTrainer].move3e;
    document.querySelector('#move4_5').textContent = gsc_trainers [gscTrainer].move4e;

    document.querySelector('#name6').textContent = gsc_trainers [gscTrainer].namef;
    document.querySelector('#level6').textContent = gsc_trainers [gscTrainer].levelf;
    document.querySelector('#type6').textContent = gsc_trainers [gscTrainer].typef;
    document.querySelector('#ability6').textContent= gsc_trainers [gscTrainer].abilityf;
    document.querySelector('#item6').textContent = gsc_trainers [gscTrainer].itemf;
    document.querySelector('#hp6').textContent = gsc_trainers [gscTrainer].hpf;
    document.querySelector('#atk6').textContent = gsc_trainers [gscTrainer].atkf;
    document.querySelector('#def6').textContent = gsc_trainers [gscTrainer].deff;
    document.querySelector('#spatk6').textContent = gsc_trainers [gscTrainer].spatkf;
    document.querySelector('#spdef6').textContent = gsc_trainers [gscTrainer].spdeff;
    document.querySelector('#spd6').textContent = gsc_trainers [gscTrainer].spdf;
    document.querySelector('#move1_6').textContent = gsc_trainers [gscTrainer].move1f;
    document.querySelector('#move2_6').textContent = gsc_trainers [gscTrainer].move2f;
    document.querySelector('#move3_6').textContent = gsc_trainers [gscTrainer].move3f;
    document.querySelector('#move4_6').textContent = gsc_trainers [gscTrainer].move4f;
}

function showGSCImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/gsc/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonGSCImages(trainerId) {
    var pokemon1Picture = document.querySelector("#pokemon_1_image");
    var pokemon2Picture = document.querySelector("#pokemon_2_image");
    var pokemon3Picture = document.querySelector("#pokemon_3_image");
    var pokemon4Picture = document.querySelector("#pokemon_4_image");
    var pokemon5Picture = document.querySelector("#pokemon_5_image");
    var pokemon6Picture = document.querySelector("#pokemon_6_image");
    var imgPokemon1 = document.createElement("img");
    var imgPokemon2 = document.createElement("img");
    var imgPokemon3 = document.createElement("img");
    var imgPokemon4 = document.createElement("img");
    var imgPokemon5 = document.createElement("img");
    var imgPokemon6 = document.createElement("img");
    
    pokemon1Picture.innerHTML = "";
    pokemon2Picture.innerHTML = "";
    pokemon3Picture.innerHTML = "";
    pokemon4Picture.innerHTML = "";
    pokemon5Picture.innerHTML = "";
    pokemon6Picture.innerHTML = "";

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/gsc/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/gsc/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/gsc/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/gsc/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/gsc/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/gsc/" + trainerId + "_6.png";
    imgPokemon1.setAttribute("alt", `Image of Pokemon 1`)
    imgPokemon2.setAttribute("alt", `Image of Pokemon 2`)
    imgPokemon3.setAttribute("alt", `Image of Pokemon 3`)
    imgPokemon4.setAttribute("alt", `Image of Pokemon 4`)
    imgPokemon5.setAttribute("alt", `Image of Pokemon 5`)
    imgPokemon6.setAttribute("alt", `Image of Pokemon 6`)

    imgPokemon1.onerror = function() {
        imgPokemon1.src = "images/trainer_data_images/pokemon/blank.png"; 
    };

    imgPokemon2.onerror = function() {
        imgPokemon2.src = "images/trainer_data_images/pokemon/blank.png";
    };

    imgPokemon3.onerror = function() {
        imgPokemon3.src = "images/trainer_data_images/pokemon/blank.png";
    };

    imgPokemon4.onerror = function() {
        imgPokemon4.src = "images/trainer_data_images/pokemon/blank.png";
    };

    imgPokemon5.onerror = function() {
        imgPokemon5.src = "images/trainer_data_images/pokemon/blank.png";
    };

    imgPokemon6.onerror = function() {
        imgPokemon6.src = "images/trainer_data_images/pokemon/blank.png";
    };

    pokemon1Picture.appendChild(imgPokemon1);
    pokemon2Picture.appendChild(imgPokemon2);
    pokemon3Picture.appendChild(imgPokemon3);
    pokemon4Picture.appendChild(imgPokemon4);
    pokemon5Picture.appendChild(imgPokemon5);
    pokemon6Picture.appendChild(imgPokemon6);

    clearDivs()
}

falknerGSC.addEventListener('click', displayGSCTrainers);
bugsyGSC.addEventListener('click', displayGSCTrainers);
whitneyGSC.addEventListener('click', displayGSCTrainers);
mortyGSC.addEventListener('click', displayGSCTrainers);
chuckGSC.addEventListener('click', displayGSCTrainers);
jasmineGSC.addEventListener('click', displayGSCTrainers);
pryceGSC.addEventListener('click', displayGSCTrainers);
clairGSC.addEventListener('click', displayGSCTrainers);
willGSC.addEventListener('click', displayGSCTrainers);
kogaGSC.addEventListener('click', displayGSCTrainers);
brunoGSC.addEventListener('click', displayGSCTrainers);
karenGSC.addEventListener('click', displayGSCTrainers);
lanceGSC.addEventListener('click', displayGSCTrainers);
brockGSC.addEventListener('click', displayGSCTrainers);
mistyGSC.addEventListener('click', displayGSCTrainers);
ltsurgeGSC.addEventListener('click', displayGSCTrainers);
erikaGSC.addEventListener('click', displayGSCTrainers);
janineGSC.addEventListener('click', displayGSCTrainers);
sabrinaGSC.addEventListener('click', displayGSCTrainers);
blaineGSC.addEventListener('click', displayGSCTrainers);
blueGSC.addEventListener('click', displayGSCTrainers);
redGSC.addEventListener('click', displayGSCTrainers);