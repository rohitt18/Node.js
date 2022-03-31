const path = require("path");


// path separator property
console.log(path.sep);
// output : \

// path join method
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
// output : \content\subfolder\test.txt

// what if i only want the last portion
// you can access it through base name method
const base = path.basename(filePath)
console.log(base);
// output : test.txt

// path.resolve for absolute path ***
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute);
// output : C:\Users\rohit\OneDrive\Desktop\node full course\content\subfolder\test.txt
// (why so cool? because it returns an absolute path
// and once in a while in our applications we need to provide that absolute path that's why)
// it accepts a sequence of paths or path segments & resolves it into an absolute path
// if you wonder why would we want that, remember our application is going to run in different environments 
// so ofc the path to some kind of resource is going to be different in my computer in my local machine than for example in heroku // hopefully it is clear!!

