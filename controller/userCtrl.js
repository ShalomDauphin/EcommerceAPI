const User = require('../models/userModel');
const asyncHandler = require("express-async-handler");
const { generateToken } = require('../config/jwtToken');
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
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser.mobile,
            token: generateToken(findUser?._id)
        }
        )
    } else {
        throw new Error("Invalid Credentials!")
    }
    console.log(email, password)
})

// get all users
const getallUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }
})

const getoneUser = asyncHandler(async (req, res) => {
    const {id} = req.params
    try {
        const getaUser = await User.findById(id )
        
        res.json(getaUser)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteaUser = asyncHandler(async (req, res) => {
    const {id} = req.params
    try {
        const deleteaUser = await User.findByIdAndDelete(id  )
            res.json({
                msg:"This User has been Deleted Successfully!",
                data: deleteaUser,
        })
    } catch (error) {
        throw new Error(error)
    }
})

const updateaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updateaUser = await User.findByIdAndUpdate(
            id,
            {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        },
            {
                success: true
            }
        )
        res.json(updateaUser)
    } catch (error) {
        throw new Error(error)
    }
})
module.exports ={createUser, loginUser, getallUser,getoneUser,deleteaUser,updateaUser}