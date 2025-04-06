// function smallestNumber(numOne, numTwo, numThree) {

//     numbersArray = [numOne, numTwo, numThree]
//     let result = Math.min(...numbersArray)

//     console.log(result)

// }


function smallestNumber(numOne, numTwo, numThree) {

    numbersArray = [numOne, numTwo, numThree]
    let result = +Infinity

    numbersArray.forEach(number => {
        if (number < result) {
            result = number
        }
    });

    console.log(result)

}

smallestNumber(600,
    342,
    123)