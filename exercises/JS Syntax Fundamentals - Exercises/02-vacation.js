function vacationCost(count, group, day) {

    let cost;

    if (group === "Students") {

        if (day === "Friday") {
            cost = count * 8.45;
        } else if (day === "Saturday") {
            cost = count * 9.80;
        } else if (day === "Sunday") {
            cost = count * 10.46;
        }

        if (count >= 30) {
            cost -= cost * 0.15;
        }

    } else if (group === "Business") {

        if (count >= 100) {
            count -= 10;
        }

        if (day === "Friday") {
            cost = count * 10.90;
        } else if (day === "Saturday") {
            cost = count * 15.60;
        } else if (day === "Sunday") {
            cost = count * 16;
        }

    } else if (group === "Regular") {

        if (day === "Friday") {
            cost = count * 15;
        } else if (day === "Saturday") {
            cost = count * 20;
        } else if (day === "Sunday") {
            cost = count * 22.50;
        }

        if (count >= 10 && count <= 20) {
            cost -= cost * 0.05;
        }
    }

    console.log(`Total price: ${cost.toFixed(2)}`);
}

vacationCost(40,
    "Regular",
    "Saturday")