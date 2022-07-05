const ftoc = function(f) {
  let ans = (f - 32) * 5/9;
  if (ans.toString().indexOf(".") == -1) {
    return ans;
  }
  return +ans.toFixed(1);
  // return Math.round((f - 32) * (5/9) * 10) / 10; // alt
};

const ctof = function(c) {
  let ans = c * 9/5 + 32;
  if (ans.toString().indexOf(".") == -1) {
    return ans;
  }
  return +ans.toFixed(1);
  // return Math.round(((c * 9/5) + 32) * 10) / 10; // alt
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
