function wordsTracker(wordsArray) {

    let searchedWordsObject = {}
    let searchedWords = wordsArray[0].split(" ")
    
    for (let word of searchedWords) {
        searchedWordsObject[word] = 0;
    }

    for (let i = 1; i < wordsArray.length; i++) {
        let word = wordsArray[i];
        if (searchedWordsObject.hasOwnProperty(word)) {
            searchedWordsObject[word] += 1;
        }
    }

    let sortedObject = Object.fromEntries(Object.entries(searchedWordsObject).sort(([, a], [, b]) => b - a))

    for (const key in sortedObject) {
        console.log(`${key} - ${sortedObject[key]}`)
    }

}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])