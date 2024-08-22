const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product * num);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1;
	for (let i = 1; i <= a; i++) {
    total *= i;
  }
  
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
