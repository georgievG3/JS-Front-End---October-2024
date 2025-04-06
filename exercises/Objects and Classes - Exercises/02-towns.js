function towns(townsArray) {

    townsArray.forEach(town => {
        let townInfo = town.split(" | ")
        console.log({'town': townInfo[0], 'latitude': Number(townInfo[1]).toFixed(2), 'longitude': Number(townInfo[2]).toFixed(2)})
    });

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )