var genericComparators = {
  asString: function(a, b) {
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    return 0;
  },
  asNumber: function(a, b) {
    return a - b;
  }
};

module.exports = genericComparators;

