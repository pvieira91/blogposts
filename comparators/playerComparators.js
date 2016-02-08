var playerComparators = {
  byPosition: function(p1, p2) {
    var positions = {
      "G": 1,
      "D": 2,
      "M": 3,
      "S": 4
    };
    p1 = positions[p1.position] || 0;
    p2 = positions[p2.position] || 0;
    return p1 - p2;
  }
};

module.exports = playerComparators;
