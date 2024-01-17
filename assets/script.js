var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password")

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var letterBig = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lettersSmall = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var specialCharacters = ["!","@","#","$","%","^","&","*","_","+","-","?"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];
    var choices = [lettersBig, lettersSmall, specialCharacters, numbers];
    var minNum = 8;
    var maxNum = 128;
    var passwordSize = null;
    var useBig, usesmall, useCharacters, useNums = false;
    var passwordTemp = "";
}

for(passwordSize; passwordSize > 0; passwordSize--){
    var randomizer = Math.floor(Math.random() * 4);
    if (randoomizer == 0){
        randomizer2 = Math.floor(Math.random()*lettersBig.length);
        passwordTemp+- lettersBig[randomizer2]
    }
}



do {
    useBig = confirm("does your password need uppercase letters? "OK" for Yes, "cancel" for No");
    useSmall = confirm("does your password need lowercase letters? "OK" for Yes, "cancel" for No");
    useChars = confirm("does your password need special chracters? "OK" for Yes, "cancel" for No");
    useNumbs = confirm("does your password need numbers? "OK" for Yes, "cancel" for No");
}

if ((

))