var PlayersCollection = require("./playersCollection.js");

var x = new PlayersCollection();
x.push({name: "Aboubakar", age: 24, position: "S"});
x.push({name: "Casillas", age: 34, position: "G"});

console.log(JSON.stringify(x));
x.sortByKey("position")
console.log(JSON.stringify(x));
