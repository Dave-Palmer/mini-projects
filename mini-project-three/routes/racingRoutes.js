let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.racingController.getGames(res);
})

router.get('/:gameId', (req, res) => {
    Controllers.racingController.getGame(req, res);
})

router.post('/create', (req, res) => {
    Controllers.racingController.createGame(req.body, res)
})

router.put('/:gameId', (req, res) => {
    Controllers.racingController.updateGame(req, res)
})
router.delete('/:gameId', (req, res) => {
    Controllers.racingController.deleteGame(req, res)
})

module.exports = router;