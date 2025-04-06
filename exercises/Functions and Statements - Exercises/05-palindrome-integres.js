function palindrome (numberArray) {

    numberArray.forEach(number => {
        if (String(number) == (number.toString().split("").reverse()).join("")){
            console.log(true)
        } else {
            console.log(false)
        }
    });

}

palindrome([123,323,421,121])