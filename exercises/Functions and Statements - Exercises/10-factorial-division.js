function factorialDivision(numOne, numTwo) {


    function recursion(num) {

        if (num === 0 || num === 1) {
            return 1;
        }
        
        return num * recursion(num - 1)
    }

    console.log((recursion(numOne) / recursion(numTwo)).toFixed(2))


}

factorialDivision(5, 2)