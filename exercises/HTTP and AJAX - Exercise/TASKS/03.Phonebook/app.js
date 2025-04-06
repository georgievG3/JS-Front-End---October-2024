function loadContacts(baseUrl, onSuccess) {
    fetch(baseUrl)
            .then(response => response.json())
            .then(onSuccess)
            .catch(error => console.error('Error: ', error))
}

function createContacts(baseUrl, contact, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(contact)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error))
}

function deleteContacts(baseUrl, contact, onSuccess) {
    fetch(baseUrl + contact._id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error))
}

function createElement(tag, properties, container) {
    const element = document.createElement(tag)


    Object.keys(properties).forEach(key => {
        if (typeof properties[key] === 'object'){
            Object.assign(element.dataset, properties[key])
        }else{
            element[key] = properties[key]
        }
    })

    if (container) container.append(element)

    return element
}

function init() {

    const baseUrl = `http://localhost:3030/jsonstore/phonebook`

    const btnLoadEl = document.querySelector('#btnLoad')
    const btnCreateEl = document.querySelector('#btnCreate')
    const phonebookEl = document.querySelector('#phonebook')


    loadContacts(baseUrl, (result) => {
        Object.values(result).forEach(createEntry);
    })

    function createEntry({ person, phone, _id}) {
        createElement(
            'button', 
            { textContent: 'Delete',
                 onclick: deleteEntryHandler},
             createElement(
                'li',
                 { textContent: `${person} ${phone}`}
                 , 
                 phonebookEl))
    }
    
    function deleteEntry() {
    
    }
    
    function createEntryHandler() {
    
    }
    
    function deleteEntryHandler() {
        
    }

}

document.addEventListener('DOMContentLoaded', init)