const notes = require('../../db/db');
const {filterByQuery} = require('../../lib/notes');

const router = require('express').Router();

// Gets all notes - no filter
router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});