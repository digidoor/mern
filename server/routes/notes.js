const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.json("Here are the notes (but not really)") });

module.exports = router;