function toggle() {
    
    let button = document.getElementsByClassName('button')[0]
    let extraContent = document.querySelector('#extra')

    if (button.textContent == "More"){
        extraContent.style.display = "block"
        button.textContent = "Less"
    } else if (button.textContent == "Less"){
        extraContent.style.display = "none"
        button.textContent = "More"
    }
}