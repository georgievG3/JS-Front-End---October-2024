function cat(catsArray) {

    class Cat {
    
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }
    

    for (const element of catsArray) {
        let [name, age] = element.split(" ");
        let speakingCat = new Cat(name, age);
        console.log(speakingCat.meow());
    }
}


cat(['Mellow 2', 'Tom 5'])
