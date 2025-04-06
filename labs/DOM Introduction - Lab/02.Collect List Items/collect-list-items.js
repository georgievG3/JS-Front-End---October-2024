function extractText() {
    const itemsElement = document.querySelectorAll('#items')
    const textArea = document.querySelector("#result")
    textArea.value = [...itemsElement].map(el => el.textContent.trim()).join("\n").trim()
}