function sumTable() {
    let elements = document.querySelectorAll("table tbody tr td")
    let total = document.querySelector('#sum')
    let sum = 0

    for (let i = 0; i<elements.length - 2; i++){
        if(i % 2 != 0){
            sum += Number(elements[i].textContent)
        }
    }

    total.textContent = sum
}