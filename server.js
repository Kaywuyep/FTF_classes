require('dotenv').config()   // load env FIRST

const express = require('express')
const authRoute = require('./route/authRoutes')
const connectDB = require('./config/db')

const app = express()

// Connect to MongoDB
connectDB()

const PORT = process.env.PORT || 4000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/auth', authRoute)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})