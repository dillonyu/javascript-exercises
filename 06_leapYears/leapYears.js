const leapYears = function(year) {
    if (!(year % 4)) {
        if (year % 100) {
            return true;
        }
        return !(year % 400);
    }
    return false;
    // return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0); // alt
};

// Do not edit below this line
module.exports = leapYears;
