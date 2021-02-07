const router = require('express').Router()
let User = require('../models/user')

router.route('/').get(async (req, res) => {
    res.json(await User.find())
})

router.route('/add').post(async (req, res) => {
    const username = req.body.username
    const newUser = new User({ username })

    await newUser.save()
    res.json('User Added!')
})

module.exports = router
