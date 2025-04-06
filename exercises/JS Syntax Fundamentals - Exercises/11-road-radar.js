function radar (speed, area) {
    let MOTORWAY = 130
    let INTERSTATE = 90
    let CITY = 50
    let RESIDENTIAL = 20

    let status

    if (area == "motorway") {

        if (speed <= MOTORWAY) {
            console.log(`Driving ${speed} km/h in a ${MOTORWAY} zone`)
        } else {

            let difference = speed - MOTORWAY

            if (difference <= 20) {
                status = "speeding"
            } else if (difference > 20 && difference <= 40) {
                status = "excessive speeding"
            } else {
                status = "reckless driving"
            }

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${MOTORWAY} - ${status}`)
        }
    }
    if (area == "interstate") {

        if (speed <= INTERSTATE) {
            console.log(`Driving ${speed} km/h in a ${INTERSTATE} zone`)
        } else {

            let difference = speed - INTERSTATE

            if (difference <= 20) {
                status = "speeding"
            } else if (difference > 20 && difference <= 40) {
                status = "excessive speeding"
            } else {
                status = "reckless driving"
            }

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${INTERSTATE} - ${status}`)
        }
    }
    if (area == "city") {

        if (speed <= CITY) {
            console.log(`Driving ${speed} km/h in a ${CITY} zone`)
        } else {

            let difference = speed - CITY

            if (difference <= 20) {
                status = "speeding"
            } else if (difference > 20 && difference <= 40) {
                status = "excessive speeding"
            } else {
                status = "reckless driving"
            }

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${CITY} - ${status}`)
        }
    }
    if (area == "residential") {

        if (speed <= RESIDENTIAL) {
            console.log(`Driving ${speed} km/h in a ${RESIDENTIAL} zone`)
        } else {

            let difference = speed - RESIDENTIAL

            if (difference <= 20) {
                status = "speeding"
            } else if (difference > 20 && difference <= 40) {
                status = "excessive speeding"
            } else {
                status = "reckless driving"
            }

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${RESIDENTIAL} - ${status}`)
        }
    }
}

radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')