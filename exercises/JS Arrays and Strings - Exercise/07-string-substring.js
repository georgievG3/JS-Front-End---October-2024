function solve (wordToFind, text) {

    textArray = text.split(" ")
    notFound = true

    for (let i = 0; i < textArray.length; i++){

        if (textArray[i].toLowerCase() === wordToFind.toLowerCase()){
            console.log(wordToFind)
            notFound = false
            break
        }

    }

    if (notFound){
        console.log(`${wordToFind} not found!`)
    }
    

}

solve('python',
'JavaScript is the best programming language')