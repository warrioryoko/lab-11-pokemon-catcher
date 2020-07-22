export function getRandomItem(dataArray) {
    //Returns an index between 0 and the length of the array passed in -1
    const randomItem = Math.floor(Math.random() * dataArray.length);
    return dataArray[randomItem];
}

export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }

    return null;
}

export function getLocalStorage() {
    //This is getting the list of Pokemon encountered from local Storage, called 'POKECOUNTER'
    //Otherwise, it's making an empty array.
    const stringData = localStorage.getItem('POKECOUNTER');
    let data = JSON.parse(stringData) || [];

    return data;
}

export function encounterList(id) {
    //This is just calling getLocalStorage to convert string data in local storage to an array
    const localData = getLocalStorage();
    const foundItem = findById(localData, id.id);

    //If this item has been encountered before, add it to the encountered count
    if (foundItem) {
        foundItem.encountered++;
    } else {
        //Otherwise, add it as a new entry and push it back to the encounter info, 'POKECOUNTER'
        const newEncounter = {
            id: id.id,
            name: id.pokemon,
            captured: 0,
            encountered: 1
        };
        localData.push(newEncounter);
    }
    //Take the updated list of items/encounters and push it to local storage
    const stringData = JSON.stringify(localData);
    localStorage.setItem('POKECOUNTER', stringData);
}