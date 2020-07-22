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

export function trackEncounters(id) {
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

export function trackCaptures(id) {
    const localData = getLocalStorage();
    const foundItem = findById(localData, id);

    if (foundItem) {
        foundItem.captured++;
    }
    const stringData = JSON.stringify(localData);
    localStorage.setItem('POKECOUNTER', stringData);
}

export function mungeNameData(localData) {
    const itemNames = [];

    for (let i = 0; i < localData.length; i++) {
        const singleItem = localData[i];
        itemNames.push(singleItem.name);
    }
    return itemNames;
}

export function mungeCaptureData(localData) {
    const itemsCaptured = [];

    for (let i = 0; i < localData.length; i++) {
        const singleItem = localData[i];
        itemsCaptured.push(singleItem.captured);
    }
    return itemsCaptured;
}

export function mungeEncounterData(localData) {
    const itemsEncountered = [];

    for (let i = 0; i < localData.length; i++) {
        const singleItem = localData[i];

        itemsEncountered.push(singleItem.encountered);
    }
    return itemsEncountered;
}