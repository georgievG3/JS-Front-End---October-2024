function sum (numbers) {

    let firstNum = numbers[0]
    let lastNum = numbers[numbers.length-1]

    let result = firstNum + lastNum

    console.log(result)
}

sum([20, 30, 40])