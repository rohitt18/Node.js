// Allows us to set up a web server

const http = require("http");

// both of these parameters (req & res) are objects since they're parameters you can call it whatever you want
// but a common practice is calling them req,res
// Here, req represents the incoming request so imagine a client is requesting your webpage from a web-browser
// so you'll have info about the method & all kinds of useful stuff in that request object.
// And the res is what we're sending back
const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     // res.write("Welcome to our home page");
  //     res.end();
  //     // or you can directly write res.end("Welcome to our home page")
  //   }
  //   if (req.url === "/about") {
  //     res.end("Here is the about section");
  //   }
  //   res.end(`<h1>Oops!</h1>
  //     <p>We cant find the page you're looking for</p>
  //     <a href = "/">back home</a>`);
  // });

  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
    // res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`);
  }
});

server.listen(5000);

// The req is a giant object with bunch of useful info, now what we're looking for is the url property
// because that url property is going to tell us well what address client is requesting (i.e, what endpoint the client is requesting)
// homepage - "/"
// about page - "/about"










// GeeksForGeeks ka syntax http ke liye =>
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World!');
//     res.end();
//   }).listen(8080);
