// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Create string variables for each of the character types.
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChars = "!@#$%^&*()";
var charSet = "";

// Get input from the user and validate that they have entered it correctly. Then return that input as an object.
var getInput = function () {
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
    alert("Please choose at least one character type to use.");
    getInput();
  }
  return {
    length: length,
    lower: lower,
    upper: upper,
    number: number,
    special: special
  };
}

// Create a character set based on the user's choices of character types to include.
var getCharSet = function (userInput) {
  var totalCharSet = charSet;
  if (userInput.lower === "Y") {
    totalCharSet = charSet.concat(lowerLetters);
  } 
  if (userInput.upper === "Y") {
    totalCharSet = totalCharSet.concat(upperLetters);
  }
  if (userInput.number === "Y") {
    totalCharSet = totalCharSet.concat(numbers);
  }
  if (userInput.special === "Y") {
    totalCharSet = totalCharSet.concat(specialChars);
  }
  return totalCharSet;
}

// Generate password: get user input, use that input to create a character set, 
// then choose random characters from that character set until the desired length is reached.
function generatePassword() {
  var userInput = getInput();
  var totalCharSet = getCharSet(userInput);
  var generatedPass = "";
  for (let i = 0; i < userInput.length; i++) {
    var nextChar = totalCharSet.charAt(Math.floor(Math.random() * totalCharSet.length));
    generatedPass = generatedPass.concat(nextChar);
  }
  return generatedPass;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
