const http=require("http")

const MyServer= http.createServer((req,res)=>{
    console.log("Server is running on Port 8000")
    console.log(req.url)
    res.end("Response send")
})

MyServer.listen(8000)