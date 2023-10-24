// <-- set Up
const http = require("http");
const fs = require("fs");
const port = 3000; 

// <-- The server
const server = http.createServer( (req, res) => {
  res.writeHead(200 , { "Content-Type":"text/html" });
  fs.readFile("index.html" , (error, data) => {
    
    // <-- If the file can't be found
    if(error){
      res.writeHead(404);
      res.write("FiLe NoT FoUnD!");
    } else {
      res.write(data);
    }
    res.end();
  })
})


// <-- Check error in the server
server.listen(port , (error) => {
  if(error){
    console.log(`Something wnet wrong ${error}`);
  } else {
    console.log(`Server is RUNNING on port ${port}`);
  }
})
