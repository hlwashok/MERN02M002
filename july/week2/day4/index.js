const express=require("express");
const dotenv=require("dotenv");
const connectionDB=require("./DBConnection/db")
const 

dotenv.config()

const app=express();

connectionDB()

app.use(express.json)

const port=process.env.PORT;

app.use("/api",router)

app.listen(port,(req,res)=>{
    console.log("my server is running on the port",port);
    
    
})