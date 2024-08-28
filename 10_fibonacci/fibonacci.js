const fibonacci = function (n) {
    n = +n;
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;

    let arr = [1, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[n - 1]
};

// Do not edit below this line
module.exports = fibonacci;
