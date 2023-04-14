let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.strategyController.getGames(res);
})

router.get('/:gameId', (req, res) => {
    Controllers.strategyController.getGame(req, res);
})

router.post('/create', (req, res) => {
    Controllers.strategyController.createGame(req.body, res)
})

router.put('/:gameId', (req, res) => {
    Controllers.strategyController.updateGame(req, res)
})
router.delete('/:gameId', (req, res) => {
    Controllers.strategyController.deleteGame(req, res)
})

module.exports = router;