// Acquires the user's string from the app page and handles the data flow
function getString() {

    let stringVal = document.getElementById("userString").value.toLowerCase();
    let isWord = true;

    // Checks if only a single word is entered
    for (let index = 0; index < stringVal.length; index++) {

        if (stringVal[index] == " ") {
            isWord = false;
            alert("Error: Only enter a single word to be checked!");
            break;
        }
    }

    // Checks to see if an integer value was given
    if (Number.isInteger(parseInt(stringVal))) {
        isWord = false;
        alert("Error: No integer values allowed!")
    }

    // Passes the input value onto the other functions
    if (isWord) {
        let revString = checkPalindrome(stringVal);
        displayResults(revString, stringVal);
    }
}

// Checks if the user's string is a palindrome
function checkPalindrome(stringVal) {

    let revString = [];

    for (let index = stringVal.length - 1; index >= 0; index--) {
        revString += stringVal[index];
    }

    return revString;
}

// Displays to the user if their word was a palindrome
function displayResults(revString, origVal) {

    if (revString == origVal) {
        document.getElementById("results").innerHTML = `Reversed result: ${revString} <br>${origVal} is a palindrome`;
    } else {
        document.getElementById("results").innerHTML = `Reversed result: ${revString} <br>${origVal} is not a palindrome`;
    }
}