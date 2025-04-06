function human(name, lastName, hairColor) {

    let humanObject = {

        name,
        lastName,
        hairColor

    }

    let humanJSON = JSON.stringify(humanObject)
    console.log(humanJSON)

}

human('George', 'Jones', 'Brown')