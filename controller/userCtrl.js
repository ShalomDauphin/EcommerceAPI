const User = require('../models/userModel');
const asyncHandler = require("express-async-handler")

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email });

    if (!findUser) {
        //create a new user
        const newUser = await User.create(req.body);
        res.json(newUser)
    } else {
        //User already registered
throw new Error('User already Exists')
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser && await findUser.isPasswordMatched(password)) {
        res.json(findUser)
    } else {
        throw new Error("Invalid Credentials!")
    }
    console.log(email, password)
})
module.exports ={createUser, loginUser}