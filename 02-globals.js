// // // GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// In node, we can interact with the file system something we couldn't do when we used JS in browser.

// we have access to console.log in nodejs
console.log(__dirname)

// we have access to setTimeout & setInterval in nodejs
setInterval(() => {
  console.log('hello world')
}, 1000)