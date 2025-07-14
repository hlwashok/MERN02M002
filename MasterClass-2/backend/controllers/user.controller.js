const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")
exports.Registration = async (req, res) => {
    try {
        const { fullName, email, password } = req.body

        if (!fullName || !email || !password) {
            return res.send({ status: false, message: "All fields are mandatory, so fill all deatils." })
        }

        const existUser = await User.find({ email })

        if (existUser?.length > 0) {
            return res.send({ status: false, message: "Already user exists." })
        }

        bcrypt.hash(password, 10, async function (err, hash) {

            if (err) {
                return res.send({
                    status: false,
                    message: "Issue in hash password, Register failed"
                })
            }
            // Store hash in your password DB.

            const user = new User({
                fullName,
                email,
                password: hash,
            })

            const result = await user.save()

            res.send({ status: true, message: "Registered Successfully", user: result })
            //    res.send(result)
        })

    }catch(er){
        console.log(err)
    }
}

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send({ status: false, message: "Please fill all the fields" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.send({ status: false, message: "User not found" });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.send({ status: false, message: "Wrong password" });
      }

      const secret = process.env.jwt_secret;

      const token = jwt.sign({ user }, secret, { expiresIn: "1h" });

      return res.send({ status: true, message: "Login Successful",token,user });

      res.send(token);
    });
  } catch (err) {
    res.send({ status: false, message: "Login failed" });
    console.log(err);
  }
};

exports.GetAllUser = async (req,res) => {
    try{
        const users=await User.find()
        if(users?.length > 0){
            return res.send({ status: true, 
                message: "Users data get Successful",
                users,
             });
        } else{
            return res.send({ status: true, message: "No users found" });
        }
        // res.send(users)
    }catch(err) {
        console.log(err)
        res.send({ status: false, message: "Can't get User",err });
    }
}