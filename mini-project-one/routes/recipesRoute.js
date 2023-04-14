const express = require('express');
const recipesController = require('../controllers/recipesController')
const router = express.Router();

router.get('/recipelist', (req, res) => {
    recipesController.getRecipes(req, res)
})

module.exports = router;

