function movies(moviesArray) {

    moviesObject = {}

    moviesArray.forEach(element => {

        if (element.includes("addMovie")){
            let movieName = element.split(" ").slice(1).join(" ")
            moviesObject[movieName] = {"name": movieName}
        } else if (element.includes("directedBy")){
            let elements = element.split(" directedBy ")
            movieName = elements[0]
            director = elements[1]

            if (moviesObject.hasOwnProperty(movieName)) {
                moviesObject[movieName]["director"] = director
            }
        
        } else if (element.includes("onDate")) {
            let elements = element.split(" onDate ")
            movieName = elements[0]
            date = elements[1]

            if (moviesObject.hasOwnProperty(movieName)) {
                moviesObject[movieName]["date"] = date
            }
        }
    });

    for (const key in moviesObject) {
        if (moviesObject[key].hasOwnProperty("name") && moviesObject[key].hasOwnProperty("director") && moviesObject[key].hasOwnProperty("date")){
            console.log(JSON.stringify(moviesObject[key]))
        }
    }

}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])