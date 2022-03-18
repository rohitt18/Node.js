// // // Modules
// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names'); // OR
// const { john, peter } = require("./04-names") // if using this, remove names.
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade');
sayHi("rohit");
sayHi(names.john);
sayHi(names.peter);

// We can have separate files for different functions/variables
// And ofc we would have smaller files & more structure to our application
// And that is exactly what the modules allow us to do.
