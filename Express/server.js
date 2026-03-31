require('dotenv').config()   // load env FIRST

const express = require('express')
const path = require('path')
const authRoute = require('./route/authRoutes')
const userRoute = require('./route/userRoutes')
const connectDB = require('./config/db')

const app = express()

// Connect to MongoDB
connectDB()

const PORT = process.env.PORT || 4000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', "ejs")
app.set('views', path.join(__dirname, './views'))
// static files
app.use(express.static(path.join(__dirname, "views", "public")))

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/blog', (req, res) => {
    res.render('blog')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/single', (req, res) => {
    res.render('single')
})

app.get('/generic', (req, res) => {
    res.render('generic')
})

app.get('/styles', (req, res) => {
    res.render('styles')
})

// Routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
