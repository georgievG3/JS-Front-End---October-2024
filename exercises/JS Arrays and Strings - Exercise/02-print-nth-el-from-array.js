function solve (textArray, step) {

    let result = []

    for (let i = 0; i < (textArray.length); i++){
        
        if (i % step == 0){
            result.push(textArray[i])
        }
    }

    return result

}

solve(['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2)