var tryOnceMore = 4;
// Start Password variable values:
// prettier-ignore
// Special characters
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// prettier-ignore
// Numeric characters
var numberArr = [1,2,3,4,5,6,7,8,9,0];
// prettier-ignore
// Alphabetical characters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// prettier-ignore
// Space is for the Uppercase conversion
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//prettier-ignore
var getBtn = document.querySelector("#generate");
//onlick start password function and then replace the placeholder with final password.
getBtn.addEventListener("click", function () {
  finalPwd = generatePassword();
  document.getElementById("password").placeholder = finalPwd;
});
//start of function to generate a random password from the the given user response and arrays.
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
      `From the list of options you chose ${arrayFiltered}
      
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

    // For all options chosen.
    if (resultCh && resultNum && resultLo && resultUp) {
      pwdArray = character.concat(numberArr, upper, lower);
    }
    // For three options picked
    else if (resultCh && resultNum && resultLo) {
      pwdArray = character.concat(numberArr, lower);
    } else if (resultCh && resultNum && resultUp) {
      pwdArray = character.concat(numberArr, upper);
    } else if (resultCh && resultUp && resultLo) {
      pwdArray = character.concat(upper, lower);
    } else if (resultNum && resultUp && resultLo) {
      pwdArray = numberArr.concat(upper, lower);
    }
    // For two options picked.
    else if (resultCh && resultNum) {
      pwdArray = character.concat(numberArr);
    } else if (resultCh && resultUp) {
      pwdArray = character.concat(upper);
    } else if (resultCh && resultUp) {
      pwdArray = character.concat(lower);
    } else if (resultUp && resultNum) {
      pwdArray = upper.concat(numberArr);
    } else if (resultUp && resultLo) {
      pwdArray = upper.concat(lower);
    } else if (resultNum && resultLo) {
      pwdArray = numberArr.concat(lower);
    }
    // For just one option picked.
    else if (resultCh) {
      pwdArray = character;
    } else if (resultNum) {
      pwdArray = numberArr;
    } else if (resultLo) {
      pwdArray = lower;
    } else if (resultUp) {
      pwdArray = upper;
    }

    // This next part checks the chosen password length (pwdLength) and looks in the (pwdArray)
    //where the chosen arrays have been merged and then randomly selects a letter and then pushes
    //it to the(randomPwd) array, it will continue adding a characters until the chosen number has been reached.
    //it is then pushed back into a pwd array seperated.
    var pwd = [];

    for (var i = 0; i < pwdLength; i++) {
      pwd.push(
        (randomPwd = pwdArray[Math.floor(Math.random() * pwdArray.length)])
      );
    }
    //this variable joins the password back together.
    var finalPwd = pwd.join("");

    function pwdShow(finalPwd) {
      document.getElementById("password").textContent = finalPwd;
    }
    pwdShow(finalPwd);
    return finalPwd;
  }
}

//following copy function was found on internet resource sites
//MDN, W3Schools, i added in the chosen password to the alert box.
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copied();
});

function copied() {
  document.getElementById("password").select();
  document.execCommand("copy");
  alert(`Your new ${pwdLength} character password shown below has been
  copied to the clipboard. 
  
  ${finalPwd}`);
}
