//develop a small game to check whether the number entered byy the usseer is the correct number and asking again and again ehther the number is coorect.
let guess_num = 57;
let user_num = parseInt(prompt("Guess the game number:"));

while (user_num != guess_num) {
    if (user_num > guess_num) {
        alert("Please enter a smaller number.");
    } else {
        alert("Please enter a larger number.");
    }
    user_num = parseInt(prompt("You have entered the wrong number. Guess again:"));
}

console.log("You have entered the right number.");
alert("CONGRATULATIONS! You have entered the right number: " + guess_num);