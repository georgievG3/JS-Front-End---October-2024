window.addEventListener("load", solve);

function solve() {
  
  const nextBtn = document.getElementById("next-btn")

  const previewList = document.getElementById("preview-list")
  const eventList = document.getElementById("event-list")

  const emailInput = document.getElementById("email")
  const eventInput = document.getElementById("event")
  const locationInput = document.getElementById("location")

  nextBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();
    const event = eventInput.value.trim();
    const location = locationInput.value.trim();

    if (!email || !event || !location) {
      console.error("All fields must be filled.");
      return;
    }

    const liElement = createEventListElement(email, event, location);
    previewList.appendChild(liElement);

    clearInputs();
    console.log("Added new event preview:", liElement);

  })

  function clearInputs() {
    emailInput.value = ''
    eventInput.value = ''
    locationInput.value = ''
  }

  function createEventListElement( email, event, location ) {

    const emailHeaderEl = document.createElement('h4')
    emailHeaderEl.textContent = email

    const eventPElement = document.createElement('p')
    const eventStrongElement = document.createElement('strong')
    eventStrongElement.textContent = "Event:"
    const eventBrElement = document.createElement('br')

    eventPElement.appendChild(eventStrongElement)
    eventPElement.appendChild(eventBrElement)
    eventPElement.insertAdjacentText('beforeend', event);

    const locationPElement = document.createElement('p')
    const locationStrongElement = document.createElement('strong')
    locationStrongElement.textContent = "Location:"
    const locationBrElement = document.createElement('br')

    locationPElement.appendChild(locationStrongElement)
    locationPElement.appendChild(locationBrElement)
    locationPElement.insertAdjacentText('beforeend', location);

    const eventArticle = document.createElement('article')
    eventArticle.appendChild(emailHeaderEl)
    eventArticle.appendChild(eventPElement)
    eventArticle.appendChild(locationPElement)

    const eventEditBtn = document.createElement('button')
    eventEditBtn.textContent = 'edit'
    eventEditBtn.classList.add("action-btn")
    eventEditBtn.classList.add("edit")

    const eventApplyBtn = document.createElement('button')
    eventApplyBtn.textContent = 'apply'
    eventApplyBtn.classList.add("action-btn")
    eventApplyBtn.classList.add("apply")

    const eventLiElement = document.createElement('li')
    eventLiElement.classList.add('application')
    eventLiElement.appendChild(eventArticle)
    eventLiElement.appendChild(eventEditBtn)
    eventLiElement.appendChild(eventApplyBtn)

    eventEditBtn.addEventListener('click', () => {

      emailInput.value = email
      eventInput.value = event
      locationInput.value = location

      eventLiElement.remove()

    })

    eventApplyBtn.addEventListener('click', () => {

      eventEditBtn.remove()
      eventApplyBtn.remove()

      eventList.appendChild(eventLiElement)

    })

    return eventLiElement
  }

}
