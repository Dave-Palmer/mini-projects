const axios = require('axios')

const getRecipes = (req, res) => {
    axios("https://api.punkapi.com/v2/beers/")
        .then(response => res.json(response.data))

}

module.exports = { getRecipes }