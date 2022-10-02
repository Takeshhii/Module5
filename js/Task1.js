let input = prompt("Ведите число или слово");
input = +input;
if (typeof input == "number") {
    if (isNaN(input)) {
        console.log(" Упс, кажется, вы ошиблись")
    } else {
        if (input % 2 === 0) {
            console.log(input + " Это чётное ");
        } else {
            console.log(input + " Это нечётное ");
        }
    }
}