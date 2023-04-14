require("dotenv").config();

const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
let dbconnect = require('./dbconnect')
let racingRoutes = require('./routes/racingRoutes')
let shooterRoutes = require('./routes/shooterRoutes')
let strategyRoutes = require('./routes/strategyRoutes')
let Controllers = require('./controllers')
let apiUrl = "https://www.freetogame.com/api/games?category="
swaggerDocument = require('./swagger.json');


app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MongoDB application." });
});

app.use('/games/racing', racingRoutes)
app.use('/games/shooter', shooterRoutes)
app.use('/games/strategy', strategyRoutes)



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    Controllers.racingController.initialiseCollection(apiUrl + "racing")
    Controllers.shooterController.initialiseCollection(apiUrl + "shooter")
    Controllers.strategyController.initialiseCollection(apiUrl + "strategy")
});