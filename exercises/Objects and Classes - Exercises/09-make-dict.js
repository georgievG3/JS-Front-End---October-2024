function makeDict(arrayDict) {

    let dict = {}

    arrayDict.forEach(element => {
        
        let elementObject = JSON.parse(element)
        
        for (const key in elementObject) {
            dict[key] = elementObject[key]
        }
    });

    let sortedDict = Object.fromEntries(Object.entries(dict).sort())
    
    for (const key in sortedDict) {
        
        console.log(`Term: ${key} => Definition: ${sortedDict[key]}`)
    }

}

makeDict([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])