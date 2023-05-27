require('dotenv').config()
const express = require('express');
const noteRoutes = require('./routes/notes');

//express app
const app = express();

//middleware
app.use(express.json()); // allows us to grab things out of req.body
app.use( (req, res, next) =>
{
    console.log(req.path, req.method);
    next();
});

//router init
app.get('/', (req, res) => { res.json("Welcome to the test app.") });

app.use('/api/notes', noteRoutes);

//listen for requests
app.listen(process.env.PORT, () => { console.log(`listening on port ${process.env.PORT}!!!`); });