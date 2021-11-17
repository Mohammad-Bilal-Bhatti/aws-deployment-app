var express = require('express')
var router = express.Router()

router.get(`/posts`, (req, res) => {
    return res.status(200).json([
        { id: 1, name: 'jhon doe', age: 23 },
        { id: 2, name: 'jane doe', age: 21 },
        { id: 3, name: 'james', age: 26 },
    ])
})

module.exports = router