function meetings(meetingsArray) {

    meetingsObject = {}

    for (const element of meetingsArray) {
        
        let dayName  = element.split(" ")
        let day = dayName[0]
        let name = dayName[1]

        if (meetingsObject.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        }else {
            meetingsObject[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }

    for (const key in meetingsObject) {
        
        console.log(`${key} -> ${meetingsObject[key]}`)

    }


}

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])