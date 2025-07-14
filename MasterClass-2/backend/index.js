const express =require("express")
const env =require("dotenv")
const DBConnect= require("./config/DBConnect")
const routes = require("./routes/all.routes")
const cors = require('cors')

const app =express()
app.use(cors())
app.use(express.json())
env.config()

DBConnect()
const port=process.env.port

app.get("/", (req,res) =>{
    res.send("Welcome to Library Management System backend")

})

app.use("/api",routes);

app.listen(port, ()=>{
    console.log(`Backend is running on ${port}`)
})