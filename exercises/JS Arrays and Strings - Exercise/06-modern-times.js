function solve (text) {

    textArray = text.split(" ")

    textArray.forEach(word => {
        if (word.startsWith("#") && word.length > 1 && /^[A-Za-z]+$/.test(word.substring(1))) {
            console.log(word.substring(1))
        }
    });

}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')