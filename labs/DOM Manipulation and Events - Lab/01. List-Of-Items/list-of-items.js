function addItem() {
    let inputText = document.querySelector('#newItemText').value
    let itemsList = document.querySelector('#items')
    let liItem = document.createElement('li')

    liItem.appendChild(document.createTextNode(inputText))
    itemsList.appendChild(liItem)

    document.querySelector('#newItemText').value = ''
}
