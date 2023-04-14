"use strict";
let Models = require("../models"); //matches index.js
let axios = require('axios')

const getGames = (res) => {

    Models.RacingGame.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const getGame = (req, res) => {
    const { gameId } = req.params
    Models.RacingGame.find({ gameId: gameId })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createGame = (data, res) => {

    console.log(data)
    new Models.RacingGame(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const updateGame = (req, res) => {

    console.log(req.body)
    Models.RacingGame.findOneAndUpdate({ gameId: req.params.gameId }, req.body, {
        new: true,
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deleteGame = (req, res) => {

    Models.RacingGame.findOneAndDelete({ gameId: req.params.gameId })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

// const deleteGame = (req, res) => {

//     Models.RacingGame.findByIdAndRemove(req.params.id, req.body, {
//         useFindAndModify: false
//     })
//         .then(data => res.send({ result: 200, data: data }))
//         .catch(err => {
//             console.log(err);
//             res.send({ result: 500, error: err.message })
//         })
// }

const initialiseCollection = async (url) => {
    await Models.RacingGame.deleteMany({});
    try {
        const response = await axios.get(url)
        const games = await response.data
        for (let game of games) {
            const gameEntry = new Models.RacingGame({
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
            // const doc = await Character.findOneAndUpdate(filter, update, {
            //     new: true,
            //     upsert: true // Make this update into an upsert
            //   });
        }
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = {
    getGames, getGame, createGame, deleteGame, updateGame, initialiseCollection
}