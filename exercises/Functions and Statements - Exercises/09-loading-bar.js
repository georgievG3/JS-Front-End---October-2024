function loadingBar (number) {

    if (number == 100) {
        console.log(`100% Complete!\n[%%%%%%%%%%]`)
    } else {
        const bar = number => `${number}%`+" "+(`[${"%".repeat(number / 10)}${".".repeat(10 - (number / 10))}]`)

        console.log(`${bar(number)}\nStill loading...`)
    }

}

loadingBar(30)