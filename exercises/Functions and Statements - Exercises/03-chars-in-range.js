function asciiChars (char1, char2) {

    let higherNum = Math.max(char1.charCodeAt(), char2.charCodeAt())
    let lowerNum = Math.min(char1.charCodeAt(), char2.charCodeAt())

    let result = []

    for (let i = lowerNum + 1; i < higherNum; i++) {
        result.push(String.fromCharCode(i))
    }

    console.log(result.join(" "))

}

asciiChars('a',
'd')