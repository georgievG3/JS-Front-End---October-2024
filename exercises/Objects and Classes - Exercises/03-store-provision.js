function store(arrayOne, arrayTwo) {

    let storeObject = {}

    for (let i = 0; i < arrayOne.length; i+=2){
        storeObject[arrayOne[i]] = Number(arrayOne[i + 1])
    }

    for (let i = 0; i < arrayTwo.length; i+=2){
        if (storeObject.hasOwnProperty(arrayTwo[i])){
            storeObject[arrayTwo[i]] += Number(arrayTwo[i + 1])
        } else {
            storeObject[arrayTwo[i]] = Number(arrayTwo[i + 1])
        }
    }

    for (const key in storeObject) {
        console.log(`${key} -> ${storeObject[key]}`)
    }

}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])