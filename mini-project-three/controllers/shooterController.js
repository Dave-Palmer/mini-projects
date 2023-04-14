"use strict";
let Models = require("../models"); //matches index.js
let axios = require('axios')

const getGames = (req, res) => {
    const age = req.query
    console.log(parseInt(age.age))
    if (parseInt(age.age) < 18 || Object.keys(age).length === 0) { res.send('Too young for shooter games') }
    else {
        Models.ShooterGame.find({})

            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }
}

const getGame = (req, res) => {
    const age = req.query
    console.log(parseInt(age.age))
    if (parseInt(age.age) < 18 || Object.keys(age).length === 0) { res.send('Too young for shooter games') }
    else {
        const { gameId } = req.params
        Models.ShooterGame.find({ gameId: gameId })
            .then(data => res.send({ result: 200, data: data }))
            .catch(err => {
                console.log(err);
                res.send({ result: 500, error: err.message })
            })
    }
}

const createGame = (data, res) => {

    console.log(data)
    new Models.ShooterGame(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const updateGame = (req, res) => {

    console.log(req.body)
    Models.ShooterGame.findOneAndUpdate({ gameId: req.params.gameId }, req.body, {
        new: true,
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deleteGame = (req, res) => {

    Models.ShooterGame.findOneAndDelete({ gameId: req.params.gameId })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const initialiseCollection = async (url) => {
    await Models.ShooterGame.deleteMany({});
    try {
        const response = await axios.get(url)
        const games = await response.data
        for (let game of games) {
            const gameEntry = new Models.ShooterGame({
                gameId: game.id,
                title: game.title,
                short_description: game.short_description,
                genre: game.genre,
                platform: game.platform,
                publisher: game.publisher,
                developer: game.developer,
                released: game.release_date,

            })
            await gameEntry.save()
        }
    }
    catch (error) {
        console.log(error)
    }
}



module.exports = {
    getGames, getGame, createGame, deleteGame, updateGame, initialiseCollection
}