const os = require("os"); 
// // we're not using ./os , so that way node knows that we're looking for the built-in module.
// // we can access the properties by 
// // os.arch
// // os.cpus
// // OR if you want a specific one then you can simply destructure it above const { arch } = require("os");
// // And remember, both of them effectively do the same thing.

// // info about current user
const user = os.userInfo();
console.log(user);

// // method returns the system uptime in seconds
// const user1 = os.uptime();
// console.log(user1);
// OR directly
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);