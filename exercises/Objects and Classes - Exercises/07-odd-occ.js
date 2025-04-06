function oddExtract(sentence) {

    let sentenceArray = sentence.split(" ")
    let oddOcc = {}
    let result = []

    sentenceArray.forEach(word => {
        
        if (oddOcc.hasOwnProperty(word.toLowerCase())){
            oddOcc[word.toLowerCase()] += 1
        } else {
            oddOcc[word.toLowerCase()] = 1
        }
    });

    for (const key in oddOcc) {
        
        if (oddOcc[key] % 2 != 0){
            result.push(key)
        }
    }

    console.log(result.join(" "))

}

oddExtract('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddExtract('Cake IS SWEET is Soft CAKE sweet Food')

