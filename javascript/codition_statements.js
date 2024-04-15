let age = parseInt(prompt("Enter the user's age: "));

if (age < 18) {
    console.log("You can't drive because you are a minor yet.");
} else if (age >= 18 && age < 45) {
    console.log("You can drive but a driver's license is mandatory.");
} else if (age >= 45 && age < 60) {
    console.log("You can drive but need to reissue your driver's license.");
} else if (age >= 60) {
    console.log("You can't drive.");
} else {
    console.log("INVALID CHOICE");
}
