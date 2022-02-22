// Acquires the user's string from the app page and handles the data flow
function getString() {

    let stringVal = document.getElementById("userString").value.toLowerCase();
    let regex = /^[A-Za-z]+$/; // Used for checking if valid string is given
    let isValid = regex.test(document.getElementById("userString").value);

    // Checks if the user string is valid
    if (!isValid) {
        alert("Error: Only enter letters, no special characters or numbers allowed!")
    }

    // Passes the input value onto the other functions
    if (isValid) {
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