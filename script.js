// Assignment Code



// Function to generate combination of password. I got some help from https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/  

function generatePassword() { 
    var password = ""; 
    //Users accept the password requirements indicated by confirm method. 
    var passwordLength = prompt("Your secure password should be 8 characters minimum and 128 characters max. Type your password lenghth, and then, click OK to confirm")
    var upperCase = confirm("Do you want to include uppercase letters?") 
    var passwordNumbers = confirm("Do you want to include numbers in your password?")
    var specialCharacters = confirm("Do you want to include special characters in your password?")
    var string = "abcdefghijklmnopqrstuvwxyz";
    /* For an index starting from 1, and smaller & equal to 8, randomStringCharacter variable will be equal to Math.floor(Math.random() * string.length meaning a number between 0-9 will be returned as a result of the Math.floor(Math.random()function multiplied by the string length.*/
    if (specialCharacters) {
        string += "@#$!&#"
    };

    if (upperCase) {
        string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };

    if (passwordNumbers) {
        string += "0123456789"
    }

    for (i = 0; i < passwordLength; i++) { 
        var randomStringCharacter = Math.floor(Math.random() 
                    * string.length); 
        /* Using the addition assignment operator ( += ), a new value is added to the password using the charAt method. charAt returns a character from the index, and in this case, it returns characters from var randomStringCharacter.*/
        password += string.charAt(randomStringCharacter) 
    

} 
    //Return ends the function execution, and the function should give us the following value (password)
    return password; 
} 

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

  // creates a Generate Password button
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 