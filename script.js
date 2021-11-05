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
    // this checks to see if everything is correct if not reruns the function(passwordMakeup)
    if (userConfirm === false) generatePassword();
    if (userConfirm === true) alert("Great let's move on");
    // this next section gets you to chose how many characters you
    //would like in the password.letters and values < 8 or > 128 will
    //cause an error msg and you will be sent back to the start.
    if (
      (pwdLength = Number(
        prompt(
          `How long would you like your password to be?
          
Please choose between 8 and 128 characters`
        )
      ))
    );
    if (Number.isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
      alert(`You have made an invalid selection! 
      
Please Try again.`);
      if (--tryOnceMore > 0) generatePassword();
    }
    // variables to check to see which option values are present in the
    var resultCh = arrayFiltered.some((e) => e === 1);
    var resultNum = arrayFiltered.some((e) => e === 2);
    var resultLo = arrayFiltered.some((e) => e === 3);
    var resultUp = arrayFiltered.some((e) => e === 4);

    console.log("picked", charChoice);
    console.log(typeof charChoice);
    console.log("attempts", tryOnceMore);
    console.log(typeof tryOnceMore);
    console.log("user choice", digits);
    console.log(typeof digits);
    console.log("user choice after", userSelection);
    console.log(typeof userSelection);
    console.log("filitered choice", arrayFiltered);
    console.log(typeof arrayFiltered);
    console.log("true or false", userConfirm);
    console.log(typeof userConfirm);
    console.log("selected length", pwdLength);
    console.log(typeof pwdLength);
    console.log("character result", resultCh);
    console.log(typeof resultCh);
    console.log("number result", resultNum);
    console.log("lower result", resultLo);
    console.log("upper result", resultUp);
  }
}

generatePassword();
