function solve (numbersArray) {
     numbersArray.sort((a, b) => a-b)
     let sortedNumbers = []

     while(numbersArray.length > 0){
        sortedNumbers.push(numbersArray.shift())
        sortedNumbers.push(numbersArray.pop())
     }

     return sortedNumbers
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])