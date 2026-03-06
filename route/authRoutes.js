const express = require('express')
const router = express.Router()
const {register, login} = require("../controller/authController")
const protect = require('../middleware/protected')

router.get('/', (req, res) => {
    res.json({ message: 'Hello, welcome to My Express System' });
})
router.post('/register', register);
router.post('/login', login);

module.exports = router;