

// https://www.superheroapi.com/api.php/1438039940012438/245
// https://www.superheroapi.com/api.php/1438039940012438/search/ethen

const userInput = document.getElementById('userInput');
const supName = document.getElementById('supName');
const supImage = document.getElementById('supImage');

const powerStats = document.querySelectorAll('.powerStat');

const BASE_URL = 'https://www.superheroapi.com/api.php/1438039940012438/';

const heroDetails = {
    hname: "",
    id: "",
    img: "",
}

const heroPowerStats = {
    intelligence: "",
    strength: "",
    speed: "",
    durability: "",
    power: "",
    combat: "",
}

const searchHeroByName = (heroName) => {
    fetch(`${BASE_URL}/search/${heroName}`)
        .then(response => response.json())
        .then(json => {
            if (json.response == "error") {
                alert("Character Not Found");
            }
            else {
                heroDetails.hname = json.results[0].name;
                heroDetails.id = json.results[0].id;
                heroDetails.img = json.results[0].image.url;
                heroPowerStats.intelligence = json.results[0].powerstats.intelligence
                heroPowerStats.strength = json.results[0].powerstats.strength
                heroPowerStats.speed = json.results[0].powerstats.speed
                heroPowerStats.durability = json.results[0].powerstats.durability
                heroPowerStats.power = json.results[0].powerstats.power
                heroPowerStats.combat = json.results[0].powerstats.combat;
                updateForm();
            }
        })
}

const searchHeroById = (heroId) => {
    fetch(`${BASE_URL}${Number(heroId)}`)
        .then(response => response.json())
        .then(json => {
            if (json.response == "error") {
                // console.log("Character Not Found!");
                alert("Character Not Found");
            }
            else {
                heroDetails.hname = json.name;
                heroDetails.id = json.id;
                heroDetails.img = json.image.url;
                heroPowerStats.intelligence = json.powerstats.intelligence
                heroPowerStats.strength = json.powerstats.strength
                heroPowerStats.speed = json.powerstats.speed
                heroPowerStats.durability = json.powerstats.durability
                heroPowerStats.power = json.powerstats.power
                heroPowerStats.combat = json.powerstats.combat;
                updateForm();
            }
        })
}



const updateForm = () => {
    supName.innerHTML = `<h1>${heroDetails.hname}</h1>`;
    supImage.innerHTML = `<img src='${heroDetails.img}' width=250 heigth=300 />`
    for (let i = 0; i < powerStats.length; i++) {
        if (i == 0) {
            powerStats[i].innerHTML = `<p>🧠 Intelligence: ${heroPowerStats.intelligence}`
        }
        else if (i == 1) {
            powerStats[i].innerHTML = `<p>💪 Strength: ${heroPowerStats.strength}`
        }
        else if (i == 2) {
            powerStats[i].innerHTML = `<p>⚡️ Speed: ${heroPowerStats.speed}`
        }
        else if (i == 3) {
            powerStats[i].innerHTML = `<p>🦾 Durability: ${heroPowerStats.durability}`
        }
        else if (i == 4) {
            powerStats[i].innerHTML = `<p>📊 Power: ${heroPowerStats.power}`
        }
        else if (i == 5) {
            powerStats[i].innerHTML = `<p>⚔️ Combet: ${heroPowerStats.combat}`
        }
    }
}

const findHero = () => {
    const heroName = userInput.value;
    if (heroName.length == 0) {
        return;
    }
    else {
        searchHeroByName(userInput.value);
    }
}

const randomHero = () => {
    let randonNumber = Math.floor(Math.random() * 488) + 1;
    console.log(randonNumber);
    searchHeroById(randonNumber);
}








