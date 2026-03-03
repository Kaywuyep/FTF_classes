const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
})
router.get('/users/:id') // single parameter
router.get('/user/:id/order/:orderId') // multiple parameter
router.get('/files/:name.:ext?') // optional parameter

module.exports = router;