var tryOnceMore = 2;
// Start Password variable values:
// prettier-ignore
// Special characters
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// prettier-ignore
// Numeric characters
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// prettier-ignore
// Alphabetical characters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// prettier-ignore
// Space is for the Uppercase conversion
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//prettier-ignore
var getBtn = document.querySelector("#generate");

function generatePassword() {
  var charChoice = Number(
    prompt(`Please choose from the following list of options. You can choose as many as you like.
      
               Choose 1: for Characters.
               Choose 2: for Numbers.
               Choose 3: for Lowercase.
               Choose 4: for Uppercase.
      
Example: 1 = Just Characters, 1234 = all options.`)
  );
  //this is checking the choice is a number not a letter.
  if (isNaN(charChoice)) {
    alert(
      `Sorry something has gone wrong! Please choose 1,2,3 or 4 or any combination`
    );
    if (--tryOnceMore > 0) generatePassword();
  }
}
