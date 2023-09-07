const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to my Homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!!</h1>
        <p>We can't seem to find the page
        <a href = "/">Back home</a>
    `)
})
server.listen(5000)

//req represents the incoming request. Eg: Client requests from a web browser your webpage then we'll have information regarding method(like GET, POST etc) and other stuff using the req parameter
