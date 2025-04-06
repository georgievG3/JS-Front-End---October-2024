//api func

function loadResources(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error))
}

function createResources(baseUrl, resource, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(resource)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error))
}

function updateResources(baseUrl, resource, onSuccess) {
    fetch(baseUrl + resource._id, {
        method: 'PUT',
        body: JSON.stringify(resource)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error))
}

function deleteResources(baseUrl, resource, onSuccess) {
    fetch(baseUrl + resource._id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error))
}

//util func

function createElement(tag, properties, container) {
    const element = document.createElement(tag)

    Object.keys(properties).forEach(key =>{
      if (typeof properties[key] === "object") {
        Object.assign(element[key], properties[key])
      } else{
        element[key] = properties[key]
      }
    })

    if ( container ) container.append(element)

      return element

  }

function solve() {

    //gloabl variables

    const baseUrl = 'http://localhost:3030/jsonstore/workout/'

    const addWorkoutBtn = document.querySelector('#add-workout')
    const editWorkoutBtn = document.querySelector('#edit-workout')

    const workoutListEl = document.querySelector('#list')
    const workoutInputs = [...document.querySelectorAll('#workout, #location, #date')]

    addWorkoutBtn.addEventListener('click', addWorkoutHandler)
    editWorkoutBtn.addEventListener('click', editWorkoutHandler)

    //dom func

    function loadWorkoutEntries() {

        workoutListEl.innerHTML = ''

        loadResources(baseUrl, (result) => {
            Object.values(result).forEach(createWorkoutEntry)
        })

    }

    function createWorkoutEntry( {workout, location, date, _id}){

        const workoutContainer = createElement('div', {className: "container", dataset: { workout, location, date, _id}}, workoutListEl)

        createElement('h2', {textContent: workout}, workoutContainer)
        createElement('h3', {textContent: date}, workoutContainer)
        createElement('h3', {textContent: location, id: "location"}, workoutContainer)

        const workoutBtns = createElement("div", {id: 'buttons-container'}, workoutContainer)

        createElement('button', {className: 'change-btn', textContent: 'Change', onclick: changeWorkoutHandler}, workoutBtns)
        createElement('button', {className: 'delete-btn', textContent: 'Delete', onclick: deleteWorkoutHandler}, workoutBtns)
    }

    function deleteWorkoutEntry( { workout, location, date, _id }){
        workoutListEl.querySelector(`div[data-_id="${_id}"]`).closest('div').remove()
    }

    //event handlers

    function addWorkoutHandler(e) {

        e.preventDefault()

        const [ workout, location, date ] = workoutInputs.map(field => field.value)

        if ( !workout || !location || !date ) return

        const workoutResourceObject = { workout, location, date }

        createResources(baseUrl, workoutResourceObject, (result) => {
            createWorkoutEntry(result)
        })

        workoutInputs.forEach(field => field.value = '')

    }

    function editWorkoutHandler(e) {

        e.preventDefault()

        const [ workout, location, date ] = workoutInputs.map(field => field.value)

        if ( !workout || !location || !date ) return

        const workoutEntryEl = workoutListEl.querySelector('.active')
        const workoutResourceObject = { workout, location, date, _id: workoutEntryEl.dataset._id}

        updateResources(baseUrl, workoutResourceObject, (result) => {
            loadWorkoutEntries()

            workoutInputs.forEach(field => field.value = '')

            addWorkoutBtn.disabled = false
            editWorkoutBtn.disabled = true
        })
    }

    function changeWorkoutHandler(e) {

        e.preventDefault()

        const workoutEl = e.target.closest('div .container')
        const workoutValues = Object.values(workoutEl.dataset)

        workoutInputs.forEach((field, index) => field.value = workoutValues[index])

        workoutEl.classList.add('active')

        addWorkoutBtn.disabled = true
        editWorkoutBtn.disabled = false
    }

    function deleteWorkoutHandler(e) {

        const workoutEl = e.target.closest('div .container')
        const workoutResourceObject = Object.assign({}, workoutEl.dataset)

        deleteResources(baseUrl, workoutResourceObject, deleteWorkoutEntry)

    }

    loadWorkoutEntries()

}

document.addEventListener("DOMContentLoaded", solve)