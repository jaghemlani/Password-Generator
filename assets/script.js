
let generateBtn = document.querySelector("#generate");

// four Arrays for character types
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "1234567890"
let symbols = "!@#$%^&*-+"

// Function to generate password with questions requarding user input for what characcters they want to use.
function generatePassword() {
  let finalPass = [];

  // Prompt the user for desired password length
  let passwordLength = parseInt(prompt("Enter the desired length of Password (between 8 and 128):"));

  // Validate the password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return "";
  }

  let isLowercase = confirm("Do you want lowercase letters?");
  let isUppercase = confirm("Do you want uppercase letters?");
  let isNumber = confirm("Do you want numbers?");
  let isSymbols = confirm("Do you want special chracters?");

  if (!isLowercase && !isUppercase && !isNumber && !isSymbols) {
    alert("Please select at least one character type.");
    return "";
  }

  // Loop to generate the prefences and length
  for (var i = 0; i < passwordLength; i++) {
    if (isLowercase && finalPass.length < passwordLength) {
      let randomCharacter = Math.floor(Math.random() * 26);
      finalPass.push(lowercase[randomCharacter]);
    }

    if (isUppercase && finalPass.length < passwordLength) {
      let randomCharacter = Math.floor(Math.random() * 26);
      finalPass.push(uppercase[randomCharacter]);
    }

    if (isNumber && finalPass.length < passwordLength) {
      let randomCharacter = Math.floor(Math.random() * 10);
      finalPass.push(numbers[randomCharacter]);
    }

    if (isSymbols && finalPass.length < passwordLength) {
      let randomCharacter = Math.floor(Math.random() * symbols.length);
      finalPass.push(symbols[randomCharacter]);
    }
  }

  // Shuffle the final array
  finalPass = finalPass.sort(() => Math.random() - 0.5);

  return finalPass.join("");
}

// Write password input box
function createPassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click",createPassword);


