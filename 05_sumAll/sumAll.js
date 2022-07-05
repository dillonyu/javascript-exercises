const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
        return 'ERROR';
    }

    /* Method 1: Using a formula */
    // return (Math.abs(a - b) + 1)/2 * (a + b);

    /* Method 2: Traditional loop method */
    let index = a;
    let max = b;
    let result = 0;
    if (b < a) {
        index = b;
        max = a;
    }
    for (; index <= max; index++) {
        result += index;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
