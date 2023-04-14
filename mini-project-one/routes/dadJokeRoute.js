const express = require('express');
const getDadJokeController = require('../controllers/dadJokeController')
const router = express.Router();

// router.get('/joke', (req, res) => {
//     getDadJokeController.getDadJoke(req, res)
// })
router.get('/jokeTest', (req, res) => {
    getDadJokeController.getJoke(req, res)
})

module.exports = router;