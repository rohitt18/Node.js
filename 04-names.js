// local (that means this is only for this file)
const secret = 'SUPER SECRET'
// share (i mean we can access these from anywhere in the application )
const john = 'john'
const peter = 'peter'

console.log(module); // module is an object itself and inside it there is another object called exports
// whatever im going to dump in that exports, im going to be able to access anywhere in the application.

module.exports = { john, peter } // when you have to export multiple values.
 
