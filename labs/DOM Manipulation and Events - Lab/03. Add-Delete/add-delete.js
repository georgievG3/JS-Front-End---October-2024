function addItem() {
    function deleteItem(e) {

        e.currentTarget.parentElement.remove();
    }

    let inputText = document.querySelector('#newItemText').value
    let itemsList = document.querySelector('#items')


    if (inputText == '') return


    let liItem = document.createElement('li')
    let deleteLink = document.createElement('a')

    liItem.textContent = inputText
    deleteLink.setAttribute('href', '#')
    deleteLink.textContent = "[Delete]"

    deleteLink.addEventListener( 'click', deleteItem)

    liItem.appendChild(deleteLink)
    itemsList.appendChild(liItem)


    document.querySelector('#newItemText').value = ''
}
