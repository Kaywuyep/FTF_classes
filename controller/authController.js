// const express = require('express')
const bcrypt = require('bcryptjs') // hashing passwords safely
const jwt = require('jsonwebtoken') //creating login token
const User = require('../model/userModel')

const JWT_SECRET = process.env.JWT_SECRET

// registration route
//Post /api/auth/register

const register = async (req, res) => {
    try {
        // get required data body
        const { fullName, email, password } = req.body
        // validation or required fields
        if (!fullName || !email || !password) {
            return res.status(400).json({message: "All Fields are Required"})
        }

        // check if email exist
        // const existingUser = users.find((user) => user.email === email)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({message: "User already Exist"})
        }

        // hash password
        // 10 is a saltround, it's high, its secure but slow
        const hashPassword = await bcrypt.hash(password, 10)

        // create a user
        // const newUser = {
        //     id: users.length + 1,
        //     fullName,
        //     email,
        //     password: hashPassword // stored hashed value
        // }
        const newUser = await User.create({
            fullName,
            email,
            password: hashPassword
        })
        // users.push(newUser)
        
        // return a success  response
        res.status(201).json({
            message: "Registered Successfully",
            user: {
                id: newUser._id,        // MongoDB uses _id, not id
                fullName: newUser.fullName,
                email: newUser.email
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal error" })
    }
}

// login
// Post /api/auth/login

const login = async (req, res, next) => {
    try {
        // get request body
        const { email, password } = req.body

        // validate both field exist
        if ( !email || !password ) {
            res.status(400).json({message: "Email and Password Required"})
        }

        // find user in our database
        // const user = users.find((user) => user.email === email)
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).json({ message: "User not found" })
        }

        // compare password with hash password
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            res.status(401).json({message: "Incorrect Password"})
        }

        // create a JWT token
        const token = jwt.sign(
            {id: user.id, email: user.email},
            JWT_SECRET,
            { expiresIn: "1h" }
        )
        // console.log(token)
        // login user/ send response message
        res.status(200).json({
            message: "Login successful",
            token
        })
    } catch (error) {
        res.status(500).json({message: "Internal Sever Error"})
    }
}

module.exports = { register, login };