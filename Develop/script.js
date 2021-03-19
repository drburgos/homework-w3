// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate random password
function generatePassword() {

  // set variable charLength to identify length of password
  var charLength = window.prompt ("How many characters would you like the password to contain?");

  // if statement: option a) password is < 8 then alert; option b: continue process
  if (charLength < 8) {
    window.alert ("Password length must be at least 8 characters.");

    // calling function generatePassword to start over again.
    generatePassword();
  }  
  
  // continue process: else statement starts selection criteria
    else {

      // first criteria: special characters ok or cancel
      var SpecialCharacters = window.confirm ("Click OK to confirm special characters.");

      // second criteria: numeric characters
      var NumericCharacters = window.confirm ("Click OK to confirm numeric characters.");

      // third criteria: lowercase characters
      var LowercaseCharacters = window.confirm ("Click OK to confirm lowercase characters.");

    }

    // -----------Getting the information to form the password------------------

    // defining varialbes 
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // if statements to change values:

    // if SpecialCharacters is not true, then remove special characters
    if (SpecialCharacters) {
    var strSpecialChar = "!$%&'()*+,-./:;<=>?@[]^_`{|}";
    var values = values.concat(values, strSpecialChar);
    }

    // if NumericCharacters is not true, then remove numbers.
    if (NumericCharacters) {
    var strNumberChar = "123456789";
    var values = values.concat(values, strNumberChar);
    }

    // if LowercaseCharacters is not true, then remove lowercase characters.
    if (!LowercaseCharacters) {
    var strLowerChar = "abcdefghijklmnopqrstuvwxyz"
    var values = values.concat(values, strLowerChar);
    }

    // ------------- Generating the password --------------------

    // proceed with the password by making it a string
    var newPassword = "";

    // define a for loop in order to get random values taking into account past criteria
    for(var i = 0; i < charLength; i++){
   
      // we will change the value of password 
      newPassword = 

      // you need to concatenate the resulting string plus the characters selected randomly

      newPassword + 

      // plus the result of multipling a random decimal between .01 and .99 times the length of the string that is referenced and then round it up to a number so we can use it in the position of the referenced string

      values.charAt(Math.floor(Math.random() * (values.length - 1)));
    }   

    return newPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
