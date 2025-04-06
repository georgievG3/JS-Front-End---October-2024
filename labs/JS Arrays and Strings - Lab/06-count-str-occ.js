function solve (text, word) {

    let textArray = text.split(" ")
    let count = 0

    textArray.forEach(textWord => {
        if (textWord == word) {
            count += 1
        }
    });

    console.log(count)
}

solve('softuni is great place for learning new programming languages',
'softuni')