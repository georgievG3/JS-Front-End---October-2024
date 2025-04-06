function totalPrice(product, quantity) {

    let result = 0

        switch (product){
            case "water":
                result = (quantity * 1.00).toFixed(2)
                break
            case "coffee":
                result = (quantity * 1.50).toFixed(2)
                break
            case "coke":
                result = (quantity * 1.40).toFixed(2)
                break
            case "snacks":
                result = (quantity * 2.00).toFixed(2)
                break

        }

    console.log(result)

}

totalPrice("water", 5)
totalPrice("coffee", 2)