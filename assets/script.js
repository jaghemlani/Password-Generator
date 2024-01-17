
const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const number = ["!","@","#","$","%","^","&","*","_","+","-","?"];
const symbol = ["0","1","2","3","4","5","6","7","8","9"];

const allChars = upperCase + lowerCase + number + symbol;

document.getElementById("generate").addEventListener("click", createPassword);



function createPassword(){
    let passwords = "";
    passwords += upperCase[Math.floor(Math.random() * upperCase.length)];
    passwords += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passwords += number[Math.floor(Math.random() * number.length)];
    passwords += symbol[Math.floor(Math.random() * symbol.length)];


    while(length > passwords.length){
        passwords += allChars[Math.floor(Math.random() * allChars.length)];
    }

   passwordBox.value = passwords;
    
}


