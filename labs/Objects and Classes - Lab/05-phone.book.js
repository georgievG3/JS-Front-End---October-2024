function person(personArray) {

    let personObject = {}

    for (const element of personArray) {

        

        let elements = element.split(" ")
        let name = elements[0]
        let phone = elements[1]

        personObject[name] = phone
            
    }  

    for (const key in personObject) {
       console.log(`${key} -> ${personObject[key]}`)
    }


}

person(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])