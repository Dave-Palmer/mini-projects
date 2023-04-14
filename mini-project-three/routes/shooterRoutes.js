let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.shooterController.getGames(req, res);
})

router.get('/:gameId', (req, res) => {
    Controllers.shooterController.getGame(req, res);
})

router.post('/create', (req, res) => {
    Controllers.shooterController.createGame(req.body, res)
})

router.put('/:gameId', (req, res) => {
    Controllers.shooterController.updateGame(req, res)
})
router.delete('/:gameId', (req, res) => {
    Controllers.shooterController.deleteGame(req, res)
})

module.exports = router;