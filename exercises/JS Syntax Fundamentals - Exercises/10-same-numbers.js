function sameNumbers (number) {
    
    let numStr = number.toString()
    let result = true
    let resultNum = 0

    for (let i = 0; i < numStr.length; i++) {

        if (numStr[i] != numStr[i + 1] && i < numStr.length - 1){
            result = false
        }
        resultNum += Number(numStr[i])
    }
    
    console.log(result)
    console.log(resultNum)
}

sameNumbers(2222222)