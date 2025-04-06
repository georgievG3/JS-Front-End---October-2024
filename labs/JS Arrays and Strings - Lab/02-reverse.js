function reverse (number, listOfNumbers) {
    let reversedList = listOfNumbers.slice(0, number)
    console.log(reversedList.reverse().join(" "))
}

reverse(3, [10, 20, 30, 40, 50])