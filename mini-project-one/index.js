
const express = require('express')
const app = express()
const port = 3000
const dadJokeRoute = require('./routes/dadJokeRoute')
const recipeRoute = require('./routes/recipesRoute')

app.use(express.json())

app.use('/', express.static('public'))

app.use('/dadjoke', dadJokeRoute)
app.use('/recipe', recipeRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})