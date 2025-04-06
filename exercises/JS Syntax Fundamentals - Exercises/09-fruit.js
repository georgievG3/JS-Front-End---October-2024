function fruit (fruit, grams, price) {

    let kg = grams / 1000
    let cost = (kg * price).toFixed(2)
    console.log(`I need $${cost} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)

}

fruit('apple', 1563, 2.35)