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

// Do not edit below this line
module.exports = sumAll;
