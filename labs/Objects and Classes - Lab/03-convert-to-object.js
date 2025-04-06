function toObject(jsonFormat) {

    let objectFormat = JSON.parse(jsonFormat)
    
    for (const key in objectFormat) {
        
        console.log(`${key}: ${objectFormat[key]}`)
        
    }

}

toObject('{"name": "George", "age": 40, "town": "Sofia"}')