const ftoc = function(f) {
  let ans = (f - 32) * 5/9;
  if (ans.toString().indexOf(".") == -1) {
    return ans;
  }
  return +ans.toFixed(1);
};

const ctof = function(c) {
  let ans = c * 9/5 + 32;
  if (ans.toString().indexOf(".") == -1) {
    return ans;
  }
  return +ans.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
