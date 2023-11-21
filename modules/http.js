const http = require('http');

const server = http.createServer((request, response) => {
    // write code needs to run when someone hits the endpoint
    console.log("running code here....");
    console.log("method", request.method);
    response.write("Write response in the frontend");
    response.end();
})
const port = 3000
server.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})
