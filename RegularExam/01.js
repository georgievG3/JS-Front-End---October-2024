function solve(input){

    const farmersNumber = Number(input.shift())
    const farmersObject = {}

    for (let i = 0; i < farmersNumber; i++) {
        
        const farmerLine = input.shift().split(" ")
        const farmer = farmerLine.shift()
        const famerWorkArea = farmerLine.shift()
        const farmerTasks = farmerLine.shift().split(",")


        farmersObject[farmer] = [famerWorkArea, farmerTasks]

    }

    input.forEach(element => {
        
        const lineEl = element.split(" / ")
        const command = lineEl.shift()
        const name = lineEl.shift()
        

        switch (command) {

            case "Execute":{

                const place = lineEl.shift()
                const task = lineEl.shift()

                if (farmersObject[name][0] === place && farmersObject[name][1].includes(task)){
                    console.log(`${name} has executed the task: ${task}!`)
                } else {
                    console.log(`${name} cannot execute the task: ${task}.`)
                }

                break
            }

            case "Change Area":{

                const place = lineEl.shift()
                farmersObject[name][0] = place

                console.log(`${name} has changed their work area to: ${place}`)

                break
            }

            case "Learn Task":{

                const newTask = lineEl.shift()

                if (farmersObject[name][1].includes(newTask)){
                    console.log(`${name} already knows how to perform ${newTask}.`)
                } else {
                    farmersObject[name][1].push(newTask)
                    console.log(`${name} has learned a new task: ${newTask}.`)
                }

                break
            }
        }
    });

    for (const [farmer, details] of Object.entries(farmersObject)) {
        const [workArea, tasks] = details;
        const sortedTasks = tasks.sort();
        console.log(`Farmer: ${farmer}, Area: ${workArea}, Tasks: ${sortedTasks.join(', ')}`);
    }

}

solve([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
  ])