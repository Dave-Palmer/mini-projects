const axios = require('axios')



const getJoke = async (req, res) => {
    try {
        const config = { headers: { Accept: "application/json" } };

        const resp = await axios.get("https://icanhazdadjoke.com/", config);
        console.log(resp.data)
        res.json(resp.data.joke)
    } catch (e) {
        console.log(e)
        res.send("NO JOKES AVAILABLE! SORRY")
    }
};


// const getJoke = async (req, res) => {
//     try {
//         const response = await axios.get('https://catfact.ninja/fact')
//         console.log(response.data)
//         res.json(response.data.fact)
//     }
//     catch (e) {
//         console.log(e)
//         res.json(e)
//     }
// }

module.exports = {
    // getDadJoke,
    getJoke
}

