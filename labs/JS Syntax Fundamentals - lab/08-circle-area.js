function solve (arg){

    let radius;

    if (typeof(arg) === 'number'){
        radius = Math.PI * Math.pow(arg, 2)
        console.log(radius.toFixed(2))
    } else {
        radius = `We can not calculate the circle area, because we receive a ${typeof(arg)}.`
        console.log(radius)
    }

}

solve('name')