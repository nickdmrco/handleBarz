const router = require('express').Router()

router.get('/movie', (req, res) => {
 res.render('index', { fav: 'My fav Movie', thing: 'The Room' })
})

router.get('/song', (req, res) => {
 res.render('index', { fav: 'My fav Song', thing: 'Rise of the Chaos Wizards' })
})
module.exports = router