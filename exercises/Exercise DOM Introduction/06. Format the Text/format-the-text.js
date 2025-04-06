function solve() {
  const inputText = document.getElementById("input").value;
  const sentences = inputText.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);
  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = '';

    for (let i = 0; i < sentences.length; i += 3) {
        const paragraphContent = sentences.slice(i, i + 3).join('. ') + '.';
        const paragraphElement = `<p>${paragraphContent}</p>`;
        outputDiv.innerHTML += paragraphElement;
    }


}

