function solve(text) {
    const regex = /[A-Z][a-z]*/g;
    const matches = [...text.matchAll(regex)];
    
    const words = matches.map(match => match[0]);
    console.log(words.join(", "));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')