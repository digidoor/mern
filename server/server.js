require('dotenv').config()
const express = require('express');

//express app
const app = express();

//router init
app.get('/', (req, res) => { res.json("Welcome to the test app.") })

//listen for requests
app.listen(process.env.PORT, () =>
{
    console.log(`listening on port ${process.env.PORT}!!!`);
});