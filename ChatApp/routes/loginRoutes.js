const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const data = {
        title: 'Login',
        user: 'Kamil'
    }

    res.render('login', data)
})

module.exports = router