function solve(words, text) {
    textArray = text.split(" ")

    textArray.forEach(word => {
        if (word.includes("*")) {
            words.split(", ").forEach(letters => {
                if (letters.length == word.length) {
                    wordIndex = textArray.indexOf(word)
                    textArray.splice(wordIndex, 1, letters)
                }
            })
        }
    });

    console.log(textArray.join(" "))
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages')