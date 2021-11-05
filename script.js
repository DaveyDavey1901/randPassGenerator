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
  //this line is to take the options selected by user (charChoice),
  //split them into a string and place in array(userSelection) making sure the new array type is numbers.
  //and then removes duplicated enteries and pushes the unique value to a new array(arrayfiltered)
  //we alos making sure 1 option was picked.

  var digits = charChoice.toString().split("");
  var userSelection = digits.map(Number);

  if (
    (arrayFiltered = [...new Set(userSelection)].filter((n) => n > 0 && n < 5))
  );
  if (arrayFiltered.length < 1) {
    alert(`You need to choose at least 1 of the options.  
    
    Try Again.`);
    if (--tryOnceMore > 0) generatePassword();
    // confirmation box to enourgh your selection is correct.
  } else {
    userConfirm = confirm(
      `From the list of options you chose (${arrayFiltered})
      
Click ok if you're happy with this? or cancel to try again.
      
(1 = Characters | 2 = Numbers | 3 = Lowercase | 4 = Uppercase)`
    );
    console.log(charChoice);
    console.log(tryOnceMore);
    console.log(typeof digits);
    console.log(digits);
    console.log(typeof userSelection);
    console.log(userSelection);
    console.log(typeof arrayFiltered);
    console.log(arrayFiltered);
    console.log(typeof userConfirm);
    console.log(userConfirm);
  }
}
generatePassword();
