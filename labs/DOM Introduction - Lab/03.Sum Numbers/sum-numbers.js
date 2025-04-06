function calc() {

    let numOne = document.getElementById('num1')
    let numTwo = document.getElementById('num2')

    const sumElements = document.querySelector('#sum')

    sumElements.value = Number(numOne.value) + Number(numTwo.value)
}