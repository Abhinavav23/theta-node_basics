const http = require('http');

const server = http.createServer((req, response) => {
    // write code needs to run when someone hits the endpoint
    console.log("method", req.method);
    if(req.method === "POST"){
        // do something
    } else if(req.method === "GET"){
        // do something else
    }

    console.log("path", req.url);
    if(req.url === "/"){
        response.writeHead(201, {"Content-Type": "text/html"})
        response.write("<h2>Home Data !!</h2>");
    }else if(req.url === "/cart"){
        response.write("cart Data !!");
    }else if(req.url === "/profile"){
        response.writeHead(201, {"Content-Type": "application/json"})
        response.write(JSON.stringify({data: {"name": "abhinav"}}));
    }else{
        response.write("default Data !!");
    }

    response.end();
    
});
const port = 3000
server.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})

// URL
// protocol -> http/https://
// domain --> www.amazon.com / localhost --> 127.0.0.1 --> 0.0.0.0
// port numbers
// params / query params


// headers: {
//     "Content-Type": "application/json"
// }

// if(no%2 === 0){
//     // even
// response.writeHead(200, {"Content-Type": "text/plain"});
// response.write("no is even");
// } else{
//     // odd
// response.writeHead(404, {"Content-Type": "text/plain"});
// response.write("no is even");
// response.write("no is odd");
// }