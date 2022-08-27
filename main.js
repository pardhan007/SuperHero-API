
// https://www.superheroapi.com/api.php/1438039940012438/245
// https://www.superheroapi.com/api.php/1438039940012438/search/ethan

const userInput = document.getElementById('userInput');
const supName = document.getElementById('supName');
const supImage = document.getElementById('supImage');

const powerStatDiv = document.getElementById('powerStatDiv');

const BASE_URL = 'https://www.superheroapi.com/api.php/1438039940012438';

const searchHeroByName = (heroName) => {
    fetch(`${BASE_URL}/search/${heroName}`)
        .then(response => response.json())
        .then(json => {
            if (json.response == "error") {
                alert("Character Not Found");
            }
            else {
                showHeroDetails(json.results[0]);
            }
        })
}


const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡️',
    durability: '🏋️‍♀️',
    power: '📊',
    combat: '⚔️',
}

const showHeroDetails = (character) => {

    supName.innerHTML = `<h1>${character.name}</h1>`;
    supImage.innerHTML = `<img src='${character.image.url}' width=250 heigth=300 />`
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]} </p>`
    })

    // above stats is doing that, we have key- value pair in character.
    //powerstats & using Object.keys will return an array of keys only.
    // After that we are looping using map on our key array & return/replacing/pushing
    // `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]} </p>`

    powerStatDiv.innerHTML = stats.join('');

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
    fetch(`${BASE_URL}/${randonNumber}`)
        .then(response => response.json())
        .then(json => {
            if (json.response == "error") {
                alert("Character Not Found");
            }
            else {
                showHeroDetails(json);
            }
        })
}








