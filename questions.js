


//Complete the function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

// EXAMPLES:
// (A) "the-stealth-warrior" gets converted to "theStealthWarrior"
// (B) "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

let word = "the-winter-soldier";
function tocamelcase(str) {
     let dasplit = word.split(/[-_]/);
     let casestr = dasplit[0];
for (let i = 0; i < dasplit.length; i++) {
    casestr += dasplit[i].charAt(0).toUpperCase() + dasplit[i];
}
return casestr;
  }
console.log(tocamelcase(word.join("")));
// tocamelcase(word)
 



//switchChar is a function that helps children in swapping values to return a new word
// a word is a set of alphabets that obviously must not be a dictionary word the children are offered three inputs:
// inputChar: cade
// actualChar: abcdefgh  (is a set of non-repeating alpha-characters)
// changeChar: grdwqsdr

// switchChar(inputChar, actualChar, changeChar) => dgwq

// the result for this is => "dgwq"

// you are to write a function that takes these values as arguments and return the result only if:

// 1) actualChar and changeChar are of the same length,
// 2) characters in actualChar are not repeated,
// 3) the length of inputChar is not longer than the length of actualChar
// 4) the characters in inputChar are contained in actualChar

// if none of this conditions are met, here are the returned values

// 1) actualChar and changeChar are not the same length returns => "Length mismatch"
// 2) characters in actualChar are repeated returns => 'Repeated value'
// 3) the length of inputChar is longer than the length of actualChar returns => -1
// 4) the characters in inputChar are not contained in actualChar -1


// // NOTE:
// actualChar is a set of none repeating characters of length (0 to N)
// inputChar is a set of characters of length (0 to N-1)
// changeChar is a set of characters of length (length of actualChar)
// unmet conditions must return values


// // examples:
// switchChar('decagon', 'lmnbvcxzasdfghjktyrueiwoqp', 'zdewsaqxcfrtgvbhyujnmkilop') => "rmacgle
// // switchChar('we', 'wkeap', 'mgren')​​​ => "mr"
function switchChar(inputChar, actualChar, changeChar) {
    if (actualChar.length != changeChar) {
        return "length mismatch";
    }


    const newactual = new Set(actualChar);
    if (newactual.size != actualChar.length) {
        return "Repeated Value";
    }


    if (inputChar.length > actualChar.length) {
        return -1;
    }

    for (const char of inputChar) {
        if (!actualChar.includes(char)) {
            return -1;
        }
    }

    let result = "";
    for (const char of inputChar) {
        const index = actualChar.indexOf(char);
        result += changeChar[index];
    }
    return result;
}