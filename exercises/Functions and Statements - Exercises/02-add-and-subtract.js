// function sum (numOne, numTwo, numThree) {

//     let sumNums = numOne + numTwo


//     function subtract (summedNumbers, thirdNumber) {

//         result = summedNumbers - thirdNumber
//         console.log(result)

//     }

//     subtract(sumNums, numThree)


// }

function addAndSubtract (num1, num2, num3) {

    const sum = (x, y) => x + y;
    const subtract = (x, y) => x-y;

    return subtract(sum(num1, num2), num3)

}

console.log(addAndSubtract(42,
    58,
    100))