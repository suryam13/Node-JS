// const http = require("http");
import http from "http";
import fs from "fs";
import  url  from "url";

const app = http.createServer((req, res) => {

  const log = `${Date.now()} : New request received on url - ${req.url}\n`;
  console.log(req.url)

  const myUrl = url.parse(req.url,true) //passing true parameter to parse the query parameter also in the form of object 

  if(myUrl.pathname === "/favicon.ico") return res.end()
    //to ignore the by default favicon route  which is been done by the browser

    // console.log(myUrl) // -> gives us an object
    //url -> http://localhost:8000/hareKrishna?name=suryam&age=20

  fs.appendFile("./logFile.txt", log, (err, data) => {
    const defaultName = 'anonymous';

    //here we can define routes too using the req.url with the help of if else 
    if(myUrl.pathname == '/')
        res.end(`hello from the home endpoint` )
    else 
        res.end(`a hello to ${myUrl.query.name || defaultName} from the ${myUrl.pathname} endpoint` )

  });

  //res.end("hello from server");  //there is no res.send() here as we used to have in express  
});

app.listen(8000, () => {
  console.log("sever is running on PORT 8000");
});

/*
In this section,
we created a http server using the http module in the node and logged the details in the file
*/