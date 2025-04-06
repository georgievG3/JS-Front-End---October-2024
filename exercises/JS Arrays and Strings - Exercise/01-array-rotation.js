function solve (numbersArray, rotations) {

    for (let i = 0; i <rotations; i++){
        let number = numbersArray.shift()
        numbersArray.push(number)
    }

    console.log(numbersArray.join(" "))

}

solve([51, 47, 32, 61, 21], 2)
