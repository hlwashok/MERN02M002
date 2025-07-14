const mongoose=require("mongoose")

const connectDB= async()=> {
    try{
        const connection=mongoose.connect("mongodb://127.0.0.1:27017/MyDataBase")
        console.log("MongoDB connected")

        // userModel.insertOne({name:"Subhransu",age:25,email:"spal@gmail.com",password:"54646"});
    //     const user=new userModel({
    //     name:"bnk",
    //     age:19,
    //     email:"nmg@gmail.com",
    //     password:"12346"
    //   })

    const data=await userModel.find()
    console.log(data)
    
    //   await user.save()
         console.log("data saved")
    } catch (error) {
        console.log("Error",error)
    }
}

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel

module.exports=connectDB