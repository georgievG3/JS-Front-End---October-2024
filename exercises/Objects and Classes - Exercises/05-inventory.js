function hero(heroesArray) {

    let heroesObject = {}
    
    heroesArray.forEach(elements => {

        let [hero, level, ...items] = elements.split(" / ")

        heroesObject[Number(level)] = [hero, items]
        
    });

    Object.keys(heroesObject).sort()
    
    for (const key in heroesObject) {
        console.log(`Hero: ${heroesObject[key][0]}\nlevel => ${key}\nitems => ${heroesObject[key][1].join(", ")}`)
    }
}

hero([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
    'Isacc / 26 / Apple, GravityGun'
    ])