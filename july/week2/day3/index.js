const express=require("express")
const connectDB=require("./db")

const app=express()

const router=express.Router()

connectDB()

const port=8080;

const validation=(req,res,next)=>{
    console.log("validation start")
    next()
}

const auth=(req,res,next)=>{
    console.log("authentication start")
    next()
}

// app.use(validation)
// app.use(auth)
// app.get("/",(req,res)=>{
//     res.send("Get method called ")
// })

// app.post("/user",(req,res)=>{
//     res.send("Post method called ")
// })

app.use("/api",router)

router.get("/",validation,auth,(req,res)=>{
    res.send("Get method called ")
})

router.post("/user",validation,auth,(req,res)=>{
    res.send("Post method called ")
})

app.listen(port,(req,res)=>{
    console.log("Server is running on the port ",port)
})