function empleyees(employeesArray) {

    let employeesObject = {}

    employeesArray.forEach(employee => {
        employeesObject[employee] = employee.length
    });

    for (const key in employeesObject) {
        console.log(`Name: ${key} -- Personal Number: ${employeesObject[key]}`)
    }

}

empleyees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])