const leapYears = function(year) {
    if (!(year % 4)) {
        if (year % 100) {
            return true;
        }
        return !(year % 400);
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
