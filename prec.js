const {createServer} = require('http') ; 
createServer((req,res)=>{
    if(req.url=='/')
    {
        res.end('This is default page.') ; 
    }
    else if(req.url=='/home')
    {
        res.end('This is home page.') ; 
    }
    else if(req.url=='/about')
    {
        res.end('This is about page.') ; 
    }
    else {
        res.end(`<h1>Ooops!</h1>
        <p>we do not get the page</p>
        <a href="/home">Back to home page</a>`) ; 
    }
}).listen(5000,()=>{
    console.log("Server is running on port 5000...............") ; 
})