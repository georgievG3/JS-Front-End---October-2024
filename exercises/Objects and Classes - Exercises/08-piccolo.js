function parkingLot(parkingArray) {

    let parking = {}

    parkingArray.forEach(element => {
        
        let [command, car] = element.split(", ")

        if (command === "IN") {
            parking[car] = "in"
        } else if (command === "OUT"){
            delete parking[car]
        }
    });

    if (Object.keys(parking).length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sortedParking = Object.entries(parking).sort().forEach(([car]) => console.log(car))
    }
    

}

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])