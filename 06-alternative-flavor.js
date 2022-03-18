

// you already know this - 

// const items = ["item1","item2"];
// const person = {
//     name: "bob",
// }
// module.exports = { items, person };

// OR alternative flavor - 

module.exports.items = ["item1", "item2"];
const person = {
    name: "bob",
}
module.exports.singlePerson = person;

