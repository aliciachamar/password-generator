// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function getInput() {
  var length = prompt("Please choose a length for your password between 8 and 128 characters.");
  while (length < 8 || length > 128) {
    var length = prompt("That is not a valid entry. Please choose a length for your password between 8 and 128 characters.");
  }
  var lower = prompt("Use lowercase letters? Enter 'Y' for yes and 'N' for no.");
  while (lower !== 'Y' && lower !== "N") {
    var lower = prompt("That is not a valid entry. Use lowercase letters? Enter 'Y' for yes and 'N' for no.");
  }
  var upper = prompt("Use uppercase letters? Enter 'Y' for yes and 'N' for no.");
  while (upper !== 'Y' && upper !== "N") {
    var upper = prompt("That is not a valid entry. Use uppercase letters? Enter 'Y' for yes and 'N' for no.");
  }
  var number = prompt("Use numbers? Enter 'Y' for yes and 'N' for no.");
  while (number !== 'Y' && number !== "N") {
    var number = prompt("That is not a valid entry. Use numbers? Enter 'Y' for yes and 'N' for no.");
  }
  var special = prompt("Use special characters? Enter 'Y' for yes and 'N' for no.");
  while (special !== 'Y' && special !== "N") {
    var special = prompt("That is not a valid entry. Use special characters? Enter 'Y' for yes and 'N' for no.");
  } if (lower === "N" && upper === "N" && number === "N" && special === "N") {
    confirm("Please choose at least one character type to use.");
    getInput();
  }
  return {
    length: length,
    lower: lower,
    upper: upper,
    number: number,
    special: special
  }
}

function generatePassword() {
  const userInput = getInput();
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
