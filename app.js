// import functions and grab DOM elements
import { getRandomItem, getLocalStorage, trackEncounters, trackCaptures } from './common/utils.js';
import data from './data/pokemon.js';

// initialize state
let captures = 0;
//In case the user refreshes the page, or maybe comes from another page to be built out in the future
//Will want to change this in favor of set and clear session functions in the future
let encountersList = JSON.parse(localStorage.getItem('POKEMON'));

if (!encountersList) {
    //Make a list of possible encounters by grabbing the Pokemon data and setting it into local storage
    //Then, take what is in local storage and parse it into an array
    localStorage.setItem('POKEMON', JSON.stringify(data));
    encountersList = JSON.parse(localStorage.getItem('POKEMON'));
}

const currentStats = getLocalStorage();
//const notEncountered, possibleEncounters = encountersList.slice();
// set event listeners to update state and DOM
function initializePage() {
    if (captures === 0) {
        alert('You have now caught 10 Pokemon');
        //window.location.replace('');
    }
    
}