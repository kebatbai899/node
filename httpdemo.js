var http = require('http')
var url = require('url')

http.createServer(function(req, res){
var pathname=url.parse(req.url).pathname
    if(pathname=='/'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end('Welcome to Home Page')
    }
    else if(pathname=='/about'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end('Welcome to About Page')
    }
    else if(pathname=='/redirect'){
        res.writeHead(301, {
            'Location': '/'
        })
        res.end('Welcome to Redirect Page')
    }
    else if(pathname=='/registration'){
        res.writeHead(301, {
            'Content-Type': 'text/plain'
        })
        res.end('Welcome to Registration Page')
    }
    else if(pathname=='/login'){
        res.writeHead(301, {
            'Content-Type': 'text/plain'
        })
        res.end('Welcome to Login Page')
    }
    // res.writeHead(301, {
    //     'Location': 'http://localhost:4200/'
    // })

    // res.end('welcome to my server')

}).listen(3000, "127.0.0.1")
console.log('server is ready')