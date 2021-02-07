const router = require('express').Router()
let Team = require('../models/team')

router.route('/').get(async (req, res) => {
    res.json(await Team.find())
})

router.route('/add').post(async (req, res) => {
    const name = req.body.name
    const ground = req.body.name

    const newTeam = new Team({
        name, ground
    })

    await newTeam.save()
    res.json('Team Added!')
})

module.exports = router
