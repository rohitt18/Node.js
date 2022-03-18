const { readFile, writeFile } = require("fs");

// And the way the async method works is we need to provide a callback & if you're familiar with callback
// essentially it means that we run that callback when we're done just like addEventListener on a button
// remember we go with addEventListener we add whatever the event ofc with the button that would be a click event
// and then pass in the callback func & that callback func will run every time we click on a button..
// so this is the same thing.
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        console.log("done with this task");
    });
  });
});
console.log("starting the next one");



// this is the famous callback hell & in the next file we will get a brief description of what are the differences 
// between the async/non-blocking approach & the sync/blocking approach

// As well as what are the alternatives to this callback hell
// alternatives are using promises as well as async await
// the best way is to use async await

// hopefully you understand that when we were talking about reading the file as well as writing the file 
// it is an example of some kind of task that would take a long time now for the remainder of the course 
// mostly it's going to be reading file from the database & writing to the database and that sort of thing

// you can use callbacks but the code is going to be messy