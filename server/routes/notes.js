const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.json("GET all notes (but not really)"); });

router.get('/:id', (req, res) => { res.json("GET a single note"); });


router.post('/', (req, res) => { res.json("POST a single note"); });

router.delete('/:id', (req, res) => { res.json("DELETE a single note"); });

router.patch('/:id', (req, res) => { res.json("POST a note edit"); });

module.exports = router;