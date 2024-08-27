const palindromes = function (arr) {

    // SHOULD USE FILTER INSTEAD TO FILTER OUT UNKNOWNS!!!!!!! -WE ONLY WANT ALPHANUMERICALSSSSSSSSS
    const regex = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\,\.\ ]/g;

    arr = arr.toLowerCase();
    arr = arr.replaceAll(regex,"");
    arrWord = arr.split("");
    let palindrome = "";
    for (let i = (arrWord.length - 1); i >= 0; i--) {
        palindrome += arrWord[i];
    }
    return arr === palindrome;
};

// Do not edit below this line
module.exports = palindromes;
