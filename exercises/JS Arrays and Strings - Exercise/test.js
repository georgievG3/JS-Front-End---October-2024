let wow = 'softuni is ***** place for learning new programming languages'
let words = wow.split(' ')

words.forEach(word => {
    if (word.includes("*")) {
        console.log(word)
    }
});