var numbers = [];

for (var i = 0; i < 5; i++) {
    var input = prompt("Enter a number:");
    var number = parseFloat(input);

    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert("Invalid input. Please enter a valid number.");
        i--; // Decrement i to re-enter the current number
    }
}

console.log("Numbers in reverse order:");

for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
