let falknerHGSS = document.querySelector ("#falkner2");
let bugsyHGSS = document.querySelector ("#bugsy2");
let whitneyHGSS = document.querySelector ("#whitney2");
let mortyHGSS = document.querySelector ("#morty2");
let chuckHGSS = document.querySelector ("#chuck2");
let jasmineHGSS = document.querySelector ("#jasmine2");
let pryceHGSS = document.querySelector ("#pryce2");
let clairHGSS = document.querySelector ("#clair2");
let willHGSS = document.querySelector ("#will2");
let kogaHGSS = document.querySelector ("#koga5");
let brunoHGSS = document.querySelector ("#bruno5");
let karenHGSS = document.querySelector ("#karen2");
let lanceHGSS = document.querySelector ("#lance5");
let brockHGSS = document.querySelector ("#brock5");
let mistyHGSS = document.querySelector ("#misty5");
let ltsurgeHGSS = document.querySelector ("#ltsurge5");
let erikaHGSS = document.querySelector ("#erika5");
let janineHGSS = document.querySelector ("#janine2");
let sabrinaHGSS = document.querySelector ("#sabrina5");
let blaineHGSS = document.querySelector ("#blaine5");
let blueHGSS = document.querySelector ("#blue5");
let redHGSS = document.querySelector ("#red2");

let hgss_trainers = [
    {
        namea : "Pidgey",
        levela : "LV: 9",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 26",
        atka : "Atk: 14",
        defa : "Def: 10",
        spatka : "Sp. Atk: 11",
        spdefa : "Sp. Def: 11",
        spda : "Spd: 15",
        move1a : "-Tackle",
        move2a : "-Sand Attack",
        move3a : "",
        move4a : "",

        nameb : "Pidgeotto",
        levelb : "LV: 13",
        typeb : "Type: Normal/Flying",
        abilityb: "Ability: Keen Eye",
        itemb : "Item: None",
        hpb : "HP: 40",
        atkb : "Atk: 21",
        defb : "Def: 20",
        spatkb : "Sp. Atk: 18",
        spdefb : "Sp. Def: 18",
        spdb : "Spd: 24",
        move1b : "-Tackle",
        move2b : "-Roost",
        move3b : "-Gust",
        move4b : "",
    },

    {
        namea : "Scyther",
        levela : "LV: 17",
        typea : "Type: Bug/Flying",
        abilitya: "Ability: Technician",
        itema : "Item: Sitrus Berry",
        hpa : "HP: 52",
        atka : "Atk: 43",
        defa : "Def: 29",
        spatka : "Sp. Atk: 25",
        spdefa : "Sp. Def: 36",
        spda : "Spd: 42",
        move1a : "-U-Turn",
        move2a : "-Quick Attack",
        move3a : "-Leer",
        move4a : "-Focus Energy",

        nameb : "Metapod",
        levelb : "LV: 15",
        typeb : "Type: Bug",
        abilityb: "Ability: Shed Skin",
        itemb : "Item: None",
        hpb : "HP: 41",
        atkb : "Atk: 12",
        defb : "Def: 22",
        spatkb : "Sp. Atk: 13",
        spdefb : "Sp. Def: 13",
        spdb : "Spd: 15",
        move1b : "-Tackle",
        move2b : "",
        move3b : "",
        move4b : "",

        namec : "Kakuna",
        levelc : "LV: 15",
        typec : "Type: Bug/Poison",
        abilityc: "Ability: Shed Skin",
        itemc : "Item: None",
        hpc : "HP: 39",
        atkc : "Atk: 13",
        defc : "Def: 21",
        spatkc : "Sp. Atk: 13",
        spdefc : "Sp. Def: 13",
        spdc : "Spd: 16",
        move1c : "-Poison Sting",
        move2c : "",
        move3c : "",
        move4c : "",
    },

    {
        namea : "Clefairy",
        levela : "LV: 17",
        typea : "Type: Normal",
        abilitya: "Ability: Cute Charm",
        itema : "Item: None",
        hpa : "HP: 52",
        atka : "Atk: 19",
        defa : "Def: 23",
        spatka : "Sp. Atk: 29",
        spdefa : "Sp. Def: 29",
        spda : "Spd: 18",
        move1a : "-Encore",
        move2a : "-Mimic",
        move3a : "-Double Slap",
        move4a : "-Metronome",

        nameb : "Miltank",
        levelb : "LV: 19",
        typeb : "Type: Normal",
        abilityb: "Ability: Scrappy",
        itemb : "Item: Lum Berry",
        hpb : "HP: 67",
        atkb : "Atk: 33",
        defb : "Def: 47",
        spatkb : "Sp. Atk: 22",
        spdefb : "Sp. Def: 36",
        spdb : "Spd: 45",
        move1b : "-Stomp",
        move2b : "-Attract",
        move3b : "-Milk Drink",
        move4b : "-Rollout",
    },

    {
        namea : "Gastly",
        levela : "LV: 21",
        typea : "Type: Ghost/Poison",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: 46",
        atka : "Atk: 22",
        defa : "Def: 20",
        spatka : "Sp. Atk: 53",
        spdefa : "Sp. Def: 19",
        spda : "Spd: 41",
        move1a : "-Lick",
        move2a : "-Spite",
        move3a : "-Mean Look",
        move4a : "-Curse",

        nameb : "Haunter",
        levelb : "LV: 21",
        typeb : "Type: Ghost/Poison",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 52",
        atkb : "Atk: 28",
        defb : "Def: 26",
        spatkb : "Sp. Atk: 49",
        spdefb : "Sp. Def: 33",
        spdb : "Spd: 47",
        move1b : "-Hypnosis",
        move2b : "-Curse",
        move3b : "-Dream Eater",
        move4b : "-Nightmare",

        namec : "Gengar",
        levelc : "LV: 25",
        typec : "Type: Ghost/Poison",
        abilityc: "Ability: Levitate",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 68",
        atkc : "Atk: 36",
        defc : "Def: 41",
        spatkc : "Sp. Atk: 73",
        spdefc : "Sp. Def: 45",
        spdc : "Spd: 63",
        move1c : "-Hypnosis",
        move2c : "-Mean Look",
        move3c : "-Shadow Ball",
        move4c : "-Sucker Punch",

        named : "Haunter",
        leveld : "LV: 23",
        typed : "Type: Ghost/Poison",
        abilityd: "Ability: Levitate",
        itemd : "Item: None",
        hpd : "HP: 56",
        atkd : "Atk: 30",
        defd : "Def: 28",
        spatkd : "Sp. Atk: 60",
        spdefd : "Sp. Def: 33",
        spdd : "Spd: 51",
        move1d : "-Curse",
        move2d : "-Sucker Punch",
        move3d : "-Mean Look",
        move4d : "-Night Shade",
    },

    {
        namea : "Primeape",
        levela : "LV: 29",
        typea : "Type: Fighting",
        abilitya: "Ability: Vital Spirit",
        itema : "Item: None",
        hpa : "HP: 81",
        atka : "Atk: 71",
        defa : "Def: 49",
        spatka : "Sp. Atk: 45",
        spdefa : "Sp. Def: 45",
        spda : "Spd: 65",
        move1a : "-Leer",
        move2a : "-Double Team",
        move3a : "-Rock Slide",
        move4a : "-Focus Punch",

        nameb : "Poliwrath",
        levelb : "LV: 31",
        typeb : "Type: Water/Fighting",
        abilityb: "Ability: Water Absorb",
        itemb : "Item: Sitrus Berry",
        hpb : "HP: 102",
        atkb : "Atk: 63",
        defb : "Def: 69",
        spatkb : "Sp. Atk: 47",
        spdefb : "Sp. Def: 72",
        spdb : "Spd: 53",
        move1b : "-Hypnosis",
        move2b : "-Surf",
        move3b : "-Body Slam",
        move4b : "-Focus Punch",
    },

    {
        namea : "Magnemite",
        levela : "LV: 30",
        typea : "Type: Electric/Steel",
        abilitya: "Ability: Magnet Pull",
        itema : "Item: None",
        hpa : "HP: 60",
        atka : "Atk: 31",
        defa : "Def: 52",
        spatka : "Sp. Atk: 67",
        spdefa : "Sp. Def: 47",
        spda : "Spd: 33",
        move1a : "-Thunderbolt",
        move2a : "-Supersonic",
        move3a : "-Sonic Boom",
        move4a : "-Thunder Wave",

        nameb : "Magnemite",
        levelb : "LV: 30",
        typeb : "Type: Electric/Steel",
        abilityb: "Ability: Magnet Pull",
        itemb : "Item: None",
        hpb : "HP: 60",
        atkb : "Atk: 31",
        defb : "Def: 52",
        spatkb : "Sp. Atk: 60",
        spdefb : "Sp. Def: 47",
        spdb : "Spd: 37",
        move1b : "-Thunderbolt",
        move2b : "-Supersonic",
        move3b : "-Sonic Boom",
        move4b : "-Thunder Wave",

        namec : "Steelix",
        levelc : "LV: 35",
        typec : "Type: Steel/Ground",
        abilityc: "Ability: Sturdy",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 103",
        atkc : "Atk: 63",
        defc : "Def: 166",
        spatkc : "Sp. Atk: 49",
        spdefc : "Sp. Def: 56",
        spdc : "Spd: 32",
        move1c : "-Iron Tail",
        move2c : "-Rock Throw",
        move3c : "-Screech",
        move4c : "-Sandstorm",
    },

    {
        namea : "Seel",
        levela : "LV: 30",
        typea : "Type: Water/Ice",
        abilitya: "Ability: Thick Fat",
        itema : "Item: None",
        hpa : "HP: 84",
        atka : "Atk: 37",
        defa : "Def: 43",
        spatka : "Sp. Atk: 37",
        spdefa : "Sp. Def: 57",
        spda : "Spd: 33",
        move1a : "-Icy Wind",
        move2a : "-Rest",
        move3a : "-Snore",
        move4a : "-Hail",

        nameb : "Dewgong",
        levelb : "LV: 32",
        typeb : "Type: Water/Ice",
        abilityb: "Ability: Thick Fat",
        itemb : "Item: None",
        hpb : "HP: 105",
        atkb : "Atk: 55",
        defb : "Def: 61",
        spatkb : "Sp. Atk: 60",
        spdefb : "Sp. Def: 63",
        spdb : "Spd: 55",
        move1b : "-Aurora Beam",
        move2b : "-Rest",
        move3b : "-Sleep Talk",
        move4b : "-Ice Shard",

        namec : "Piloswine",
        levelc : "LV: 34",
        typec : "Type: Ice/Ground",
        abilityc: "Ability: Snow Cloak",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 118",
        atkc : "Atk: 71",
        defc : "Def: 65",
        spatkc : "Sp. Atk: 51",
        spdefc : "Sp. Def: 56",
        spdc : "Spd: 45",
        move1c : "-Blizzard",
        move2c : "-Ice Fang",
        move3c : "-Mud Bomb",
        move4c : "-Hail",
    },

    {
        namea : "Gyarados",
        levela : "LV: 38",
        typea : "Type: Water/Flying",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 129",
        atka : "Atk: 109",
        defa : "Def: 66",
        spatka : "Sp. Atk: 59",
        spdefa : "Sp. Def: 90",
        spda : "Spd: 82",
        move1a : "-Bite",
        move2a : "-Twister",
        move3a : "-Dragon Rage",
        move4a : "-Dragon Pulse",

        nameb : "Dragonair",
        levelb : "LV: 38",
        typeb : "Type: Dragon",
        abilityb: "Ability: Shed Skin",
        itemb : "Item: None",
        hpb : "HP: 103",
        atkb : "Atk: 77",
        defb : "Def: 56",
        spatkb : "Sp. Atk: 67",
        spdefb : "Sp. Def: 73",
        spdb : "Spd: 67",
        move1b : "-Aqua Tail",
        move2b : "-Dragon Pulse",
        move3b : "-Slam",
        move4b : "-Thunder Wave",

        namec : "Dragonair",
        levelc : "LV: 38",
        typec : "Type: Dragon",
        abilityc: "Ability: Shed Skin",
        itemc : "Item: None",
        hpc : "HP: 103",
        atkc : "Atk: 77",
        defc : "Def: 56",
        spatkc : "Sp. Atk: 67",
        spdefc : "Sp. Def: 73",
        spdc : "Spd: 67",
        move1c : "-Fire Blast",
        move2c : "-Dragon Pulse",
        move3c : "-Slam",
        move4c : "-Thunder Wave",

        named : "Kingdra",
        leveld : "LV: 41",
        typed : "Type: Water/Dragon",
        abilityd: "Ability: Sniper",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 122",
        atkd : "Atk: 82",
        defd : "Def: 92",
        spatkd : "Sp. Atk: 92",
        spdefd : "Sp. Def: 92",
        spdd : "Spd: 92",
        move1d : "-Hydro Pump",
        move2d : "-Dragon Pulse",
        move3d : "-Smokescreen",
        move4d : "-Hyper Beam",
    },

    {
        namea : "Xatu",
        levela : "LV: 40",
        typea : "Type: Psychic/Flying",
        abilitya: "Ability: Synchronize",
        itema : "Item: None",
        hpa : "HP: 114",
        atka : "Atk: 77",
        defa : "Def: 80",
        spatka : "Sp. Atk: 93",
        spdefa : "Sp. Def: 73",
        spda : "Spd: 83",
        move1a : "-U-Turn",
        move2a : "-Me First",
        move3a : "-Confuse Ray",
        move4a : "-Psychic",

        nameb : "Jynx",
        levelb : "LV: 41",
        typeb : "Type: Ice/Psychic",
        abilityb: "Ability: Oblivious",
        itemb : "Item: None",
        hpb : "HP: 116",
        atkb : "Atk: 58",
        defb : "Def: 50",
        spatkb : "Sp. Atk: 99",
        spdefb : "Sp. Def: 95",
        spdb : "Spd: 95",
        move1b : "-Lovely Kiss",
        move2b : "-Double Slap",
        move3b : "-Ice Punch",
        move4b : "-Psychic",

        namec : "Slowbro",
        levelc : "LV: 41",
        typec : "Type: Water/Psychic",
        abilityc: "Ability: Own Tempo",
        itemc : "Item: None",
        hpc : "HP: 141",
        atkc : "Atk: 85",
        defc : "Def: 107",
        spatkc : "Sp. Atk: 99",
        spdefc : "Sp. Def: 82",
        spdc : "Spd: 36",
        move1c : "-Curse",
        move2c : "-Amnesia",
        move3c : "-Water Pulse",
        move4c : "-Psychic",

        named : "Exeggutor",
        leveld : "LV: 41",
        typed : "Type: Grass/Psychic",
        abilityd: "Ability: Chlorophyll",
        itemd : "Item: None",
        hpd : "HP: 141",
        atkd : "Atk: 95",
        defd : "Def: 87",
        spatkd : "Sp. Atk: 119",
        spdefd : "Sp. Def: 63",
        spdd : "Spd: 68",
        move1d : "-Hypnosis",
        move2d : "-Egg Bomb",
        move3d : "-Psychic",
        move4d : "-Reflect",

        namee : "Xatu",
        levele : "LV: 42",
        typee : "Type: Psychic/Flying",
        abilitye: "Ability: Early Bird",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 119",
        atke : "Atk: 80",
        defe : "Def: 76",
        spatke : "Sp. Atk: 97",
        spdefe : "Sp. Def: 76",
        spde : "Spd: 97",
        move1e : "-Aerial Ace",
        move2e : "-Ominous Wind",
        move3e : "-Confuse Ray",
        move4e : "-Psychic",
    },

    {
        namea : "Ariados",
        levela : "LV: 40",
        typea : "Type: Bug/Poison",
        abilitya: "Ability: Insomnia",
        itema : "Item: None",
        hpa : "HP: 118",
        atka : "Atk: 89",
        defa : "Def: 73",
        spatka : "Sp. Atk: 65",
        spdefa : "Sp. Def: 65",
        spda : "Spd: 49",
        move1a : "-Spider Web",
        move2a : "-Baton Pass",
        move3a : "-Giga Drain",
        move4a : "-Poison Jab",

        nameb : "Forretress",
        levelb : "LV: 43",
        typeb : "Type: Bug/Steel",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: 130",
        atkb : "Atk: 95",
        defb : "Def: 124",
        spatkb : "Sp. Atk: 69",
        spdefb : "Sp. Def: 75",
        spdb : "Spd: 52",
        move1b : "-Protect",
        move2b : "-Swift",
        move3b : "-Toxic Spikes",
        move4b : "-Explosion",

        namec : "Muk",
        levelc : "LV: 42",
        typec : "Type: Poison",
        abilityc: "Ability: Sticky Hold",
        itemc : "Item: Black Sludge",
        hpc : "HP: 152",
        atkc : "Atk: 115",
        defc : "Def: 80",
        spatkc : "Sp. Atk: 72",
        spdefc : "Sp. Def: 90",
        spdc : "Spd: 59",
        move1c : "-Gunk Shot",
        move2c : "-Screech",
        move3c : "-Minimize",
        move4c : "-Toxic",

        named : "Venomoth",
        leveld : "LV: 41",
        typed : "Type: Bug/Poison",
        abilityd: "Ability: Shield Dust",
        itemd : "Item: None",
        hpd : "HP: 120",
        atkd : "Atk: 70",
        defd : "Def: 66",
        spatkd : "Sp. Atk: 91",
        spdefd : "Sp. Def: 78",
        spdd : "Spd: 97",
        move1d : "-Psychic",
        move2d : "-Gust",
        move3d : "-Supersonic",
        move4d : "-Toxic",

        namee : "Crobat",
        levele : "LV: 44",
        typee : "Type: Poison/Flying",
        abilitye: "Ability: Inner Focus",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 142",
        atke : "Atk: 97",
        defe : "Def: 96",
        spatke : "Sp. Atk: 79",
        spdefe : "Sp. Def: 79",
        spde : "Spd: 132",
        move1e : "-Wing Attack",
        move2e : "-Quick Attack",
        move3e : "-Double Team",
        move4e : "-Poison Fang",
    },

    {
        namea : "Hitmontop",
        levela : "LV: 42",
        typea : "Type: Fighting",
        abilitya: "Ability: Technician",
        itema : "Item: None",
        hpa : "HP: 106",
        atka : "Atk: 97",
        defa : "Def: 97",
        spatka : "Sp. Atk: 47",
        spdefa : "Sp. Def: 110",
        spda : "Spd: 76",
        move1a : "-Triple Kick",
        move2a : "-Counter",
        move3a : "-Dig",
        move4a : "-Quick Attack",

        nameb : "Hitmonlee",
        levelb : "LV: 42",
        typeb : "Type: Fighting",
        abilityb: "Ability: Reckless",
        itemb : "Item: None",
        hpb : "HP: 106",
        atkb : "Atk: 118",
        defb : "Def: 55",
        spatkb : "Sp. Atk: 47",
        spdefb : "Sp. Def: 110",
        spdb : "Spd: 99",
        move1b : "-High Jump Kick",
        move2b : "-Swagger",
        move3b : "-Blaze Kick",
        move4b : "-Focus Energy",

        namec : "Hitmonchan",
        levelc : "LV: 42",
        typec : "Type: Fighting",
        abilityc: "Ability: Iron Fist",
        itemc : "Item: None",
        hpc : "HP: 106",
        atkc : "Atk: 94",
        defc : "Def: 83",
        spatkc : "Sp. Atk: 47",
        spdefc : "Sp. Def: 121",
        spdc : "Spd: 81",
        move1c : "-Thunder Punch",
        move2c : "-Ice Punch",
        move3c : "-Fire Punch",
        move4c : "-Bullet Punch",

        named : "Onix",
        leveld : "LV: 43",
        typed : "Type: Rock/Ground",
        abilityd: "Ability: Sturdy",
        itemd : "Item: None",
        hpd : "HP: 96",
        atkd : "Atk: 56",
        defd : "Def: 170",
        spatkd : "Sp. Atk: 43",
        spdefd : "Sp. Def: 50",
        spdd : "Spd: 78",
        move1d : "-Sandstorm",
        move2d : "-Rock Slide",
        move3d : "-Earthquake",
        move4d : "-Dragon Breath",

        namee : "Machamp",
        levele : "LV: 46",
        typee : "Type: Fighting",
        abilitye: "Ability: No Guard",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 152",
        atke : "Atk: 138",
        defe : "Def: 82",
        spatke : "Sp. Atk: 85",
        spdefe : "Sp. Def: 97",
        spde : "Spd: 69",
        move1e : "-Rock Slide",
        move2e : "-Foresight",
        move3e : "-Cross Chop",
        move4e : "-Revenge",
    },

    {
        namea : "Umbreon",
        levela : "LV: 42",
        typea : "Type: Dark",
        abilitya: "Ability: Synchronize",
        itema : "Item: None",
        hpa : "HP: 144",
        atka : "Atk: 64",
        defa : "Def: 110",
        spatka : "Sp. Atk: 74",
        spdefa : "Sp. Def: 126",
        spda : "Spd: 72",
        move1a : "-Feint Attack",
        move2a : "-Confuse Ray",
        move3a : "-Double Team",
        move4a : "-Payback",

        nameb : "Vileplume",
        levelb : "LV: 42",
        typeb : "Type: Grass/Poison",
        abilityb: "Ability: Chlorophyll",
        itemb : "Item: None",
        hpb : "HP: 127",
        atkb : "Atk: 84",
        defb : "Def: 89",
        spatkb : "Sp. Atk: 101",
        spdefb : "Sp. Def: 93",
        spdb : "Spd: 59",
        move1b : "-Stun Spore",
        move2b : "-Acid",
        move3b : "-Petal Dance",
        move4b : "-Moonlight",

        namec : "Murkrow",
        levelc : "LV: 44",
        typec : "Type: Dark/Flying",
        abilityc: "Ability: Super Luck",
        itemc : "Item: None",
        hpc : "HP: 120",
        atkc : "Atk: 93",
        defc : "Def: 55",
        spatkc : "Sp. Atk: 93",
        spdefc : "Sp. Def: 55",
        spdc : "Spd: 98",
        move1c : "-Feint Attack",
        move2c : "-Whirlwind",
        move3c : "-Pluck",
        move4c : "-Sucker Punch",

        named : "Gengar",
        leveld : "LV: 45",
        typed : "Type: Ghost/Poison",
        abilityd: "Ability: Levitate",
        itemd : "Item: None",
        hpd : "HP: 122",
        atkd : "Atk: 77",
        defd : "Def: 79",
        spatkd : "Sp. Atk: 121",
        spdefd : "Sp. Def: 86",
        spdd : "Spd: 117",
        move1d : "-Lick",
        move2d : "-Spite",
        move3d : "-Destiny Bond",
        move4d : "-Focus Blast",

        namee : "Houndoom",
        levele : "LV: 47",
        typee : "Type: Dark/Fire",
        abilitye: "Ability: Flash Fire",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 141",
        atke : "Atk: 103",
        defe : "Def: 66",
        spatke : "Sp. Atk: 122",
        spdefe : "Sp. Def: 94",
        spde : "Spd: 108",
        move1e : "-Dark Pulse",
        move2e : "-Flamethrower",
        move3e : "-Crunch",
        move4e : "-Nasty Plot",
    },

    {
        namea : "Gyarados",
        levela : "LV: 46",
        typea : "Type: Water/Flying",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: 157",
        atka : "Atk: 119",
        defa : "Def: 100",
        spatka : "Sp. Atk: 74",
        spdefa : "Sp. Def: 110",
        spda : "Spd: 93",
        move1a : "-Waterfall",
        move2a : "-Dragon Pulse",
        move3a : "-Ice Fang",
        move4a : "-Flail",

        nameb : "Dragonite",
        levelb : "LV: 49",
        typeb : "Type: Dragon/Flying",
        abilityb: "Ability: Inner Focus",
        itemb : "Item: None",
        hpb : "HP: 162",
        atkb : "Atk: 151",
        defb : "Def: 112",
        spatkb : "Sp. Atk: 117",
        spdefb : "Sp. Def: 105",
        spdb : "Spd: 107",
        move1b : "-Dragon Rush",
        move2b : "-Thunder Wave",
        move3b : "-Thunder",
        move4b : "-Hyper Beam",

        namec : "Dragonite",
        levelc : "LV: 49",
        typec : "Type: Dragon/Flying",
        abilityc: "Ability: Inner Focus",
        itemc : "Item: None",
        hpc : "HP: 162",
        atkc : "Atk: 151",
        defc : "Def: 112",
        spatkc : "Sp. Atk: 117",
        spdefc : "Sp. Def: 105",
        spdc : "Spd: 107",
        move1c : "-Dragon Rush",
        move2c : "-Thunder Wave",
        move3c : "-Blizzard",
        move4c : "-Hyper Beam",

        named : "Aerodactyl",
        leveld : "LV: 48",
        typed : "Type: Rock/Flying",
        abilityd: "Ability: Pressure",
        itemd : "Item: None",
        hpd : "HP: 149",
        atkd : "Atk: 132",
        defd : "Def: 72",
        spatkd : "Sp. Atk: 77",
        spdefd : "Sp. Def: 91",
        spdd : "Spd: 144",
        move1d : "-Rock Slide",
        move2d : "-Aerial Ace",
        move3d : "-Crunch",
        move4d : "-Thunder Fang",

        namee : "Charizard",
        levele : "LV: 48",
        typee : "Type: Fire/Flying",
        abilitye: "Ability: Blaze",
        iteme : "Item: None",
        hpe : "HP: 147",
        atke : "Atk: 100",
        defe : "Def: 94",
        spatke : "Sp. Atk: 124",
        spdefe : "Sp. Def: 111",
        spde : "Spd: 103",
        move1e : "-Air Slash",
        move2e : "-Fire Fang",
        move3e : "-Dragon Claw",
        move4e : "-Shadow Claw",

        namef : "Dragonite",
        levelf : "LV: 50",
        typef : "Type: Dragon/Flying",
        abilityf: "Ability: Inner Focus",
        itemf : "Item: Sitrus Berry",
        hpf : "HP: 166",
        atkf : "Atk: 154",
        deff : "Def: 115",
        spatkf : "Sp. Atk: 120",
        spdeff : "Sp. Def: 132",
        spdf : "Spd: 90",
        move1f : "-Outrage",
        move2f : "-Safeguard",
        move3f : "-Fire Blast",
        move4f : "-Hyper Beam",
    },

    {
        namea : "Graveler",
        levela : "LV: 51",
        typea : "Type: Rock/Ground",
        abilitya: "Ability: Sturdy",
        itema : "Item: None",
        hpa : "HP: 129",
        atka : "Atk: 125",
        defa : "Def: 120",
        spatka : "Sp. Atk: 63",
        spdefa : "Sp. Def: 63",
        spda : "Spd: 52",
        move1a : "-Defense Curl",
        move2a : "-Rollout",
        move3a : "-Rock Slide",
        move4a : "-Earthquake",

        nameb : "Rhyhorn",
        levelb : "LV: 51",
        typeb : "Type: Ground/Rock",
        abilityb: "Ability: Rock Head",
        itemb : "Item: None",
        hpb : "HP: 154",
        atkb : "Atk: 103",
        defb : "Def: 102",
        spatkb : "Sp. Atk: 47",
        spdefb : "Sp. Def: 51",
        spdb : "Spd: 42",
        move1b : "-Sandstorm",
        move2b : "-Scary Face",
        move3b : "-Earthquake",
        move4b : "-Horn Drill",

        namec : "Omastar",
        levelc : "LV: 53",
        typec : "Type: Rock/Water",
        abilityc: "Ability: Shell Armor",
        itemc : "Item: None",
        hpc : "HP: 149",
        atkc : "Atk: 81",
        defc : "Def: 165",
        spatkc : "Sp. Atk: 139",
        spdefc : "Sp. Def: 81",
        spdc : "Spd: 76",
        move1c : "-Brine",
        move2c : "-Ancient Power",
        move3c : "-Spike Cannon",
        move4c : "-Protect",

        named : "Kabutops",
        leveld : "LV: 52",
        typed : "Type: Rock/Water",
        abilityd: "Ability: Battle Armor",
        itemd : "Item: None",
        hpd : "HP: 136",
        atkd : "Atk: 137",
        defd : "Def: 126",
        spatkd : "Sp. Atk: 76",
        spdefd : "Sp. Def: 90",
        spdd : "Spd: 110",
        move1d : "-Rock Slide",
        move2d : "-Aqua Jet",
        move3d : "-Giga Drain",
        move4d : "-Endure",

        namee : "Onix",
        levele : "LV: 54",
        typee : "Type: Rock/Ground",
        abilitye: "Ability: Sturdy",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 114",
        atke : "Atk: 66",
        defe : "Def: 171",
        spatke : "Sp. Atk: 50",
        spdefe : "Sp. Def: 72",
        spde : "Spd: 93",
        move1e : "-Sandstorm",
        move2e : "-Rock Slide",
        move3e : "-Iron Tail",
        move4e : "-Screech",
    },

    {
        namea : "Golduck",
        levela : "LV: 49",
        typea : "Type: Water",
        abilitya: "Ability: Damp",
        itema : "Item: None",
        hpa : "HP: 149",
        atka : "Atk: 87",
        defa : "Def: 93",
        spatka : "Sp. Atk: 109",
        spdefa : "Sp. Def: 104",
        spda : "Spd: 100",
        move1a : "-Water Pulse",
        move2a : "-Disable",
        move3a : "-Psych Up",
        move4a : "-Psychic",

        nameb : "Quagsire",
        levelb : "LV: 49",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Water Absorb",
        itemb : "Item: None",
        hpb : "HP: 163",
        atkb : "Atk: 100",
        defb : "Def: 100",
        spatkb : "Sp. Atk: 80",
        spdefb : "Sp. Def: 72",
        spdb : "Spd: 56",
        move1b : "-Water Pulse",
        move2b : "-Amnesia",
        move3b : "-Earthquake",
        move4b : "-Rain Dance",

        namec : "Lapras",
        levelc : "LV: 52",
        typec : "Type: Water/Ice",
        abilityc: "Ability: Shell Armor",
        itemc : "Item: None",
        hpc : "HP: 209",
        atkc : "Atk: 115",
        defc : "Def: 100",
        spatkc : "Sp. Atk: 105",
        spdefc : "Sp. Def: 104",
        spdc : "Spd: 79",
        move1c : "-Ice Beam",
        move2c : "-Sing",
        move3c : "-Water Pulse",
        move4c : "-Body Slam",

        named : "Starmie",
        leveld : "LV: 54",
        typed : "Type: Water/Psychic",
        abilityd: "Ability: Natural Cure",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 141",
        atkd : "Atk: 98",
        defd : "Def: 119",
        spatkd : "Sp. Atk: 112",
        spdefd : "Sp. Def: 109",
        spdd : "Spd: 142",
        move1d : "-Water Pulse",
        move2d : "-Confuse Ray",
        move3d : "-Recover",
        move4d : "-Ice Beam",
    },

    {
        namea : "Raichu",
        levela : "LV: 51",
        typea : "Type: Electric",
        abilitya: "Ability: Static",
        itema : "Item: None",
        hpa : "HP: 134",
        atka : "Atk: 98",
        defa : "Def: 73",
        spatka : "Sp. Atk: 109",
        spdefa : "Sp. Def: 107",
        spda : "Spd: 119",
        move1a : "-Thunder Wave",
        move2a : "-Quick Attack",
        move3a : "-Shock Wave",
        move4a : "-Double Team",

        nameb : "Electrode",
        levelb : "LV: 47",
        typeb : "Type: Electric",
        abilityb: "Ability: Static",
        itemb : "Item: None",
        hpb : "HP: 124",
        atkb : "Atk: 63",
        defb : "Def: 73",
        spatkb : "Sp. Atk: 91",
        spdefb : "Sp. Def: 91",
        spdb : "Spd: 161",
        move1b : "-Thunder Wave",
        move2b : "-Double Team",
        move3b : "-Shock Wave",
        move4b : "-Light Screen",

        namec : "Electrode",
        levelc : "LV: 47",
        typec : "Type: Electric",
        abilityc: "Ability: Static",
        itemc : "Item: None",
        hpc : "HP: 124",
        atkc : "Atk: 63",
        defc : "Def: 73",
        spatkc : "Sp. Atk: 91",
        spdefc : "Sp. Def: 91",
        spdc : "Spd: 161",
        move1c : "-Screech",
        move2c : "-Double Team",
        move3c : "-Self-Destruct",
        move4c : "-Charge Beam",

        named : "Magneton",
        leveld : "LV: 47",
        typed : "Type: Electric/Steel",
        abilityd: "Ability: Sturdy",
        itemd : "Item: None",
        hpd : "HP: 115",
        atkd : "Atk: 79",
        defd : "Def: 105",
        spatkd : "Sp. Atk: 116",
        spdefd : "Sp. Def: 82",
        spdd : "Spd: 82",
        move1d : "-Supersonic",
        move2d : "-Double Team",
        move3d : "-Shock Wave",
        move4d : "-Mirror Shot",

        namee : "Electabuzz",
        levele : "LV: 53",
        typee : "Type: Electric",
        abilitye: "Ability: Static",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 144",
        atke : "Atk: 115",
        defe : "Def: 70",
        spatke : "Sp. Atk: 118",
        spdefe : "Sp. Def: 107",
        spde : "Spd: 129",
        move1e : "-Quick Attack",
        move2e : "-Shock Wave",
        move3e : "-Light Screen",
        move4e : "-Low Kick",
    },

    {
        namea : "Jumpluff",
        levela : "LV: 51",
        typea : "Type: Grass/Flying",
        abilitya: "Ability: Chlorophyll",
        itema : "Item: None",
        hpa : "HP: 149",
        atka : "Atk: 73",
        defa : "Def: 96",
        spatka : "Sp. Atk: 65",
        spdefa : "Sp. Def: 103",
        spda : "Spd: 129",
        move1a : "-Leech Seed",
        move2a : "-U-Turn",
        move3a : "-Giga Drain",
        move4a : "-Sunny Day",

        nameb : "Tangela",
        levelb : "LV: 52",
        typeb : "Type: Grass",
        abilityb: "Ability: Chlorophyll",
        itemb : "Item: None",
        hpb : "HP: 142",
        atkb : "Atk: 74",
        defb : "Def: 137",
        spatkb : "Sp. Atk: 133",
        spdefb : "Sp. Def: 53",
        spdb : "Spd: 79",
        move1b : "-Ancient Power",
        move2b : "-Wring Out",
        move3b : "-Sleep Powder",
        move4b : "-Giga Drain",

        namec : "Victreebel",
        levelc : "LV: 56",
        typec : "Type: Grass/Poison",
        abilityc: "Ability: Chlorophyll",
        itemc : "Item: None",
        hpc : "HP: 169",
        atkc : "Atk: 136",
        defc : "Def: 91",
        spatkc : "Sp. Atk: 143",
        spdefc : "Sp. Def: 76",
        spdc : "Spd: 96",
        move1c : "-Sunny Day",
        move2c : "-Razor Leaf",
        move3c : "-Leaf Storm",
        move4c : "-Grass Knot",

        named : "Bellossom",
        leveld : "LV: 56",
        typed : "Type: Grass",
        abilityd: "Ability: Chlorophyll",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: 163",
        atkd : "Atk: 108",
        defd : "Def: 113",
        spatkd : "Sp. Atk: 119",
        spdefd : "Sp. Def: 130",
        spdd : "Spd: 74",
        move1d : "-Sunny Day",
        move2d : "-Solar Beam",
        move3d : "-Synthesis",
        move4d : "-Giga Drain",
    },

    {
        namea : "Crobat",
        levela : "LV: 47",
        typea : "Type: Poison/Flying",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: 148",
        atka : "Atk: 90",
        defa : "Def: 91",
        spatka : "Sp. Atk: 82",
        spdefa : "Sp. Def: 91",
        spda : "Spd: 151",
        move1a : "-Wing Attack",
        move2a : "-Confuse Ray",
        move3a : "-Supersonic",
        move4a : "-Screech",

        nameb : "Weezing",
        levelb : "LV: 44",
        typeb : "Type: Poison",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: 121",
        atkb : "Atk: 94",
        defb : "Def: 121",
        spatkb : "Sp. Atk: 81",
        spdefb : "Sp. Def: 84",
        spdb : "Spd: 68",
        move1b : "-Sludge Bomb",
        move2b : "-Toxic",
        move3b : "-Explosion",
        move4b : "-Double Hit",

        namec : "Ariados",
        levelc : "LV: 47",
        typec : "Type: Bug/Poison",
        abilityc: "Ability: Insomnia",
        itemc : "Item: None",
        hpc : "HP: 134",
        atkc : "Atk: 90",
        defc : "Def: 82",
        spatkc : "Sp. Atk: 79",
        spdefc : "Sp. Def: 72",
        spdc : "Spd: 53",
        move1c : "-Swagger",
        move2c : "-Night Shade",
        move3c : "-Poison Jab",
        move4c : "-Pin Missile",

        named : "Ariados",
        leveld : "LV: 47",
        typed : "Type: Bug/Poison",
        abilityd: "Ability: Insomnia",
        itemd : "Item: None",
        hpd : "HP: 134",
        atkd : "Atk: 90",
        defd : "Def: 82",
        spatkd : "Sp. Atk: 79",
        spdefd : "Sp. Def: 72",
        spdd : "Spd: 53",
        move1d : "-Psychic",
        move2d : "-Poison Jab",
        move3d : "-Scary Face",
        move4d : "-Pin Missile",

        namee : "Venomoth",
        levele : "LV: 50",
        typee : "Type: Bug/Poison",
        abilitye: "Ability: Tinted Lens",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: 142",
        atke : "Atk: 82",
        defe : "Def: 69",
        spatke : "Sp. Atk: 117",
        spdefe : "Sp. Def: 92",
        spde : "Spd: 107",
        move1e : "-Sludge Bomb",
        move2e : "-Double Team",
        move3e : "-Psychic",
        move4e : "-Signal Beam",
    },

    {
        namea : "Espeon",
        levela : "LV: 53",
        typea : "Type: Psychic",
        abilitya: "Ability: Synchronize",
        itema : "Item: None",
        hpa : "HP: 144",
        atka : "Atk: 86",
        defa : "Def: 81",
        spatka : "Sp. Atk: 155",
        spdefa : "Sp. Def: 118",
        spda : "Spd: 134",
        move1a : "-Psychic",
        move2a : "-Calm Mind",
        move3a : "-Shadow Ball",
        move4a : "-Skill Swap",

        nameb : "Mr. Mime",
        levelb : "LV: 53",
        typeb : "Type: Psychic",
        abilityb: "Ability: Filter",
        itemb : "Item: None",
        hpb : "HP: 118",
        atkb : "Atk: 65",
        defb : "Def: 86",
        spatkb : "Sp. Atk: 123",
        spdefb : "Sp. Def: 129",
        spdb : "Spd: 124",
        move1b : "-Psychic",
        move2b : "-Mimic",
        move3b : "-Light Screen",
        move4b : "-Skill Swap",

        namec : "Alakazam",
        levelc : "LV: 55",
        typec : "Type: Psychic",
        abilityc: "Ability: Inner Focus",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: 138",
        atkc : "Atk: 73",
        defc : "Def: 73",
        spatkc : "Sp. Atk: 149",
        spdefc : "Sp. Def: 111",
        spdc : "Spd: 150",
        move1c : "-Psychic",
        move2c : "-Reflect",
        move3c : "-Energy Ball",
        move4c : "-Skill Swap",
    },

    {
        namea : "Magcargo",
        levela : "LV: 54",
        typea : "Type: Fire/Rock",
        abilitya: "Ability: Flame Body",
        itema : "Item: White Herb",
        hpa : "HP: 130",
        atka : "Atk: 71",
        defa : "Def: 147",
        spatka : "Sp. Atk: 104",
        spdefa : "Sp. Def: 104",
        spda : "Spd: 50",
        move1a : "-Overheat",
        move2a : "-Sunny Day",
        move3a : "-Smog",
        move4a : "-Rock Slide",

        nameb : "Magmar",
        levelb : "LV: 54",
        typeb : "Type: Fire",
        abilityb: "Ability: Flame Body",
        itemb : "Item: White Herb",
        hpb : "HP: 147",
        atkb : "Atk: 120",
        defb : "Def: 79",
        spatkb : "Sp. Atk: 137",
        spdefb : "Sp. Def: 98",
        spdb : "Spd: 118",
        move1b : "-Overheat",
        move2b : "-Confuse Ray",
        move3b : "-Thunder Punch",
        move4b : "-Sunny Day",

        namec : "Rapidash",
        levelc : "LV: 59",
        typec : "Type: Fire",
        abilityc: "Ability: Flash Fire",
        itemc : "Item: White Herb",
        hpc : "HP: 159",
        atkc : "Atk: 123",
        defc : "Def: 101",
        spatkc : "Sp. Atk: 124",
        spdefc : "Sp. Def: 113",
        spdc : "Spd: 143",
        move1c : "-Overheat",
        move2c : "-Bounce",
        move3c : "-Flare Blitz",
        move4c : "-Quick Attack",
    },

    {
        namea : "Exeggutor",
        levela : "LV: 55",
        typea : "Type: Grass/Psychic",
        abilitya: "Ability: Chlorophyll",
        itema : "Item: None",
        hpa : "HP: 186",
        atka : "Atk: 126",
        defa : "Def: 115",
        spatka : "Sp. Atk: 174",
        spdefa : "Sp. Def: 93",
        spda : "Spd: 73",
        move1a : "-Leaf Storm",
        move2a : "-Hypnosis",
        move3a : "-Psychic",
        move4a : "-Trick Room",

        nameb : "Arcanine",
        levelb : "LV: 58",
        typeb : "Type: Fire",
        abilityb: "Ability: Intimidate",
        itemb : "Item: None",
        hpb : "HP: 189",
        atkb : "Atk: 165",
        defb : "Def: 115",
        spatkb : "Sp. Atk: 138",
        spdefb : "Sp. Def: 115",
        spdb : "Spd: 118",
        move1b : "-Flare Blitz",
        move2b : "-Dragon Pulse",
        move3b : "-Extreme Speed",
        move4b : "-Roar",

        namec : "Rhydon",
        levelc : "LV: 58",
        typec : "Type: Ground/Rock",
        abilityc: "Ability: Rock Head",
        itemc : "Item: None",
        hpc : "HP: 207",
        atkc : "Atk: 155",
        defc : "Def: 161",
        spatkc : "Sp. Atk: 74",
        spdefc : "Sp. Def: 81",
        spdc : "Spd: 68",
        move1c : "-Stone Edge",
        move2c : "-Earthquake",
        move3c : "-Thunder Fang",
        move4c : "-Megahorn",

        named : "Gyarados",
        leveld : "LV: 52",
        typed : "Type: Water/Flying",
        abilityd: "Ability: Intimidate",
        itemd : "Item: None",
        hpd : "HP: 176",
        atkd : "Atk: 150",
        defd : "Def: 102",
        spatkd : "Sp. Atk: 83",
        spdefd : "Sp. Def: 136",
        spdd : "Spd: 93",
        move1d : "-Dragon Dance",
        move2d : "-Waterfall",
        move3d : "-Ice Fang",
        move4d : "-Return",

        namee : "Machamp",
        levele : "LV: 56",
        typee : "Type: Fighting",
        abilitye: "Ability: No Guard",
        iteme : "Item: None",
        hpe : "HP: 183",
        atke : "Atk: 167",
        defe : "Def: 99",
        spatke : "Sp. Atk: 94",
        spdefe : "Sp. Def: 128",
        spde : "Spd: 83",
        move1e : "-Dynamic Punch",
        move2e : "-Stone Edge",
        move3e : "-Earthquake",
        move4e : "-Thunder Punch",

        namef : "Pidgeot",
        levelf : "LV: 60",
        typef : "Type: Normal/Flying",
        abilityf: "Ability: Tangled Feet",
        itemf : "Item: Sitrus Berry",
        hpf : "HP: 187",
        atkf : "Atk: 119",
        deff : "Def: 113",
        spatkf : "Sp. Atk: 107",
        spdeff : "Sp. Def: 117",
        spdf : "Spd: 118",
        move1f : "-Return",
        move2f : "-Whirlwind",
        move3f : "-Air Slash",
        move4f : "-Mirror Move",
    },

    {
        namea : "Pikachu",
        levela : "LV: 88",
        typea : "Type: Electric",
        abilitya: "Ability: Static",
        itema : "Item: Light Ball",
        hpa : "HP: 186",
        atka : "Atk: 128",
        defa : "Def: 84",
        spatka : "Sp. Atk: 119",
        spdefa : "Sp. Def: 101",
        spda : "Spd: 189",
        move1a : "-Quick Attack",
        move2a : "-Thunderbolt",
        move3a : "-Iron Tail",
        move4a : "-Volt Tackle",

        nameb : "Lapras",
        levelb : "LV: 80",
        typeb : "Type: Water/Ice",
        abilityb: "Ability: Shell Armor",
        itemb : "Item: None",
        hpb : "HP: 322",
        atkb : "Atk: 181",
        defb : "Def: 157",
        spatkb : "Sp. Atk: 165",
        spdefb : "Sp. Def: 181",
        spdb : "Spd: 112",
        move1b : "-Psychic",
        move2b : "-Brine",
        move3b : "-Blizzard",
        move4b : "-Body Slam",

        namec : "Snorlax",
        levelc : "LV: 82",
        typec : "Type: Normal",
        abilityc: "Ability: Thick Fat",
        itemc : "Item: None",
        hpc : "HP: 379",
        atkc : "Atk: 210",
        defc : "Def: 136",
        spatkc : "Sp. Atk: 136",
        spdefc : "Sp. Def: 210",
        spdc : "Spd: 78",
        move1c : "-Giga Impact",
        move2c : "-Crunch",
        move3c : "-Blizzard",
        move4c : "-Shadow Ball",

        named : "Venusaur",
        leveld : "LV: 84",
        typed : "Type: Grass/Poison",
        abilityd: "Ability: Overgrow",
        itemd : "Item: None",
        hpd : "HP: 253",
        atkd : "Atk: 167",
        defd : "Def: 169",
        spatkd : "Sp. Atk: 198",
        spdefd : "Sp. Def: 217",
        spdd : "Spd: 147",
        move1d : "-Frenzy Plant",
        move2d : "-Giga Drain",
        move3d : "-Sludge Bomb",
        move4d : "-Sleep Powder",

        namee : "Charizard",
        levele : "LV: 84",
        typee : "Type: Fire/Flying",
        abilitye: "Ability: Blaze",
        iteme : "Item: None",
        hpe : "HP: 250",
        atke : "Atk: 171",
        defe : "Def: 177",
        spatke : "Sp. Atk: 213",
        spdefe : "Sp. Def: 173",
        spde : "Spd: 178",
        move1e : "-Blast Burn",
        move2e : "-Flare Blitz",
        move3e : "-Air Slash",
        move4e : "-Dragon Pulse",

        namef : "Blastoise",
        levelf : "LV: 84",
        typef : "Type: Water",
        abilityf: "Ability: Torrent",
        itemf : "Item: None",
        hpf : "HP: 251",
        atkf : "Atk: 169",
        deff : "Def: 198",
        spatkf : "Sp. Atk: 173",
        spdeff : "Sp. Def: 185",
        spdf : "Spd: 177",
        move1f : "-Hydro Cannon",
        move2f : "-Blizzard",
        move3f : "-Flash Cannon",
        move4f : "-Focus Blast",
    }
]

function displayHGSSTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showHGSSImages(newTrainerId);
        showPokemonHGSSImages(newTrainerId);
    }


    let hgssTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = hgss_trainers [hgssTrainer].namea;
    document.querySelector('#level1').textContent = hgss_trainers [hgssTrainer].levela;
    document.querySelector('#type1').textContent = hgss_trainers [hgssTrainer].typea;
    document.querySelector('#ability1').textContent= hgss_trainers [hgssTrainer].abilitya;
    document.querySelector('#item1').textContent = hgss_trainers [hgssTrainer].itema;
    document.querySelector('#hp1').textContent = hgss_trainers [hgssTrainer].hpa;
    document.querySelector('#atk1').textContent = hgss_trainers [hgssTrainer].atka;
    document.querySelector('#def1').textContent = hgss_trainers [hgssTrainer].defa;
    document.querySelector('#spatk1').textContent = hgss_trainers [hgssTrainer].spatka;
    document.querySelector('#spdef1').textContent = hgss_trainers [hgssTrainer].spdefa;
    document.querySelector('#spd1').textContent = hgss_trainers [hgssTrainer].spda;
    document.querySelector('#move1_1').textContent = hgss_trainers [hgssTrainer].move1a;
    document.querySelector('#move2_1').textContent = hgss_trainers [hgssTrainer].move2a;
    document.querySelector('#move3_1').textContent = hgss_trainers [hgssTrainer].move3a;
    document.querySelector('#move4_1').textContent = hgss_trainers [hgssTrainer].move4a;

    
    document.querySelector('#name2').textContent = hgss_trainers [hgssTrainer].nameb;
    document.querySelector('#level2').textContent = hgss_trainers [hgssTrainer].levelb;
    document.querySelector('#type2').textContent = hgss_trainers [hgssTrainer].typeb;
    document.querySelector('#ability2').textContent= hgss_trainers [hgssTrainer].abilityb;
    document.querySelector('#item2').textContent = hgss_trainers [hgssTrainer].itemb;
    document.querySelector('#hp2').textContent = hgss_trainers [hgssTrainer].hpb;
    document.querySelector('#atk2').textContent = hgss_trainers [hgssTrainer].atkb;
    document.querySelector('#def2').textContent = hgss_trainers [hgssTrainer].defb;
    document.querySelector('#spatk2').textContent = hgss_trainers [hgssTrainer].spatkb;
    document.querySelector('#spdef2').textContent = hgss_trainers [hgssTrainer].spdefb;
    document.querySelector('#spd2').textContent = hgss_trainers [hgssTrainer].spdb;
    document.querySelector('#move1_2').textContent = hgss_trainers [hgssTrainer].move1b;
    document.querySelector('#move2_2').textContent = hgss_trainers [hgssTrainer].move2b;
    document.querySelector('#move3_2').textContent = hgss_trainers [hgssTrainer].move3b;
    document.querySelector('#move4_2').textContent = hgss_trainers [hgssTrainer].move4b;

    document.querySelector('#name3').textContent = hgss_trainers [hgssTrainer].namec;
    document.querySelector('#level3').textContent = hgss_trainers [hgssTrainer].levelc;
    document.querySelector('#type3').textContent = hgss_trainers [hgssTrainer].typec;
    document.querySelector('#ability3').textContent= hgss_trainers [hgssTrainer].abilityc;
    document.querySelector('#item3').textContent = hgss_trainers [hgssTrainer].itemc;
    document.querySelector('#hp3').textContent = hgss_trainers [hgssTrainer].hpc;
    document.querySelector('#atk3').textContent = hgss_trainers [hgssTrainer].atkc;
    document.querySelector('#def3').textContent = hgss_trainers [hgssTrainer].defc;
    document.querySelector('#spatk3').textContent = hgss_trainers [hgssTrainer].spatkc;
    document.querySelector('#spdef3').textContent = hgss_trainers [hgssTrainer].spdefc;
    document.querySelector('#spd3').textContent = hgss_trainers [hgssTrainer].spdc;
    document.querySelector('#move1_3').textContent = hgss_trainers [hgssTrainer].move1c;
    document.querySelector('#move2_3').textContent = hgss_trainers [hgssTrainer].move2c;
    document.querySelector('#move3_3').textContent = hgss_trainers [hgssTrainer].move3c;
    document.querySelector('#move4_3').textContent = hgss_trainers [hgssTrainer].move4c;

    document.querySelector('#name4').textContent = hgss_trainers [hgssTrainer].named;
    document.querySelector('#level4').textContent = hgss_trainers [hgssTrainer].leveld;
    document.querySelector('#type4').textContent = hgss_trainers [hgssTrainer].typed;
    document.querySelector('#ability4').textContent= hgss_trainers [hgssTrainer].abilityd;
    document.querySelector('#item4').textContent = hgss_trainers [hgssTrainer].itemd;
    document.querySelector('#hp4').textContent = hgss_trainers [hgssTrainer].hpd;
    document.querySelector('#atk4').textContent = hgss_trainers [hgssTrainer].atkd;
    document.querySelector('#def4').textContent = hgss_trainers [hgssTrainer].defd;
    document.querySelector('#spatk4').textContent = hgss_trainers [hgssTrainer].spatkd;
    document.querySelector('#spdef4').textContent = hgss_trainers [hgssTrainer].spdefd;
    document.querySelector('#spd4').textContent = hgss_trainers [hgssTrainer].spdd;
    document.querySelector('#move1_4').textContent = hgss_trainers [hgssTrainer].move1d;
    document.querySelector('#move2_4').textContent = hgss_trainers [hgssTrainer].move2d;
    document.querySelector('#move3_4').textContent = hgss_trainers [hgssTrainer].move3d;
    document.querySelector('#move4_4').textContent = hgss_trainers [hgssTrainer].move4d;

    document.querySelector('#name5').textContent = hgss_trainers [hgssTrainer].namee;
    document.querySelector('#level5').textContent = hgss_trainers [hgssTrainer].levele;
    document.querySelector('#type5').textContent = hgss_trainers [hgssTrainer].typee;
    document.querySelector('#ability5').textContent= hgss_trainers [hgssTrainer].abilitye;
    document.querySelector('#item5').textContent = hgss_trainers [hgssTrainer].iteme;
    document.querySelector('#hp5').textContent = hgss_trainers [hgssTrainer].hpe;
    document.querySelector('#atk5').textContent = hgss_trainers [hgssTrainer].atke;
    document.querySelector('#def5').textContent = hgss_trainers [hgssTrainer].defe;
    document.querySelector('#spatk5').textContent = hgss_trainers [hgssTrainer].spatke;
    document.querySelector('#spdef5').textContent = hgss_trainers [hgssTrainer].spdefe;
    document.querySelector('#spd5').textContent = hgss_trainers [hgssTrainer].spde;
    document.querySelector('#move1_5').textContent = hgss_trainers [hgssTrainer].move1e;
    document.querySelector('#move2_5').textContent = hgss_trainers [hgssTrainer].move2e;
    document.querySelector('#move3_5').textContent = hgss_trainers [hgssTrainer].move3e;
    document.querySelector('#move4_5').textContent = hgss_trainers [hgssTrainer].move4e;

    document.querySelector('#name6').textContent = hgss_trainers [hgssTrainer].namef;
    document.querySelector('#level6').textContent = hgss_trainers [hgssTrainer].levelf;
    document.querySelector('#type6').textContent = hgss_trainers [hgssTrainer].typef;
    document.querySelector('#ability6').textContent= hgss_trainers [hgssTrainer].abilityf;
    document.querySelector('#item6').textContent = hgss_trainers [hgssTrainer].itemf;
    document.querySelector('#hp6').textContent = hgss_trainers [hgssTrainer].hpf;
    document.querySelector('#atk6').textContent = hgss_trainers [hgssTrainer].atkf;
    document.querySelector('#def6').textContent = hgss_trainers [hgssTrainer].deff;
    document.querySelector('#spatk6').textContent = hgss_trainers [hgssTrainer].spatkf;
    document.querySelector('#spdef6').textContent = hgss_trainers [hgssTrainer].spdeff;
    document.querySelector('#spd6').textContent = hgss_trainers [hgssTrainer].spdf;
    document.querySelector('#move1_6').textContent = hgss_trainers [hgssTrainer].move1f;
    document.querySelector('#move2_6').textContent = hgss_trainers [hgssTrainer].move2f;
    document.querySelector('#move3_6').textContent = hgss_trainers [hgssTrainer].move3f;
    document.querySelector('#move4_6').textContent = hgss_trainers [hgssTrainer].move4f;
}

function showHGSSImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainer_data_images/trainers/hgss/" + trainerId + ".png";
    imgTrainer.setAttribute("alt", `Image of ${trainerId}`)
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonHGSSImages(trainerId) {
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

    
    imgPokemon1.src = "images/trainer_data_images/pokemon/hgss/" + trainerId + "_1.png";
    imgPokemon2.src = "images/trainer_data_images/pokemon/hgss/" + trainerId + "_2.png";
    imgPokemon3.src = "images/trainer_data_images/pokemon/hgss/" + trainerId + "_3.png";
    imgPokemon4.src = "images/trainer_data_images/pokemon/hgss/" + trainerId + "_4.png";
    imgPokemon5.src = "images/trainer_data_images/pokemon/hgss/" + trainerId + "_5.png";
    imgPokemon6.src = "images/trainer_data_images/pokemon/hgss/" + trainerId + "_6.png";
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

falknerHGSS.addEventListener('click', displayHGSSTrainers);
bugsyHGSS.addEventListener('click', displayHGSSTrainers);
whitneyHGSS.addEventListener('click', displayHGSSTrainers);
mortyHGSS.addEventListener('click', displayHGSSTrainers);
chuckHGSS.addEventListener('click', displayHGSSTrainers);
jasmineHGSS.addEventListener('click', displayHGSSTrainers);
pryceHGSS.addEventListener('click', displayHGSSTrainers);
clairHGSS.addEventListener('click', displayHGSSTrainers);
willHGSS.addEventListener('click', displayHGSSTrainers);
kogaHGSS.addEventListener('click', displayHGSSTrainers);
brunoHGSS.addEventListener('click', displayHGSSTrainers);
karenHGSS.addEventListener('click', displayHGSSTrainers);
lanceHGSS.addEventListener('click', displayHGSSTrainers);
brockHGSS.addEventListener('click', displayHGSSTrainers);
mistyHGSS.addEventListener('click', displayHGSSTrainers);
ltsurgeHGSS.addEventListener('click', displayHGSSTrainers);
erikaHGSS.addEventListener('click', displayHGSSTrainers);
janineHGSS.addEventListener('click', displayHGSSTrainers);
sabrinaHGSS.addEventListener('click', displayHGSSTrainers);
blaineHGSS.addEventListener('click', displayHGSSTrainers);
blueHGSS.addEventListener('click', displayHGSSTrainers);
redHGSS.addEventListener('click', displayHGSSTrainers);