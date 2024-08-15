const sumAll = function(...numbers) {
    numbers.sort()
    if (numbers[0] < 0 || numbers[1] < 0) return "ERROR";
    if (!Number.isInteger(numbers[0]) || !Number.isInteger(numbers[1])) return "ERROR"; // **I can use Numbers.isInteger even if input is not a number!!
    let sum = 0;
    for (let i = numbers[0]; i <= numbers[1]; i++) {
        sum += i;
    }
    return sum
};

// function isInteger(input) {
//     let isInteger = [];
//     for (let i = 0; i < 2; i++) {
//         if (typeof input[i] != "number") {
//             isInteger.push('false');
//         } else {
//             if (!Number.isInteger(input[i])) {
//                 isInteger.push('false');
//             } else {
//                 isInteger.push('true');
//             }
//         }
//     }
//     return isInteger;
// }

// Do not edit below this line
module.exports = sumAll;
