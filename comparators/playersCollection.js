var genericComparators = require("./genericComparators.js");
var playerComparators = require("./playerComparators.js");

function PlayersCollection() {}

PlayersCollection.prototype = Object.create(Array.prototype);
PlayersCollection.prototype.sortByKey = function(key) {
  var comparators = {
    name: genericComparators.asString,
    goals: genericComparators.asNumber,
    position: playerComparators.byPosition
  };
  this.sort(comparators[key]);
};

module.exports = PlayersCollection;

