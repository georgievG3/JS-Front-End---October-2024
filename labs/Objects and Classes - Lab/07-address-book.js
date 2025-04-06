function sortAddress(stringArray) {

    let addressObject = {}

    for (const element of stringArray) {
        
        let [name, address] = element.split(":")

        addressObject[name] = address

    }

    let entries = Object.entries(addressObject)

    entries.sort()

    for (const array of entries) {
        console.log(`${array[0]} -> ${array[1]}`)
    }

}

sortAddress(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])