function sum (number) {
    let result = 0
    const numStr = number.toString();
    for (let n = 0; (n < numStr.length); n++){
        result += Number(numStr[n]);
    }

    console.log(result)

}

sum(5423)
