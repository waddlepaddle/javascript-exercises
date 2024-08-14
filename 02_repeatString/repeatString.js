const repeatString = function(word, times) {
    let string = "";
    for (let i = 0; i < times; i++) {
        string += String(word);
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
